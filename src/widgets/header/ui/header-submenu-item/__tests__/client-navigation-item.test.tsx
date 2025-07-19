import { render, screen } from '@testing-library/react'
import { ClientNavigationItem } from '../index'
import { ClientRoute } from '../../../types'

// Mock next-intl
jest.mock('next-intl', () => ({
  useLocale: () => 'ua',
  useTranslations: () => (key: string) => key,
}))

// Mock the routing module
jest.mock('@/src/app/i18n/routing', () => ({
  Link: ({ children, href, locale, ...props }: any) => (
    <a href={href} data-locale={locale} {...props}>
      {children}
    </a>
  ),
}))

describe('ClientNavigationItem Component', () => {
  const mockLink: ClientRoute = {
    id: 1,
    label: 'navigation.home',
    url: '/home',
  }

  it('renders navigation item with correct content', () => {
    render(<ClientNavigationItem link={mockLink} />)
    
    const linkElement = screen.getByRole('link')
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveTextContent('navigation.home')
    expect(linkElement).toHaveAttribute('href', '/home')
  })

  it('renders as list item', () => {
    const { container } = render(<ClientNavigationItem link={mockLink} />)
    
    const listItem = container.querySelector('li')
    expect(listItem).toBeInTheDocument()
    expect(listItem).toHaveClass('item')
  })

  it('passes locale to Link component', () => {
    render(<ClientNavigationItem link={mockLink} />)
    
    const linkElement = screen.getByRole('link')
    expect(linkElement).toHaveAttribute('data-locale', 'ua')
  })

  it('uses translation for link label', () => {
    const linkWithTranslationKey: ClientRoute = {
      id: 2,
      label: 'navigation.products',
      url: '/products',
    }

    render(<ClientNavigationItem link={linkWithTranslationKey} />)
    
    const linkElement = screen.getByRole('link')
    expect(linkElement).toHaveTextContent('navigation.products')
  })

  it('handles different URL formats', () => {
    const linkWithAbsoluteUrl: ClientRoute = {
      id: 3,
      label: 'navigation.catalog',
      url: '/catalog/products',
    }

    render(<ClientNavigationItem link={linkWithAbsoluteUrl} />)
    
    const linkElement = screen.getByRole('link')
    expect(linkElement).toHaveAttribute('href', '/catalog/products')
  })

  it('renders correctly with nested children property', () => {
    const linkWithChildren: ClientRoute = {
      id: 4,
      label: 'navigation.services',
      url: '/services',
      children: [
        { id: 5, label: 'navigation.installation', url: '/services/installation' },
      ],
    }

    render(<ClientNavigationItem link={linkWithChildren} />)
    
    const linkElement = screen.getByRole('link')
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveTextContent('navigation.services')
    expect(linkElement).toHaveAttribute('href', '/services')
  })

  it('applies correct CSS class to list item', () => {
    const { container } = render(<ClientNavigationItem link={mockLink} />)
    
    const listItem = container.querySelector('li')
    expect(listItem).toHaveClass('item')
  })

  it('renders link as anchor element', () => {
    render(<ClientNavigationItem link={mockLink} />)
    
    const linkElement = screen.getByRole('link')
    expect(linkElement.tagName).toBe('A')
  })
})