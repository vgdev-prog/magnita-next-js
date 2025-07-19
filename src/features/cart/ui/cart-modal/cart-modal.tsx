"use client"
import css from './cart-modal.module.scss'
import clsx from "clsx";
import {useCartModalStore} from "@/src/features/cart/model";
import {useLocale, useTranslations} from "next-intl";
import {Link} from "@/src/app/i18n/routing";
import Image from "next/image";

interface CartProduct {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
}

type CartModalProps = Record<string, never>

export const CartModal = ({}: CartModalProps) => {
    const locale = useLocale();
    const { isOpen , closeModal} = useCartModalStore();
    const t = useTranslations();

    // Mock data - в реальном приложении это будет из store или props
    const cartItems: CartProduct[] = [
        {
            id: "bel9016",
            name: "Захисні ролети на вікна 1200х1200 мм РА45",
            price: 4764,
            image: "/images/rozetka/bel9016.png",
            quantity: 1
        }
    ];

    const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    return (
        <>
            <div
                className={css.basketOverlay}
            ></div>

            <div
                className={clsx(css.basketContainer, {[css.show]:isOpen})}
            >
                <div className={css.inner}>
                    <button
                        onClick={closeModal}
                        className={css.close}
                    >×
                    </button>

                    <div className={css.topLine}>
                        <h2 className={css.titleBasket}>{t('cart.title')}</h2>
                        <div className={css.cartSummary}>{t('cart.summary', {count: cartItems.length, total: totalPrice})}</div>
                    </div>

                    <div className={css.productsBlock}>
                        {cartItems.map((item) => (
                            <div key={item.id} className={css.item}>
                                <div className={css.itemHeader}>
                                    <Link href={`/product/${item.id}`} className={css.img} locale={locale}>
                                        <Image
                                            width={80}
                                            height={80}
                                            alt={item.name}
                                            src={item.image}
                                        />
                                    </Link>
                                    <div className={css.productInfo}>
                                        <Link href={`/product/${item.id}`} className={css.productName}>{item.name}</Link>
                                        <p className={css.available}>{t('cart.product.available')}</p>
                                        <p className={css.price}>{t('cart.product.price')}: {item.price} грн/од.</p>
                                    </div>
                                </div>

                            <div className={css.itemControls}>
                                <div className={css.qty}>
                                    <p className={css.title}>{t('cart.product.quantity')}</p>
                                    <div className={css.counter}>
                                        <svg
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM5 9H15V11H5V9Z"></path>
                                        </svg>
                                        <input
                                            type="number"
                                            value={item.quantity}
                                            onChange={(e) => {
                                                // TODO: implement quantity update logic
                                                console.log('Update quantity:', e.target.value);
                                            }}
                                            min="1"
                                        />
                                        <svg
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M9 9V5H11V9H15V11H11V15H9V11H5V9H9ZM10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18Z"></path>
                                        </svg>
                                    </div>
                                </div>

                                <div className={css.productTotal}>
                                    <p className={css.title}>{t('cart.product.total')}</p>
                                    <span className={css.value}>{item.price * item.quantity} грн</span>
                                </div>

                                <div
                                    className={css.deleteBtn}
                                >
                                    <svg
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M5 2V0H15V2H20V4H18V19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H3C2.73478 20 2.48043 19.8946 2.29289 19.7071C2.10536 19.5196 2 19.2652 2 19V4H0V2H5ZM4 4V18H16V4H4ZM7 7H9V15H7V7ZM11 7H13V15H11V7Z"></path>
                                    </svg>
                                </div>
                            </div>

                                <p className={css.size}>💡 Потрібний вам розмір вказується: 0,4/0,9/1/1,2/1,8 і т.д.</p>
                            </div>
                        ))}
                    </div>

                    <div className={css.cartFooter}>
                        <p className={css.toPayment}>{t('cart.footer.toPayment')}</p>
                        <p className={css.basketTotal}>{t('cart.footer.total', {total: totalPrice})}</p>
                        <div className={css.basketBtn}>
                            <button
                                className={clsx(css.green, css.btnO)}
                                type="button"
                                aria-label="Продолжить покупки"
                            >{t('cart.footer.continueShoppingButton')}</button>
                            <Link
                                className={css.btnO}
                                locale={locale}
                                href="/basket"
                            >
                                <span className={css.btnBlick}></span>
                                {t('cart.footer.checkoutButton')}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};