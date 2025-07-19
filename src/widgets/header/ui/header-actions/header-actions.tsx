import {ReactNode} from "react";
import css from './header-actions.module.scss';

interface HeaderActionsProps {
search?: ReactNode;
language?: ReactNode;
cart?: ReactNode;
burger?: ReactNode;
}

export const HeaderActions = ({search,language,cart,burger}: HeaderActionsProps) => {
    return (
        <div className={css.actions}>
            {burger}
            {search}
            {language}
            {cart}
        </div>
    );
};