import {ReactNode} from "react";

interface HeaderActionsProps {
language: ReactNode;
cart: ReactNode;
}

export const HeaderActions = ({language,cart}: HeaderActionsProps) => {
    return (
        <div>
            {language}
            {cart}
        </div>
    );
};