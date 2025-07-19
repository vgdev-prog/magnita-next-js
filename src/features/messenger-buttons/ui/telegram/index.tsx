import Link from "next/link";
import css from './telegram.module.scss'
import {TelegramIcon} from "@/src/shared";

export const TelegramButton = () => {
    return (
        <Link href="https://t.me/pnvp_magnita" target="_blank" className={css.btn}>
            <TelegramIcon className={css.icon} />
            <span className={css.text}>Telegram</span>
        </Link>
    );
};

