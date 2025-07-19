"use client"
import {CartIcon} from "@/src/shared/ui/icons/cart-icon";
import {useCartModalStore} from "@/src/features/cart/model";

interface CartButtonProps extends Record<string, never> {}

export const CartButton = ({}: CartButtonProps) => {
    const {openModal} = useCartModalStore()
    return (
        <button onClick={openModal}>
            <CartIcon size={22} />
        </button>
    );
};