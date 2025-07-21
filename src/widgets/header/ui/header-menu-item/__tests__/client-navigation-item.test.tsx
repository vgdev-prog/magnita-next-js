import { screen, fireEvent, waitFor, act } from '@testing-library/react';
import { render } from '@/src/shared/lib/test-utils';
import { HeaderMenuItem } from '..';
import { NavItem } from '@/src/widgets/header/types';


jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
    usePathname: () => '/',
}));

// Mock touch device detection to simulate non-touch device
beforeAll(() => {
    // Ensure window.ontouchstart is undefined (non-touch device)
    delete (window as unknown as Record<string, unknown>).ontouchstart;
    
    // Ensure navigator.maxTouchPoints is 0 (non-touch device)
    Object.defineProperty(navigator, 'maxTouchPoints', {
        writable: true,
        configurable: true,
        value: 0,
    });
});



const mockRenderDropdown = jest.fn();

interface MockDropdownProps {
    links: NavItem[];
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

jest.mock('@/src/widgets/header/lib/dropdown-factory', () => ({
    renderDropdown: (menuType: string, { links, onMouseEnter, onMouseLeave }: MockDropdownProps) => {
        mockRenderDropdown(menuType, { links, onMouseEnter, onMouseLeave });
        return (
            <div 
                data-testid="header-submenu"
                data-links-count={links.length}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {links.map((link: NavItem) => (
                    <div key={link.id} data-testid={`submenu-item-${link.id}`}>
                        {link.title}
                    </div>
                ))}
            </div>
        );
    },
}));

describe('HeaderMenuItem', () => {

    const mockItem: NavItem = {
        id: 1,
        title: 'Home',
        href: '/home',
    };

    const mockItemWithChildren: NavItem = {
        id: 2,
        title: 'Services',
        href: '/services',
        children: [
            { id: 3, title: 'Installation', href: '/services/installation' },
            { id: 4, title: 'Maintenance', href: '/services/maintenance' },
        ],
    };

    beforeEach(() => {
        jest.clearAllMocks();
        mockRenderDropdown.mockClear();
    });

    describe('Basic Rendering', () => {
        it('renders navigation item with correct content', () => {
            render(<HeaderMenuItem item={mockItem} />);

            const linkElement = screen.getByRole('link', { name: /Home/i });
            expect(linkElement).toBeInTheDocument();
            expect(linkElement).toHaveAttribute('href', '/home');
        });

        it('renders as a list item with correct CSS class', () => {
            render(<HeaderMenuItem item={mockItem} />);
            
            const listItem = screen.getByRole('listitem');
            expect(listItem).toBeInTheDocument();
            expect(listItem).toHaveClass('item');
        });

        it('handles different URL formats', () => {
            const itemWithAbsoluteUrl: NavItem = {
                id: 3,
                title: 'Catalog',
                href: '/catalog/products',
            };

            render(<HeaderMenuItem item={itemWithAbsoluteUrl} />);

            const linkElement = screen.getByRole('link');
            expect(linkElement).toHaveAttribute('href', '/catalog/products');
        });

        it('displays item title correctly', () => {
            render(<HeaderMenuItem item={mockItem} />);
            
            expect(screen.getByText('Home')).toBeInTheDocument();
        });
    });

    describe('Children Handling', () => {
        it('shows arrow button when item has children', () => {
            render(<HeaderMenuItem item={mockItemWithChildren} />);

            const button = screen.getByRole('button');
            expect(button).toBeInTheDocument();
            expect(button).toHaveClass('icon');
        });

        it('does not show arrow button when item has no children', () => {
            render(<HeaderMenuItem item={mockItem} />);

            expect(screen.queryByRole('button')).not.toBeInTheDocument();
        });

        it('does not show arrow button when children array is empty', () => {
            const itemWithEmptyChildren: NavItem = {
                id: 5,
                title: 'Empty',
                href: '/empty',
                children: [],
            };

            render(<HeaderMenuItem item={itemWithEmptyChildren} />);

            expect(screen.queryByRole('button')).not.toBeInTheDocument();
        });

        it('renders arrow button with correct class and contains SVG', () => {
            render(<HeaderMenuItem item={mockItemWithChildren} />);

            const button = screen.getByRole('button');
            expect(button).toBeInTheDocument();
            expect(button).toHaveClass('icon');
            
            const svg = button.querySelector('svg');
            expect(svg).toBeInTheDocument();
        });
    });

    describe('Dropdown Functionality', () => {
        it('does not show dropdown initially', () => {
            render(<HeaderMenuItem item={mockItemWithChildren} />);

            expect(screen.queryByTestId('header-submenu')).not.toBeInTheDocument();
        });

        it('shows dropdown on mouse enter', async () => {
            render(<HeaderMenuItem item={mockItemWithChildren} />);

            const link = screen.getByRole('link');
            
            await act(async () => {
                fireEvent.mouseEnter(link);
            });


            await waitFor(() => {
                expect(screen.getByTestId('header-submenu')).toBeInTheDocument();
            });
        });

        it('hides dropdown on mouse leave', async () => {
            jest.useFakeTimers();
            
            render(<HeaderMenuItem item={mockItemWithChildren} />);

            const link = screen.getByRole('link');
            
            fireEvent.mouseEnter(link);
            await waitFor(() => {
                expect(screen.getByTestId('header-submenu')).toBeInTheDocument();
            });

            fireEvent.mouseLeave(link);
            
            // Fast-forward the timeout
            act(() => {
                jest.advanceTimersByTime(300);
            });
            
            await waitFor(() => {
                expect(screen.queryByTestId('header-submenu')).not.toBeInTheDocument();
            });
            
            jest.useRealTimers();
        });

        it('passes correct props to HeaderSubmenu', async () => {
            render(<HeaderMenuItem item={mockItemWithChildren} />);

            const link = screen.getByRole('link');
            fireEvent.mouseEnter(link);

            await waitFor(() => {
                const submenu = screen.getByTestId('header-submenu');
                expect(submenu).toHaveAttribute('data-links-count', '2');
                expect(screen.getByTestId('submenu-item-3')).toHaveTextContent('Installation');
                expect(screen.getByTestId('submenu-item-4')).toHaveTextContent('Maintenance');
            });
        });

        it('does not show dropdown for items without children', async () => {
            render(<HeaderMenuItem item={mockItem} />);

            const link = screen.getByRole('link');
            fireEvent.mouseEnter(link);

            await waitFor(() => {
                expect(screen.queryByTestId('header-submenu')).not.toBeInTheDocument();
            });
        });
    });

    describe('Dropdown Interaction', () => {
        it('keeps dropdown open when mouse enters submenu', async () => {
            render(<HeaderMenuItem item={mockItemWithChildren} />);

            const link = screen.getByRole('link');
            fireEvent.mouseEnter(link);

            await waitFor(() => {
                expect(screen.getByTestId('header-submenu')).toBeInTheDocument();
            });

            const submenu = screen.getByTestId('header-submenu');
            fireEvent.mouseEnter(submenu);

            expect(screen.getByTestId('header-submenu')).toBeInTheDocument();
        });

        it('hides dropdown when mouse leaves submenu', async () => {
            jest.useFakeTimers();
            
            render(<HeaderMenuItem item={mockItemWithChildren} />);

            const link = screen.getByRole('link');
            fireEvent.mouseEnter(link);

            await waitFor(() => {
                expect(screen.getByTestId('header-submenu')).toBeInTheDocument();
            });

            const submenu = screen.getByTestId('header-submenu');
            fireEvent.mouseLeave(submenu);

            // Fast-forward the timeout
            act(() => {
                jest.advanceTimersByTime(300);
            });

            await waitFor(() => {
                expect(screen.queryByTestId('header-submenu')).not.toBeInTheDocument();
            });
            
            jest.useRealTimers();
        });
    });

    describe('Accessibility', () => {
        it('has proper semantic structure', () => {
            render(<HeaderMenuItem item={mockItem} />);

            const listItem = screen.getByRole('listitem');
            const link = screen.getByRole('link');

            expect(listItem).toContainElement(link);
        });

        it('arrow button is accessible when present', () => {
            render(<HeaderMenuItem item={mockItemWithChildren} />);

            const button = screen.getByRole('button');
            expect(button).toBeInTheDocument();
        });

        it('link has correct href attribute', () => {
            render(<HeaderMenuItem item={mockItemWithChildren} />);

            const link = screen.getByRole('link');
            expect(link).toHaveAttribute('href', '/services');
        });
    });

    describe('Edge Cases', () => {
        it('handles undefined children gracefully', () => {
            const itemWithUndefinedChildren = { ...mockItem, children: undefined };
            
            render(<HeaderMenuItem item={itemWithUndefinedChildren} />);

            expect(screen.queryByTestId('arrow-icon')).not.toBeInTheDocument();
            expect(screen.queryByTestId('header-submenu')).not.toBeInTheDocument();
        });

        it('handles null children gracefully', () => {
            const itemWithNullChildren = { ...mockItem, children: null as unknown as NavItem[] };
            
            render(<HeaderMenuItem item={itemWithNullChildren} />);

            expect(screen.queryByTestId('arrow-icon')).not.toBeInTheDocument();
            expect(screen.queryByTestId('header-submenu')).not.toBeInTheDocument();
        });

        it('handles empty string title', () => {
            const itemWithEmptyTitle = { ...mockItem, title: '' };
            
            render(<HeaderMenuItem item={itemWithEmptyTitle} />);

            const link = screen.getByRole('link');
            expect(link).toBeInTheDocument();
            expect(link).toHaveTextContent('');
        });

        it('handles special characters in title', () => {
            const itemWithSpecialChars = { ...mockItem, title: 'Services & Support' };
            
            render(<HeaderMenuItem item={itemWithSpecialChars} />);

            expect(screen.getByText('Services & Support')).toBeInTheDocument();
        });
    });
});
