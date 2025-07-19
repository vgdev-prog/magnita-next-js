"use client"
import {CartIcon} from "@/src/shared/ui/icons/cart-icon";
import {useCartModalStore} from "@/src/features/cart/model";
import css from './cart-button.module.scss';

type CartButtonProps = Record<string, never>

export const CartButton = ({}: CartButtonProps) => {
    const {openModal} = useCartModalStore()
    return (
        <button className={css.cartButton} onClick={openModal}>
            <CartIcon size={22} />
        </button>
    );
};