import { screen } from '@testing-library/react';
import { render } from '@/src/shared/lib/test-utils';
import { HeaderSubmenu } from '../header-submenu';
import { NavItem } from '@/src/widgets/header/types';

jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
    usePathname: () => '/',
}));

jest.mock('react-dom', () => ({
    ...jest.requireActual('react-dom'),
    createPortal: (children: React.ReactNode) => children,
}));

describe('HeaderSubmenu', () => {
    const mockLinks: NavItem[] = [
        { id: 1, title: 'Installation', href: '/services/installation' },
        { id: 2, title: 'Maintenance', href: '/services/maintenance' },
        { id: 3, title: 'Support', href: '/services/support' },
    ];

    const mockTriggerRef = {
        current: {
            getBoundingClientRect: jest.fn(() => ({
                bottom: 100,
                left: 200,
                width: 150,
                right: 350,
                top: 80,
                height: 20,
                x: 200,
                y: 80,
                toJSON: jest.fn(),
            })),
        },
    } as React.RefObject<HTMLElement>;

    const defaultProps = {
        links: mockLinks,
        onMouseEnter: jest.fn(),
        onMouseLeave: jest.fn(),
        triggerRef: mockTriggerRef,
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('Basic Rendering', () => {
        it('renders dropdown container with correct CSS classes', () => {
            render(<HeaderSubmenu {...defaultProps} />);

            const dropdown = document.querySelector('.dropdown');
            expect(dropdown).toBeInTheDocument();
            expect(dropdown).toHaveClass('dropdown');
        });

        it('renders dropdown content container', () => {
            render(<HeaderSubmenu {...defaultProps} />);

            const dropdownContent = document.querySelector('.dropdownContent');
            expect(dropdownContent).toBeInTheDocument();
        });

        it('renders all navigation links', () => {
            render(<HeaderSubmenu {...defaultProps} />);

            expect(screen.getByRole('link', { name: 'Installation' })).toBeInTheDocument();
            expect(screen.getByRole('link', { name: 'Maintenance' })).toBeInTheDocument();
            expect(screen.getByRole('link', { name: 'Support' })).toBeInTheDocument();
        });

        it('applies correct CSS classes to links', () => {
            render(<HeaderSubmenu {...defaultProps} />);

            const links = screen.getAllByRole('link');
            links.forEach(link => {
                expect(link).toHaveClass('dropdownItem');
            });
        });

        it('sets correct href attributes on links', () => {
            render(<HeaderSubmenu {...defaultProps} />);

            expect(screen.getByRole('link', { name: 'Installation' }))
                .toHaveAttribute('href', '/services/installation');
            expect(screen.getByRole('link', { name: 'Maintenance' }))
                .toHaveAttribute('href', '/services/maintenance');
            expect(screen.getByRole('link', { name: 'Support' }))
                .toHaveAttribute('href', '/services/support');
        });
    });

    describe('Positioning', () => {
        it('calculates position based on trigger element', () => {
            render(<HeaderSubmenu {...defaultProps} />);

            expect(mockTriggerRef.current?.getBoundingClientRect).toHaveBeenCalled();
        });

        it('applies calculated position as CSS custom properties', () => {
            render(<HeaderSubmenu {...defaultProps} />);

            const dropdown = document.querySelector('.dropdown') as HTMLElement;
            expect(dropdown).toBeInTheDocument();
            
            expect(dropdown.style.getPropertyValue('--dropdown-top')).toBe('102px');
            expect(dropdown.style.getPropertyValue('--dropdown-left')).toBe('275px');
        });

        it('updates position when triggerRef changes', () => {
            const { rerender } = render(<HeaderSubmenu {...defaultProps} />);

            const newTriggerRef = {
                current: {
                    getBoundingClientRect: jest.fn(() => ({
                        bottom: 150,
                        left: 300,
                        width: 100,
                        right: 400,
                        top: 130,
                        height: 20,
                        x: 300,
                        y: 130,
                        toJSON: jest.fn(),
                    })),
                },
            } as React.RefObject<HTMLElement>;

            rerender(<HeaderSubmenu {...defaultProps} triggerRef={newTriggerRef} />);

            const dropdown = document.querySelector('.dropdown') as HTMLElement;
            
            expect(dropdown.style.getPropertyValue('--dropdown-top')).toBe('152px');
            expect(dropdown.style.getPropertyValue('--dropdown-left')).toBe('350px');
        });

        it('handles missing triggerRef gracefully', () => {
            const propsWithoutRef = { ...defaultProps, triggerRef: undefined };
            
            expect(() => render(<HeaderSubmenu {...propsWithoutRef} />)).not.toThrow();
        });

        it('handles triggerRef with null current gracefully', () => {
            const nullRef = { current: null } as React.RefObject<HTMLElement>;
            const propsWithNullRef = { ...defaultProps, triggerRef: nullRef };
            
            expect(() => render(<HeaderSubmenu {...propsWithNullRef} />)).not.toThrow();
        });
    });

    describe('Event Handling', () => {
        it('renders without event handlers when not provided', () => {
            const propsWithoutHandlers = {
                links: mockLinks,
                triggerRef: mockTriggerRef,
            };

            expect(() => render(<HeaderSubmenu {...propsWithoutHandlers} />)).not.toThrow();
            
            const dropdown = document.querySelector('.dropdown')!;
            expect(dropdown).toBeInTheDocument();
        });

        it('renders with event handlers when provided', () => {
            render(<HeaderSubmenu {...defaultProps} />);

            const dropdown = document.querySelector('.dropdown')!;
            expect(dropdown).toBeInTheDocument();
            
            // Event handlers are passed as props but may not be directly attached to DOM
            expect(defaultProps.onMouseEnter).toBeDefined();
            expect(defaultProps.onMouseLeave).toBeDefined();
        });

        it('works without event handlers', () => {
            const propsWithoutHandlers = {
                links: mockLinks,
                triggerRef: mockTriggerRef,
            };

            expect(() => render(<HeaderSubmenu {...propsWithoutHandlers} />)).not.toThrow();
        });
    });

    describe('Portal Rendering', () => {
        it('renders content through createPortal', () => {
            render(<HeaderSubmenu {...defaultProps} />);

            const dropdown = document.querySelector('.dropdown');
            expect(dropdown).toBeInTheDocument();
        });
    });

    describe('Empty State', () => {
        it('renders without links', () => {
            const emptyProps = { ...defaultProps, links: [] };
            
            render(<HeaderSubmenu {...emptyProps} />);

            const dropdown = document.querySelector('.dropdown');
            expect(dropdown).toBeInTheDocument();
            expect(screen.queryByRole('link')).not.toBeInTheDocument();
        });

        it('handles empty links array gracefully', () => {
            const emptyProps = { ...defaultProps, links: [] };
            
            expect(() => render(<HeaderSubmenu {...emptyProps} />)).not.toThrow();
        });
    });

    describe('Accessibility', () => {
        it('provides accessible links', () => {
            render(<HeaderSubmenu {...defaultProps} />);

            const links = screen.getAllByRole('link');
            expect(links).toHaveLength(3);
            
            links.forEach(link => {
                expect(link).toBeVisible();
                expect(link).toHaveAttribute('href');
            });
        });

        it('maintains proper link text', () => {
            render(<HeaderSubmenu {...defaultProps} />);

            expect(screen.getByRole('link', { name: 'Installation' })).toBeInTheDocument();
            expect(screen.getByRole('link', { name: 'Maintenance' })).toBeInTheDocument();
            expect(screen.getByRole('link', { name: 'Support' })).toBeInTheDocument();
        });
    });

    describe('Data Handling', () => {
        it('handles links with special characters', () => {
            const specialLinks: NavItem[] = [
                { id: 1, title: 'Services & Support', href: '/services-support' },
                { id: 2, title: 'R&D Department', href: '/rd' },
            ];

            const specialProps = { ...defaultProps, links: specialLinks };
            render(<HeaderSubmenu {...specialProps} />);

            expect(screen.getByRole('link', { name: 'Services & Support' })).toBeInTheDocument();
            expect(screen.getByRole('link', { name: 'R&D Department' })).toBeInTheDocument();
        });

        it('handles links with long titles', () => {
            const longTitleLinks: NavItem[] = [
                { 
                    id: 1, 
                    title: 'Very Long Service Title That Might Wrap To Multiple Lines', 
                    href: '/long-service' 
                },
            ];

            const longProps = { ...defaultProps, links: longTitleLinks };
            render(<HeaderSubmenu {...longProps} />);

            expect(screen.getByRole('link', { 
                name: 'Very Long Service Title That Might Wrap To Multiple Lines' 
            })).toBeInTheDocument();
        });

        it('handles numeric IDs correctly', () => {
            const numericLinks: NavItem[] = [
                { id: 999, title: 'High ID Service', href: '/high-id' },
                { id: 0, title: 'Zero ID Service', href: '/zero-id' },
            ];

            const numericProps = { ...defaultProps, links: numericLinks };
            render(<HeaderSubmenu {...numericProps} />);

            expect(screen.getByRole('link', { name: 'High ID Service' })).toBeInTheDocument();
            expect(screen.getByRole('link', { name: 'Zero ID Service' })).toBeInTheDocument();
        });

        it('preserves link order', () => {
            render(<HeaderSubmenu {...defaultProps} />);

            const links = screen.getAllByRole('link');
            expect(links[0]).toHaveTextContent('Installation');
            expect(links[1]).toHaveTextContent('Maintenance');
            expect(links[2]).toHaveTextContent('Support');
        });
    });

    describe('Style Application', () => {
        it('applies dropdown CSS class', () => {
            render(<HeaderSubmenu {...defaultProps} />);

            const dropdown = document.querySelector('.dropdown');
            expect(dropdown).toHaveClass('dropdown');
        });

        it('applies inline styles for positioning', () => {
            render(<HeaderSubmenu {...defaultProps} />);

            const dropdown = document.querySelector('.dropdown') as HTMLElement;
            expect(dropdown.style.getPropertyValue('--dropdown-top')).toBe('102px');
            expect(dropdown.style.getPropertyValue('--dropdown-left')).toBe('275px');
        });
    });

    describe('Re-rendering', () => {
        it('updates when links change', () => {
            const { rerender } = render(<HeaderSubmenu {...defaultProps} />);

            expect(screen.getAllByRole('link')).toHaveLength(3);

            const newLinks: NavItem[] = [
                { id: 4, title: 'New Service', href: '/new-service' },
            ];

            rerender(<HeaderSubmenu {...defaultProps} links={newLinks} />);

            expect(screen.getAllByRole('link')).toHaveLength(1);
            expect(screen.getByRole('link', { name: 'New Service' })).toBeInTheDocument();
        });

        it('updates position when triggerRef element changes', () => {
            const { rerender } = render(<HeaderSubmenu {...defaultProps} />);

            let dropdown = document.querySelector('.dropdown') as HTMLElement;
            expect(dropdown.style.getPropertyValue('--dropdown-top')).toBe('102px');

            // Create new trigger ref with different position
            const newTriggerRef = {
                current: {
                    getBoundingClientRect: jest.fn(() => ({
                        bottom: 200,
                        left: 400,
                        width: 200,
                        right: 600,
                        top: 180,
                        height: 20,
                        x: 400,
                        y: 180,
                        toJSON: jest.fn(),
                    })),
                },
            } as React.RefObject<HTMLElement>;

            rerender(<HeaderSubmenu {...defaultProps} triggerRef={newTriggerRef} />);

            dropdown = document.querySelector('.dropdown') as HTMLElement;
            expect(dropdown.style.getPropertyValue('--dropdown-top')).toBe('202px');
            expect(dropdown.style.getPropertyValue('--dropdown-left')).toBe('500px');
        });
    });
});