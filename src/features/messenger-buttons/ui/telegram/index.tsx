import {useLocale} from "next-intl";
import Link from "next/link";
import css from './telegram.module.scss'
import {TelegramIcon} from "@/src/shared";
export interface TelegramButtonProps {

}

export const TelegramButton = ({}: TelegramButtonProps) => {
    const locale = useLocale();
    return (
        <Link href="https://t.me/pnvp_magnita" target="_blank" className={css.btn}>
            <TelegramIcon className={css.icon} />
            <span className={css.text}>Telegram</span>
        </Link>
    );
};

