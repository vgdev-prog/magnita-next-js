import {ReactNode} from "react";
import css from './header-actions.module.scss';

interface HeaderActionsProps {
language: ReactNode;
cart: ReactNode;
}

export const HeaderActions = ({language,cart}: HeaderActionsProps) => {
    return (
        <div >
            {language}
            {cart}
        </div>
    );
};