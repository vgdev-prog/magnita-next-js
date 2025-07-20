import { render, screen } from '@testing-library/react'
import { HeaderMenu } from '../index'
import { NavItem } from '../../../types'

describe('HeaderSubmenu Component', () => {
  const MockElement = ({ item }: { item: NavItem }) => (
    <li data-testid={`nav-item-${item.id}`}>
      {item.title} - {item.href}
    </li>
  )

  it('renders navigation menu with provided data', () => {
    const mockData: NavItem[] = [
      { id: 1, title: 'Home', href: '/' },
      { id: 2, title: 'About', href: '/about' },
      { id: 3, title: 'Products', href: '/products' },
    ]

    render(<HeaderMenu links={mockData} Element={MockElement} />)

    expect(screen.getByTestId('nav-item-1')).toBeInTheDocument()
    expect(screen.getByTestId('nav-item-1')).toHaveTextContent('Home - /')
    expect(screen.getByTestId('nav-item-2')).toHaveTextContent('About - /about')
    expect(screen.getByTestId('nav-item-3')).toHaveTextContent('Products - /products')
  })

  it('renders as unordered list', () => {
    const mockData: NavItem[] = []

    const { container } = render(<HeaderMenu links={mockData} Element={MockElement} />)

    const listElement = container.querySelector('ul')
    expect(listElement).toBeInTheDocument()
    expect(listElement).toHaveClass('menu')
  })

  it('handles empty navigation data', () => {
    const { container } = render(<HeaderMenu links={[]} Element={MockElement} />)

    const listElement = container.querySelector('ul')
    expect(listElement).toBeInTheDocument()
    expect(listElement?.children).toHaveLength(0)
  })

  it('renders navigation items with correct keys', () => {
    const mockData: NavItem[] = [
      { id: 1, title: 'Item 1', href: '/item1' },
      { id: 2, title: 'Item 2', href: '/item2' },
    ]

    render(<HeaderMenu links={mockData} Element={MockElement} />)

    expect(screen.getByTestId('nav-item-1')).toBeInTheDocument()
    expect(screen.getByTestId('nav-item-2')).toBeInTheDocument()
  })
})