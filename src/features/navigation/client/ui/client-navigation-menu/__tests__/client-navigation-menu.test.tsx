import { render, screen, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ClientNavigationMenu } from '../index'
import { fetchClientNavigation } from '../../../api/navigation-api'
import { ClientRoute } from '../../../types'

// Mock the API
jest.mock('../../../api/navigation-api')
const mockFetchClientNavigation = fetchClientNavigation as jest.MockedFunction<typeof fetchClientNavigation>

// Mock the ClientNavigationItem component
jest.mock('../../client-navigation-item', () => ({
  ClientNavigationItem: ({ link }: { link: ClientRoute }) => (
    <li data-testid={`nav-item-${link.id}`}>
      {link.label} - {link.url}
    </li>
  ),
}))

// Mock console.log to test the logging
const originalConsoleLog = console.log
beforeEach(() => {
  console.log = jest.fn()
})

afterEach(() => {
  console.log = originalConsoleLog
})

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })

const renderWithQueryClient = (component: React.ReactElement) => {
  const queryClient = createTestQueryClient()
  return render(
    <QueryClientProvider client={queryClient}>
      {component}
    </QueryClientProvider>
  )
}

describe('ClientNavigationMenu Component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders navigation menu with fetched data', async () => {
    const mockData: ClientRoute[] = [
      { id: 1, label: 'Home', url: '/' },
      { id: 2, label: 'About', url: '/about' },
      { id: 3, label: 'Products', url: '/products' },
    ]

    mockFetchClientNavigation.mockResolvedValue(mockData)

    renderWithQueryClient(<ClientNavigationMenu />)

    // Wait for the data to be fetched and rendered
    await waitFor(() => {
      expect(screen.getByTestId('nav-item-1')).toBeInTheDocument()
    })

    expect(screen.getByTestId('nav-item-1')).toHaveTextContent('Home - /')
    expect(screen.getByTestId('nav-item-2')).toHaveTextContent('About - /about')
    expect(screen.getByTestId('nav-item-3')).toHaveTextContent('Products - /products')
  })

  it('renders as unordered list', () => {
    mockFetchClientNavigation.mockResolvedValue([])

    const { container } = renderWithQueryClient(<ClientNavigationMenu />)

    const listElement = container.querySelector('ul')
    expect(listElement).toBeInTheDocument()
    expect(listElement).toHaveClass('menu')
  })

  it('calls fetchClientNavigation API', async () => {
    mockFetchClientNavigation.mockResolvedValue([])

    renderWithQueryClient(<ClientNavigationMenu />)

    await waitFor(() => {
      expect(mockFetchClientNavigation).toHaveBeenCalledTimes(1)
    })
  })

  it('logs fetched data to console', async () => {
    const mockData: ClientRoute[] = [
      { id: 1, label: 'Test', url: '/test' },
    ]

    mockFetchClientNavigation.mockResolvedValue(mockData)

    renderWithQueryClient(<ClientNavigationMenu />)

    await waitFor(() => {
      expect(console.log).toHaveBeenCalledWith(mockData)
    })
  })

  it('handles empty navigation data', async () => {
    mockFetchClientNavigation.mockResolvedValue([])

    const { container } = renderWithQueryClient(<ClientNavigationMenu />)

    await waitFor(() => {
      expect(mockFetchClientNavigation).toHaveBeenCalledTimes(1)
    })

    const listElement = container.querySelector('ul')
    expect(listElement).toBeInTheDocument()
    expect(listElement?.children).toHaveLength(0)
  })

  it('renders navigation items with correct keys', async () => {
    const mockData: ClientRoute[] = [
      { id: 1, label: 'Item 1', url: '/item1' },
      { id: 2, label: 'Item 2', url: '/item2' },
    ]

    mockFetchClientNavigation.mockResolvedValue(mockData)

    renderWithQueryClient(<ClientNavigationMenu />)

    await waitFor(() => {
      expect(screen.getByTestId('nav-item-1')).toBeInTheDocument()
      expect(screen.getByTestId('nav-item-2')).toBeInTheDocument()
    })
  })

  it('handles API errors gracefully', async () => {
    mockFetchClientNavigation.mockRejectedValue(new Error('API Error'))

    const { container } = renderWithQueryClient(<ClientNavigationMenu />)

    await waitFor(() => {
      expect(mockFetchClientNavigation).toHaveBeenCalledTimes(1)
    })

    const listElement = container.querySelector('ul')
    expect(listElement).toBeInTheDocument()
    // Should render empty list when API fails
    expect(listElement?.children).toHaveLength(0)
  })
})