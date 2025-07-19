import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from '../index'

jest.mock('@/src/app/i18n/routing', () => ({
  Link: ({ children, href, ...props }: {
    children: React.ReactNode;
    href: string;
    [key: string]: unknown;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}))

describe('Button Component', () => {
  it('renders as button by default', () => {
    render(<Button>Click me</Button>)
    
    const buttonElement = screen.getByRole('button', { name: /click me/i })
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement.tagName).toBe('BUTTON')
  })

  it('renders as link when asLink is true', () => {
    render(
      <Button asLink href="/test">
        Go to test
      </Button>
    )
    
    const linkElement = screen.getByRole('link', { name: /go to test/i })
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveAttribute('href', '/test')
  })

  it('applies custom className', () => {
    const { container } = render(
      <Button className="custom-class">Test Button</Button>
    )
    
    const buttonElement = container.querySelector('button')
    expect(buttonElement).toHaveClass('custom-class')
  })

  it('handles button click events', async () => {
    const user = userEvent.setup()
    const handleClick = jest.fn()
    
    render(<Button onClick={handleClick}>Click me</Button>)
    
    const buttonElement = screen.getByRole('button', { name: /click me/i })
    await user.click(buttonElement)
    
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('passes button props correctly', () => {
    render(
      <Button type="submit" disabled>
        Submit
      </Button>
    )
    
    const buttonElement = screen.getByRole('button', { name: /submit/i })
    expect(buttonElement).toHaveAttribute('type', 'submit')
    expect(buttonElement).toBeDisabled()
  })

  it('passes link props correctly', () => {
    render(
      <Button asLink href="/test" target="_blank" rel="noopener">
        External Link
      </Button>
    )
    
    const linkElement = screen.getByRole('link', { name: /external link/i })
    expect(linkElement).toHaveAttribute('href', '/test')
    expect(linkElement).toHaveAttribute('target', '_blank')
    expect(linkElement).toHaveAttribute('rel', 'noopener')
  })

  it('applies default button styles', () => {
    const { container } = render(<Button>Styled Button</Button>)
    
    const buttonElement = container.querySelector('button')
    expect(buttonElement).toHaveClass('button')
  })

  it('applies default link styles', () => {
    const { container } = render(
      <Button asLink href="/test">
        Styled Link
      </Button>
    )
    
    const linkElement = container.querySelector('a')
    expect(linkElement).toHaveClass('button')
  })
})