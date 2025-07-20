import { screen } from '@testing-library/react';
import { render } from '@/src/shared/lib/test-utils';
import { Header } from '../the-header';
import { NavItem } from '@/src/widgets/header/types';
import * as useNavigationModule from '@/src/widgets/header/model/use-navigation';

jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
    usePathname: () => '/',
}));

jest.mock('@/src/widgets/header/model/use-navigation', () => ({
    useNavigation: jest.fn(),
}));

jest.mock('@/src/widgets/header/ui/header-logo', () => ({
    HeaderLogo: () => <div data-testid="header-logo">Logo</div>,
}));

jest.mock('@/src/widgets/header/ui/header-factory', () => ({
    HeaderFactory: () => <div data-testid="header-factory">Factory</div>,
}));

jest.mock('@/src/widgets/header/ui/header-calculator', () => ({
    HeaderCalculator: () => <div data-testid="header-calculator">Calculator</div>,
}));

jest.mock('@/src/widgets/header/ui/header-messengers', () => ({
    HeaderMessengers: () => <div data-testid="header-messengers">Messengers</div>,
}));

interface HeaderActionsProps {
    burger?: React.ReactNode;
    search?: React.ReactNode;
    language?: React.ReactNode;
    cart?: React.ReactNode;
}

interface HeaderMenuProps {
    links: NavItem[];
    Element: React.ComponentType<{ item: NavItem }>;
}

jest.mock('@/src/widgets/header/ui/header-actions', () => ({
    HeaderActions: ({ burger, search, language, cart }: HeaderActionsProps) => (
        <div data-testid="header-actions">
            {burger && <div data-testid="burger">{burger}</div>}
            {search && <div data-testid="search">{search}</div>}
            {language && <div data-testid="language">{language}</div>}
            {cart && <div data-testid="cart">{cart}</div>}
        </div>
    ),
}));

jest.mock('@/src/widgets/header/ui', () => ({
    HeaderMenu: ({ links, Element }: HeaderMenuProps) => (
        <div data-testid="header-menu" data-links-count={links.length}>
            {links.map((link: NavItem) => (
                <Element key={link.id} item={link} />
            ))}
        </div>
    ),
    HeaderMenuItem: ({ item }: { item: NavItem }) => (
        <div data-testid={`menu-item-${item.id}`}>{item.title}</div>
    ),
}));

