interface SubMenu {
    id: number;
    subName: string;
    imageClass: string;
}

interface SidebarItem {
    id: number;
    name: string;
    subMenu: SubMenu[];
}

interface SidebarState {
    [key: string]: boolean;
}

export {SubMenu, SidebarItem, SidebarState};