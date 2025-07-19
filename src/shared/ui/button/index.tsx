import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { Link } from "@/src/app/i18n/routing";
import clsx from "clsx";
import css from './button.module.scss'

interface BaseButtonProps {
    className?: string;
    locale?: string;
}

interface ButtonAsButtonProps extends BaseButtonProps, ButtonHTMLAttributes<HTMLButtonElement> {
    asLink?: false;
    href?: never;
}

interface ButtonAsLinkProps extends BaseButtonProps, AnchorHTMLAttributes<HTMLAnchorElement> {
    asLink: true;
    href: string;
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export const Button = ({asLink,className,children,href,locale,...props}: ButtonProps) => {
    if (asLink) {
       return (
           <Link href={href} locale={locale} className={clsx(className,css.button)} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
               {children}
           </Link>
       )
    }
    return (
        <button className={clsx(css.button,className)} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
            {children}
        </button>
    );
};