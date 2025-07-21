import { render } from '@testing-library/react'
import { TelegramIcon } from '../telegram-icon'

describe('TelegramIcon Component', () => {
  it('renders SVG element', () => {
    const { container } = render(<TelegramIcon />)
    
    const svgElement = container.querySelector('svg')
    expect(svgElement).toBeInTheDocument()
  })

  it('applies default size of 15', () => {
    const { container } = render(<TelegramIcon />)
    
    const svgElement = container.querySelector('svg')
    expect(svgElement).toHaveAttribute('width', '15')
    expect(svgElement).toHaveAttribute('height', '15')
  })

  it('applies custom size when provided', () => {
    const { container } = render(<TelegramIcon size={30} />)
    
    const svgElement = container.querySelector('svg')
    expect(svgElement).toHaveAttribute('width', '30')
    expect(svgElement).toHaveAttribute('height', '30')
  })

  it('applies custom className when provided', () => {
    const { container } = render(<TelegramIcon className="custom-class" />)
    
    const svgElement = container.querySelector('svg')
    expect(svgElement).toHaveClass('custom-class')
  })

  it('has correct SVG attributes', () => {
    const { container } = render(<TelegramIcon />)
    
    const svgElement = container.querySelector('svg')
    expect(svgElement).toHaveAttribute('xmlns', 'http://www.w3.org/2000/svg')
    expect(svgElement).toHaveAttribute('version', '1.1')
    expect(svgElement).toHaveAttribute('id', 'Capa_1')
    expect(svgElement).toHaveAttribute('x', '0px')
    expect(svgElement).toHaveAttribute('y', '0px')
    expect(svgElement).toHaveAttribute('viewBox', '0 0 512.004 512.004')
  })

  it('contains path element with telegram icon shape', () => {
    const { container } = render(<TelegramIcon />)
    
    const pathElement = container.querySelector('path')
    expect(pathElement).toBeInTheDocument()
    expect(pathElement).toHaveAttribute('d')
    
    const pathData = pathElement?.getAttribute('d')
    expect(pathData).toBeTruthy()
    expect(pathData).toContain('M508.194,20.517')
  })

  it('accepts all props from TelegramIconProps interface', () => {
    const { container } = render(
      <TelegramIcon 
        className="test-class" 
        fill="red" 
        size={25} 
      />
    )
    
    const svgElement = container.querySelector('svg')
    expect(svgElement).toHaveClass('test-class')
    expect(svgElement).toHaveAttribute('width', '25')
    expect(svgElement).toHaveAttribute('height', '25')
  })

  it('renders with square dimensions (width equals height)', () => {
    const { container } = render(<TelegramIcon size={50} />)
    
    const svgElement = container.querySelector('svg')
    const width = svgElement?.getAttribute('width')
    const height = svgElement?.getAttribute('height')
    
    expect(width).toBe(height)
    expect(width).toBe('50')
  })

  it('maintains aspect ratio with viewBox', () => {
    const { container } = render(<TelegramIcon />)
    
    const svgElement = container.querySelector('svg')
    const viewBox = svgElement?.getAttribute('viewBox')
    
    expect(viewBox).toBe('0 0 512.004 512.004')
  })

  it('does not apply fill prop directly to svg (fill not implemented)', () => {
    const { container } = render(<TelegramIcon fill="blue" />)
    
    const svgElement = container.querySelector('svg')
    expect(svgElement).not.toHaveAttribute('fill')
  })
})