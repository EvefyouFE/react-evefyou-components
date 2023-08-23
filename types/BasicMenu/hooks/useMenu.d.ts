import { MenuTreeList } from "react-evefyou-router";
import { MenuItem } from "../props";
export declare function useMenu(): {
    loopMenuItem: (menus?: MenuTreeList) => MenuItem[] | undefined;
};
