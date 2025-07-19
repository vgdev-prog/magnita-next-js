import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';

// Определяем пропсы для нашего кастомного провайдера
interface TestProvidersProps {
    children: React.ReactNode;
    locale?: string;
    messages?: Record<string, string>; // Используем более конкретный тип для сообщений
}

// Создаем компонент, который собирает все нужные провайдеры
const TestProviders: React.FC<TestProvidersProps> = ({
    children,
    locale = 'ru', // Локаль по умолчанию для тестов
    messages = {}
}) => {
    // Здесь можно добавить и другие провайдеры, например, для React Query (TanstackProvider)
    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
        </NextIntlClientProvider>
    );
};

// Создаем кастомную функцию рендер��нга
const renderWithProviders = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'> & { locale?: string; messages?: Record<string, string> }
) => {
    const { locale, messages, ...renderOptions } = options || {};
    return render(ui, {
        wrapper: (props) => (
            <TestProviders {...props} locale={locale} messages={messages} />
        ),
        ...renderOptions,
    });
};

// Реэкспортируем все из @testing-library/react, чтобы использовать наш рендер по умолчанию
export * from '@testing-library/react';
// Переопределяем `render` на нашу кастомную функцию
export { renderWithProviders as render };
