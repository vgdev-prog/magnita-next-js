import { screen } from '@testing-library/react';
import { render } from '@/src/shared/lib/test-utils'; // 1. Импортируем наш кастомный рендер
import { HeaderSubmenuItem } from '..'; // Предполагается, что index.ts экспортирует компонент
import { NavItem } from '@/src/widgets/header/types';

// 2. Мокировать next/navigation все еще полезно для контроля над роутером в тестах
jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
    usePathname: () => '/', // Возвращаем базовый путь
}));

describe('HeaderSubmenuItem', () => {
    // 3. Используем актуальный тип
    const mockItem: NavItem = {
        id: 1,
        title: 'Home',
        href: '/home',
    };

    it('renders navigation item with correct content', () => {
        // 4. Используем наш новый рендер. Предупреждение должно исчезнуть.
        render(<HeaderSubmenuItem item={mockItem} />);

        const linkElement = screen.getByRole('link', { name: /Home/i });
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('href', '/home');
    });

    it('renders as a list item', () => {
        render(<HeaderSubmenuItem item={mockItem} />);
        // Ищем по роли, это более устойчиво к изменениям разметки
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
