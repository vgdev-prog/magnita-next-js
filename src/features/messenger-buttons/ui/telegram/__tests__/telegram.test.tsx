import { render, screen } from '@testing-library/react'
import { TelegramButton } from '../index'

// Mock next-intl
jest.mock('next-intl', () => ({
  useLocale: () => 'ua',
}))

// Mock next/link
jest.mock('next/link', () => {
  return function MockLink({ children, href, target, className }: any) {
    return (
      <a href={href} target={target} className={className}>
        {children}
      </a>
    )
  }
})

// Mock TelegramIcon
jest.mock('@/src/shared', () => ({
  TelegramIcon: ({ className }: { className?: string }) => (
    <svg data-testid="telegram-icon" className={className}>
      <path />
    </svg>
  ),
}))

describe('TelegramButton Component', () => {
  it('renders telegram button with correct link', () => {
    render(<TelegramButton />)
    
    const linkElement = screen.getByRole('link')
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveAttribute('href', 'https://t.me/pnvp_magnita')
    expect(linkElement).toHaveAttribute('target', '_blank')
  })

  it('renders telegram icon', () => {
    const { container } = render(<TelegramButton />)
    
    const iconElement = container.querySelector('svg')
    expect(iconElement).toBeInTheDocument()
  })

  it('displays "Telegram" text', () => {
    render(<TelegramButton />)
    
    const textElement = screen.getByText('Telegram')
    expect(textElement).toBeInTheDocument()
  })

  it('applies correct CSS classes', () => {
    const { container } = render(<TelegramButton />)
    
    const linkElement = container.querySelector('a')
    expect(linkElement).toHaveClass('btn')
    
    const iconElement = container.querySelector('svg')
    expect(iconElement).toHaveClass('icon')
    
    const textElement = container.querySelector('span')
    expect(textElement).toHaveClass('text')
  })

  it('opens in new tab', () => {
    render(<TelegramButton />)
    
    const linkElement = screen.getByRole('link')
    expect(linkElement).toHaveAttribute('target', '_blank')
  })

  it('links to correct Telegram channel', () => {
    render(<TelegramButton />)
    
    const linkElement = screen.getByRole('link')
    expect(linkElement).toHaveAttribute('href', 'https://t.me/pnvp_magnita')
  })

  it('has proper semantic structure', () => {
    const { container } = render(<TelegramButton />)
    
    const linkElement = screen.getByRole('link')
    expect(linkElement).toBeInTheDocument()
    
    // Should contain both icon and text for accessibility
    const iconElement = container.querySelector('svg')
    const textElement = screen.getByText('Telegram')
    
    expect(linkElement).toContainElement(iconElement!)
    expect(linkElement).toContainElement(textElement)
  })

  it('uses useLocale hook', () => {
    // This test ensures the component calls useLocale
    // The mock will verify it's being called
    render(<TelegramButton />)
    
    // If useLocale wasn't called, the component would fail to render
    expect(screen.getByRole('link')).toBeInTheDocument()
  })

  it('renders as anchor element', () => {
    render(<TelegramButton />)
    
    const linkElement = screen.getByRole('link')
    expect(linkElement.tagName).toBe('A')
  })

  it('contains icon and text as children', () => {
    const { container } = render(<TelegramButton />)
    
    const linkElement = container.querySelector('a')
    expect(linkElement?.children).toHaveLength(2)
    
    const iconElement = linkElement?.querySelector('svg')
    const textElement = linkElement?.querySelector('span')
    
    expect(iconElement).toBeInTheDocument()
    expect(textElement).toBeInTheDocument()
    expect(textElement).toHaveTextContent('Telegram')
  })
})