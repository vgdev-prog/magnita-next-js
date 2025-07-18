import {Button} from "@/src/shared";
import {useLocale, useTranslations} from "next-intl";
import Image from "next/image";
import css from './header-calculator.module.scss'
import calculatorImg from '@/src/widgets/header/assets/calculator.webp'
export interface HeaderCalculatorProps {

}

const HeaderCalculator = ({}: HeaderCalculatorProps) => {
    const locale = useLocale();
    const t = useTranslations('header')
    return (
        <Button asLink href={''} className={css.calculator_btn} locale={locale}>
                    <Image width="38" className={css.image} height="30" src={calculatorImg} alt=""/>
                    <p className={css.text}>{t('calculator_worth')}</p>

        </Button>
    );
};

export default HeaderCalculator;