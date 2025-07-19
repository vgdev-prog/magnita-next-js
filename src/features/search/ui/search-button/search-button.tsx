"use client"
import {SearchIcon} from "@/src/shared";
import {useSearchModalStore} from "@/src/features/search";
import css from './search-button.module.scss';

interface SearchButtonProps {}

export const SearchButton = ({}: SearchButtonProps) => {
    const {openModal} = useSearchModalStore();
    return (
        <button
            className={css.searchButton}
            onClick={openModal}
            aria-label="Search"
        >
            <SearchIcon size={22} />
        </button>
    );
};