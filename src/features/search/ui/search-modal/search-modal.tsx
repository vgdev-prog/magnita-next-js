"use client"
import css from './search-modal.module.scss'
import clsx from "clsx";
import {SearchIcon} from "@/src/shared";
import {useTranslations} from "next-intl";
import {useSearchModalStore} from "@/src/features/search";
export const SearchModal = () => {
    const t = useTranslations('search');
    const {isOpen,closeModal} = useSearchModalStore()
    console.log(isOpen)
    return  (
        <div
            className={clsx(css.searchWidget, {[css.show]: isOpen})}
        >
            <div className={css.inner}>
            <button
                className={css.closeSearchWidget}
                onClick={closeModal}
            >
                <svg
                    width="33"
                    height="33"
                    viewBox="0 0 33 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M32.526 2.828L29.698 0L16.263 13.435L2.828 0L0 2.828L13.435 16.263L0 29.698L2.828 32.526L16.263 19.091L29.698 32.526L32.526 29.698L19.091 16.263L32.526 2.828Z"
                    ></path>
                </svg>
            </button>

                <div className={css.searchHeader}>
                    <h2 className={css.searchTitle}>{t('title')}</h2>
                    <p className={css.searchSubtitle}>{t('subtitle')}</p>
                </div>

                <form
                    className={css.searchForm}
                >
                    <div className={css.searchInputWrapper}>
                        <input
                            type="text"
                            className={css.searchInput}
                            placeholder={t('placeholder')}
                            name="search"
                            id="searchInput"
                        />
                        <button
                            type="submit"
                            className={css.searchButton}
                        >
                            <SearchIcon fill="#f0f0f0" />
                        </button>
                    </div>
                </form>

                <div className={css.searchSuggestions}>
                    <div className={css.suggestionLabel}>
                        {t('popular_queries')}
                    </div>
                    <div className={css.suggestionTag}>
                        {t('suggestions.shutters')}
                    </div>
                    <div className={css.suggestionTag}>
                        {t('suggestions.gates')}
                    </div>
                    <div className={css.suggestionTag}>
                        {t('suggestions.grilles')}
                    </div>
                    <div className={css.suggestionTag}>
                        {t('suggestions.blinds')}
                    </div>
                    <div className={css.suggestionTag}>
                        {t('suggestions.accessories')}
                    </div>
                    <div className={css.suggestionTag}>
                        {t('suggestions.installation')}
                    </div>
                </div>

                <div className={css.searchFooter}>
                    <div className={css.searchTip}>
                        {t.rich('tip_text', {
                            close: (chunks) => <span className={css.kbd}>{chunks}</span>,
                            search: (chunks) => <span className={css.kbd}>{chunks}</span>
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};