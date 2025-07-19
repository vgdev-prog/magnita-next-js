import {TelegramButton} from "@/src/features/messenger-buttons";
import ViberButton from "@/src/features/messenger-buttons/ui/viber";
import css from './header-messengers.module.scss'
import {useTranslations} from "next-intl";
export interface HeaderMessengersProps {

}

export const HeaderMessengers = ({}: HeaderMessengersProps) => {
    const t = useTranslations('header')
    return (
        <div className={css.messengers}>
            <p className={css.title}>{t('ask_a_question')}</p>
            <div className={css.row}>
                <ViberButton />
                <TelegramButton/>
            </div>
        </div>
    );
};