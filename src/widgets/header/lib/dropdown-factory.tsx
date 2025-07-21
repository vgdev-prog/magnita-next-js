import {NavItem, MenuType} from "@/src/widgets/header/types";
import {HeaderSubmenu} from "@/src/widgets/header/ui/header-submenu/header-submenu";
import {HeaderCatalogGrid} from "@/src/widgets/header/ui/header-catalog-grid/header-catalog-grid";

interface DropdownComponentProps {
    links: NavItem[];
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    onClose?: () => void;
    triggerRef?: React.RefObject<HTMLElement>;
}

export const createDropdownComponent = (menuType: MenuType = 'column') => {
    switch (menuType) {
        case 'catalog':
            return HeaderCatalogGrid;
        case 'column':
        default:
            return HeaderSubmenu;
    }
};

export const renderDropdown = (
    menuType: MenuType = 'column',
    props: DropdownComponentProps
) => {
    const DropdownComponent = createDropdownComponent(menuType);
    return <DropdownComponent {...props} />;
};