import { screen } from '@testing-library/react';
import { render } from '@/src/shared/lib/test-utils';
import { HeaderSubmenuItem } from '..';
import { NavItem } from '@/src/widgets/header/types';

jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
    usePathname: () => '/',
}));

describe('HeaderSubmenuItem', () => {
    const mockItem: NavItem = {
        id: 1,
        title: 'Home',
        href: '/home',
    };

    it('renders navigation item with correct content', () => {
        render(<HeaderSubmenuItem item={mockItem} />);

        const linkElement = screen.getByRole('link', { name: /Home/i });
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('href', '/home');
    });

    it('renders as a list item', () => {
        render(<HeaderSubmenuItem item={mockItem} />);
        const listItem = screen.getByRole('listitem');
        expect(listItem).toBeInTheDocument();
    });

    it('handles different URL formats', () => {
        const itemWithAbsoluteUrl: NavItem = {
            id: 3,
            title: 'Catalog',
            href: '/catalog/products',
        };

        render(<HeaderSubmenuItem item={itemWithAbsoluteUrl} />);

        const linkElement = screen.getByRole('link');
        expect(linkElement).toHaveAttribute('href', '/catalog/products');
    });

    it('renders correctly with nested children property', () => {
        const itemWithChildren: NavItem = {
            id: 4,
            title: 'Services',
            href: '/services',
            children: [
                { id: 5, title: 'Installation', href: '/services/installation' },
            ],
        };

        render(<HeaderSubmenuItem item={itemWithChildren} />);

        const linkElement = screen.getByRole('link', { name: /Services/i });
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('href', '/services');
    });
});