describe('Header', () => {
    const mockUseNavigation = jest.spyOn(useNavigationModule, 'useNavigation');

    const mockNavigationItems: NavItem[] = [
        { id: 1, title: 'Home', href: '/' },
        { id: 2, title: 'Services', href: '/services', children: [
            { id: 3, title: 'Installation', href: '/services/installation' },
        ]},
        { id: 4, title: 'About', href: '/about' },
    ];

    const defaultProps = {
        initialNavigationItems: mockNavigationItems,
    };

    beforeEach(() => {
        jest.clearAllMocks();
        mockUseNavigation.mockReturnValue({
            navigationItems: mockNavigationItems,
        });
    });

    describe('Basic Rendering', () => {
        it('renders header element with correct CSS class', () => {
            render(<Header {...defaultProps} />);

            const header = screen.getByRole('banner');
            expect(header).toBeInTheDocument();
            expect(header).toHaveClass('header');
        });

        it('renders top header section', () => {
            render(<Header {...defaultProps} />);

            const topHeader = screen.getByRole('banner').querySelector('.top_header');
            expect(topHeader).toBeInTheDocument();
        });

        it('renders bottom header section', () => {
            render(<Header {...defaultProps} />);

            const bottomHeader = screen.getByRole('banner').querySelector('.bottom_header');
            expect(bottomHeader).toBeInTheDocument();
        });

        it('applies correct container classes', () => {
            render(<Header {...defaultProps} />);

            const containers = screen.getByRole('banner').querySelectorAll('.container, .header__container');
            expect(containers.length).toBeGreaterThan(0);
        });
    });

    describe('Component Integration', () => {
        it('renders HeaderLogo component', () => {
            render(<Header {...defaultProps} />);

            expect(screen.getByTestId('header-logo')).toBeInTheDocument();
        });

        it('renders HeaderFactory component', () => {
            render(<Header {...defaultProps} />);

            expect(screen.getByTestId('header-factory')).toBeInTheDocument();
        });

        it('renders HeaderCalculator component', () => {
            render(<Header {...defaultProps} />);

            expect(screen.getByTestId('header-calculator')).toBeInTheDocument();
        });

        it('renders HeaderMessengers component', () => {
            render(<Header {...defaultProps} />);

            expect(screen.getByTestId('header-messengers')).toBeInTheDocument();
        });

        it('renders HeaderActions component', () => {
            render(<Header {...defaultProps} />);

            expect(screen.getByTestId('header-actions')).toBeInTheDocument();
        });

        it('renders HeaderMenu component with navigation items', () => {
            render(<Header {...defaultProps} />);

            const headerMenu = screen.getByTestId('header-menu');
            expect(headerMenu).toBeInTheDocument();
            expect(headerMenu).toHaveAttribute('data-links-count', '3');
        });

        it('renders navigation menu items', () => {
            render(<Header {...defaultProps} />);

            expect(screen.getByTestId('menu-item-1')).toHaveTextContent('Home');
            expect(screen.getByTestId('menu-item-2')).toHaveTextContent('Services');
            expect(screen.getByTestId('menu-item-4')).toHaveTextContent('About');
        });
    });

    describe('Props Handling', () => {
        it('passes searchButton to HeaderActions', () => {
            const searchButton = <button>Search</button>;
            render(<Header {...defaultProps} searchButton={searchButton} />);

            const search = screen.getByTestId('search');
            expect(search).toBeInTheDocument();
            expect(search).toHaveTextContent('Search');
        });

        it('passes cartButton to HeaderActions', () => {
            const cartButton = <button>Cart</button>;
            render(<Header {...defaultProps} cartButton={cartButton} />);

            const cart = screen.getByTestId('cart');
            expect(cart).toBeInTheDocument();
            expect(cart).toHaveTextContent('Cart');
        });

        it('passes languageSelect to HeaderActions', () => {
            const languageSelect = <select><option>EN</option></select>;
            render(<Header {...defaultProps} languageSelect={languageSelect} />);

            const language = screen.getByTestId('language');
            expect(language).toBeInTheDocument();
        });

        it('passes burgerButton to HeaderActions', () => {
            const burgerButton = <button>Menu</button>;
            render(<Header {...defaultProps} burgerButton={burgerButton} />);

            const burger = screen.getByTestId('burger');
            expect(burger).toBeInTheDocument();
            expect(burger).toHaveTextContent('Menu');
        });

        it('works without optional props', () => {
            expect(() => render(<Header {...defaultProps} />)).not.toThrow();
        });

        it('passes all action props simultaneously', () => {
            const allProps = {
                ...defaultProps,
                searchButton: <button>Search</button>,
                cartButton: <button>Cart</button>,
                languageSelect: <select><option>EN</option></select>,
                burgerButton: <button>Menu</button>,
            };

            render(<Header {...allProps} />);

            expect(screen.getByTestId('search')).toBeInTheDocument();
            expect(screen.getByTestId('cart')).toBeInTheDocument();
            expect(screen.getByTestId('language')).toBeInTheDocument();
            expect(screen.getByTestId('burger')).toBeInTheDocument();
        });
    });

    describe('Navigation Hook Integration', () => {
        it('calls useNavigation with initial navigation items', () => {
            render(<Header {...defaultProps} />);

            expect(mockUseNavigation).toHaveBeenCalledWith(mockNavigationItems);
        });

        it('uses navigation items from hook', () => {
            const modifiedItems: NavItem[] = [
                { id: 5, title: 'Modified', href: '/modified' },
            ];

            mockUseNavigation.mockReturnValue({
                navigationItems: modifiedItems,
            });

            render(<Header {...defaultProps} />);

            const headerMenu = screen.getByTestId('header-menu');
            expect(headerMenu).toHaveAttribute('data-links-count', '1');
            expect(screen.getByTestId('menu-item-5')).toHaveTextContent('Modified');
        });

        it('handles empty navigation items from hook', () => {
            mockUseNavigation.mockReturnValue({
                navigationItems: [],
            });

            render(<Header {...defaultProps} />);

            const headerMenu = screen.getByTestId('header-menu');
            expect(headerMenu).toHaveAttribute('data-links-count', '0');
        });
    });

    describe('Component Structure', () => {
        it('maintains correct component hierarchy', () => {
            render(<Header {...defaultProps} />);

            const header = screen.getByRole('banner');
            const topHeader = header.querySelector('.top_header');
            const bottomHeader = header.querySelector('.bottom_header');

            expect(header).toContainElement(topHeader!);
            expect(header).toContainElement(bottomHeader!);
        });

        it('places components in correct sections', () => {
            render(<Header {...defaultProps} />);

            const topHeader = screen.getByRole('banner').querySelector('.top_header');
            const bottomHeader = screen.getByRole('banner').querySelector('.bottom_header');

            expect(topHeader).toContainElement(screen.getByTestId('header-logo'));
            expect(topHeader).toContainElement(screen.getByTestId('header-factory'));
            expect(topHeader).toContainElement(screen.getByTestId('header-calculator'));
            expect(topHeader).toContainElement(screen.getByTestId('header-messengers'));
            expect(topHeader).toContainElement(screen.getByTestId('header-actions'));

            expect(bottomHeader).toContainElement(screen.getByTestId('header-menu'));
        });
    });

    describe('Accessibility', () => {
        it('uses semantic header element', () => {
            render(<Header {...defaultProps} />);

            const header = screen.getByRole('banner');
            expect(header.tagName).toBe('HEADER');
        });

        it('maintains proper document structure', () => {
            render(<Header {...defaultProps} />);

            const header = screen.getByRole('banner');
            expect(header).toBeInTheDocument();
        });
    });

    describe('Edge Cases', () => {
        it('handles undefined initial navigation items', () => {
            const propsWithUndefined = {
                initialNavigationItems: undefined as unknown as NavItem[],
            };

            expect(() => render(<Header {...propsWithUndefined} />)).not.toThrow();
        });

        it('handles null components gracefully', () => {
            const propsWithNulls = {
                ...defaultProps,
                searchButton: null,
                cartButton: null,
                languageSelect: null,
                burgerButton: null,
            };

            expect(() => render(<Header {...propsWithNulls} />)).not.toThrow();
        });

        it('handles complex navigation structure', () => {
            const complexItems: NavItem[] = [
                {
                    id: 1,
                    title: 'Services',
                    href: '/services',
                    children: [
                        { id: 2, title: 'Sub 1', href: '/sub1' },
                        { id: 3, title: 'Sub 2', href: '/sub2' },
                    ],
                },
            ];

            mockUseNavigation.mockReturnValue({
                navigationItems: complexItems,
            });

            render(<Header {...defaultProps} />);

            expect(screen.getByTestId('menu-item-1')).toHaveTextContent('Services');
        });
    });

    describe('Component Props Forwarding', () => {
        it('forwards HeaderMenu props correctly', () => {
            render(<Header {...defaultProps} />);

            const headerMenu = screen.getByTestId('header-menu');
            expect(headerMenu).toHaveAttribute('data-links-count', '3');
        });

        it('passes HeaderMenuItem as Element prop to HeaderMenu', () => {
            render(<Header {...defaultProps} />);

            expect(screen.getByTestId('menu-item-1')).toBeInTheDocument();
            expect(screen.getByTestId('menu-item-2')).toBeInTheDocument();
            expect(screen.getByTestId('menu-item-4')).toBeInTheDocument();
        });
    });

    describe('Re-rendering', () => {
        it('updates when navigation items change', () => {
            const { rerender } = render(<Header {...defaultProps} />);

            expect(screen.getByTestId('header-menu')).toHaveAttribute('data-links-count', '3');

            const newItems: NavItem[] = [
                { id: 10, title: 'New Item', href: '/new' },
            ];

            mockUseNavigation.mockReturnValue({
                navigationItems: newItems,
            });

            rerender(<Header {...defaultProps} />);

            expect(screen.getByTestId('header-menu')).toHaveAttribute('data-links-count', '1');
            expect(screen.getByTestId('menu-item-10')).toHaveTextContent('New Item');
        });

        it('updates when action props change', () => {
            const { rerender } = render(<Header {...defaultProps} />);

            expect(screen.queryByTestId('search')).not.toBeInTheDocument();

            rerender(<Header {...defaultProps} searchButton={<button>Search</button>} />);

            expect(screen.getByTestId('search')).toBeInTheDocument();
        });
    });
});