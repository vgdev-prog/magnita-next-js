import {ReactNode} from "react";
import css from './header-actions.module.scss';

interface HeaderActionsProps {
language: ReactNode;
cart: ReactNode;
}

export const HeaderActions = ({language,cart}: HeaderActionsProps) => {
    return (
        <div className={css.container}>
            {language}
            {cart}
        </div>
    );
};