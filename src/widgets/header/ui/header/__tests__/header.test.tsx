import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from '../index'
import { NavItem } from '../../../types'

// Mock all header components
jest.mock('@/src/widgets/header/ui/header-logo', () => ({
  HeaderLogo: () => <div data-testid="header-logo">Logo</div>,
}))

jest.mock('@/src/widgets/header/ui/header-factory', () => ({
  HeaderFactory: () => <div data-testid="header-factory">Factory</div>,
}))

jest.mock('@/src/widgets/header/ui/header-calculator', () => ({
  HeaderCalculator: () => <div data-testid="header-calculator">Calculator</div>,
}))

jest.mock('@/src/widgets/header/ui/header-messengers', () => ({
  HeaderMessengers: () => <div data-testid="header-messengers">Messengers</div>,
}))

jest.mock('@/src/widgets/header/ui/header-contacts', () => ({
  HeaderContacts: ({ onCallClick }: { onCallClick: () => void }) => (
    <div data-testid="header-contacts">
      <button onClick={onCallClick} data-testid="call-button">
        Call
      </button>
    </div>
  ),
}))

jest.mock('@/src/widgets/header/ui/header-submenu', () => ({
  HeaderSubmenu: () => <div data-testid="navigation-menu">Navigation</div>,
}))

jest.mock('@/src/widgets/header/model/use-navigation', () => ({
  useNavigation: () => ({
    navigationItems: [],
    isLoading: false,
    error: null,
  }),
}))

// Mock console.log to test the callback
const originalConsoleLog = console.log
beforeEach(() => {
  console.log = jest.fn()
})

afterEach(() => {
  console.log = originalConsoleLog
})

describe('Header Component', () => {
  const mockNavigationItems: NavItem[] = [
    { id: 1, title: 'Home', href: '/' },
    { id: 2, title: 'About', href: '/about' },
  ]

  it('renders all header components', () => {
    render(<Header initialNavigationItems={mockNavigationItems} />)
    
    expect(screen.getByTestId('header-logo')).toBeInTheDocument()
    expect(screen.getByTestId('header-factory')).toBeInTheDocument()
    expect(screen.getByTestId('header-calculator')).toBeInTheDocument()
    expect(screen.getByTestId('header-messengers')).toBeInTheDocument()
    expect(screen.getByTestId('header-contacts')).toBeInTheDocument()
    expect(screen.getByTestId('navigation-menu')).toBeInTheDocument()
  })

  it('renders header with correct structure', () => {
    const { container } = render(<Header initialNavigationItems={mockNavigationItems} />)
    
    const headerElement = container.querySelector('header')
    expect(headerElement).toBeInTheDocument()
    
    const topHeader = container.querySelector('.top_header')
    expect(topHeader).toBeInTheDocument()
    
    const bottomHeader = container.querySelector('.bottom_header')
    expect(bottomHeader).toBeInTheDocument()
  })

  it('applies correct CSS classes', () => {
    const { container } = render(<Header initialNavigationItems={mockNavigationItems} />)
    
    const headerElement = container.querySelector('header')
    expect(headerElement).toHaveClass('header')
    
    const topHeaderDiv = container.querySelector('.top_header')
    expect(topHeaderDiv).toBeInTheDocument()
    
    const containerDiv = container.querySelector('.container')
    expect(containerDiv).toHaveClass('header__container')
    expect(containerDiv).toHaveClass('container')
    
    const bottomHeaderDiv = container.querySelector('.bottom_header')
    expect(bottomHeaderDiv).toBeInTheDocument()
    
    const headerContainerDiv = container.querySelector('.header__container')
    expect(headerContainerDiv).toBeInTheDocument()
  })

  it('handles call button click', async () => {
    const user = userEvent.setup()
    
    render(<Header initialNavigationItems={mockNavigationItems} />)
    
    const callButton = screen.getByTestId('call-button')
    await user.click(callButton)
    
    expect(console.log).toHaveBeenCalledWith('open modal')
  })

  it('renders as a semantic header element', () => {
    render(<Header initialNavigationItems={mockNavigationItems} />)
    
    const headerElement = screen.getByRole('banner')
    expect(headerElement).toBeInTheDocument()
    expect(headerElement.tagName).toBe('HEADER')
  })

  it('contains navigation menu', () => {
    render(<Header initialNavigationItems={mockNavigationItems} />)
    
    const navigationMenu = screen.getByTestId('navigation-menu')
    expect(navigationMenu).toBeInTheDocument()
  })
})