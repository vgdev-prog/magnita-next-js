import Link from "next/link";
import {ViberIcon} from "@/src/shared";
import css from './viber.module.scss'
export interface ViberButtonProps {

}

const ViberButton = ({}: ViberButtonProps) => {
    return (
        <Link href="https://t.me/pnvp_magnita" target="_blank" className={css.btn}>
            <ViberIcon className={css.icon} />
            <span className={css.text}>Viber</span>
        </Link>
    );
};

export default ViberButton;