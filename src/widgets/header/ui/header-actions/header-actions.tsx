import {ReactNode} from "react";
import css from './header-actions.module.scss';

interface HeaderActionsProps {
search?: ReactNode;
language?: ReactNode;
cart?: ReactNode;
}

export const HeaderActions = ({search,language,cart}: HeaderActionsProps) => {
    return (
        <div className={css.actions}>
            {search}
            {language}
            {cart}
        </div>
    );
};