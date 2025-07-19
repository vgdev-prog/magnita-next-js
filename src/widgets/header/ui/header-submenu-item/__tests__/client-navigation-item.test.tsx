import { render, screen } from '@testing-library/react'
import { HeaderSubmenuItem } from '../index'
import { NavItem } from '../../../types'

// Mock next-intl
jest.mock('next-intl', () => ({
  useLocale: () => 'ua',
  useTranslations: () => (key: string) => key,
}))

// Mock the routing module
jest.mock('@/src/app/i18n/routing', () => ({
  Link: ({ children, href, locale, ...props }: {
    children: React.ReactNode;
    href: string;
    locale?: string;
    [key: string]: unknown;
  }) => (
    <a href={href} data-locale={locale} {...props}>
      {children}
    </a>
  ),
}))

describe('HeaderSubmenuItem Component', () => {
  const mockItem: NavItem = {
    id: 1,
    title: 'Home',
    href: '/home',
  }

  it('renders navigation item with correct content', () => {
    render(<HeaderSubmenuItem item={mockItem} />)
    
    const linkElement = screen.getByRole('link')
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveTextContent('Home')
    expect(linkElement).toHaveAttribute('href', '/ua/home')
  })

  it('renders as list item', () => {
    const { container } = render(<HeaderSubmenuItem item={mockItem} />)
    
    const listItem = container.querySelector('li')
    expect(listItem).toBeInTheDocument()
    expect(listItem).toHaveClass('item')
  })

  it('passes locale to Link component', () => {
    render(<HeaderSubmenuItem item={mockItem} />)
    
    const linkElement = screen.getByRole('link')
    expect(linkElement).toHaveAttribute('href', '/ua/home')
  })

  it('handles different URL formats', () => {
    const itemWithAbsoluteUrl: NavItem = {
      id: 3,
      title: 'Catalog',
      href: '/catalog/products',
    }

    render(<HeaderSubmenuItem item={itemWithAbsoluteUrl} />)
    
    const linkElement = screen.getByRole('link')
    expect(linkElement).toHaveAttribute('href', '/ua/catalog/products')
  })

  it('renders correctly with nested children property', () => {
    const itemWithChildren: NavItem = {
      id: 4,
      title: 'Services',
      href: '/services',
      children: [
        { id: 5, title: 'Installation', href: '/services/installation' },
      ],
    }

    render(<HeaderSubmenuItem item={itemWithChildren} />)
    
    const linkElement = screen.getByRole('link')
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveTextContent('Services')
    expect(linkElement).toHaveAttribute('href', '/ua/services')
  })

  it('applies correct CSS class to list item', () => {
    const { container } = render(<HeaderSubmenuItem item={mockItem} />)
    
    const listItem = container.querySelector('li')
    expect(listItem).toHaveClass('item')
  })

  it('renders link as anchor element', () => {
    render(<HeaderSubmenuItem item={mockItem} />)
    
    const linkElement = screen.getByRole('link')
    expect(linkElement.tagName).toBe('A')
  })
})