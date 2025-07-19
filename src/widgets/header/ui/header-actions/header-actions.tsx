import {ReactNode} from "react";
import css from './header-actions.module.scss';

interface HeaderActionsProps {
search: ReactNode;
language: ReactNode;
}

export const HeaderActions = ({search,language}: HeaderActionsProps) => {
    return (
        <div className={css.container}>
            {search}
            {language}
        </div>
    );
};