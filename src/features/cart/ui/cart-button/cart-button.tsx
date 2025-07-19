import {CartIcon} from "@/src/shared/ui/icons/cart-icon";

interface CartButtonProps {

}

export const CartButton = ({}: CartButtonProps) => {
    return (
        <button>
            <CartIcon size={22} />
        </button>
    );
};