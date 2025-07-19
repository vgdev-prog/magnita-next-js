"use client"
import {SearchIcon} from "@/src/shared";
import {useSearchModalStore} from "@/src/features/search";
interface SearchButtonProps {

}

export const SearchButton = ({}: SearchButtonProps) => {
    const {openModal} = useSearchModalStore();
    return (
        <button
            onClick={openModal}
            aria-label="Search"
        >
            <SearchIcon />
        </button>
    );
};