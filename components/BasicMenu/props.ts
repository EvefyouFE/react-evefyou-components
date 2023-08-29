import { MenuProps } from "antd";
import { MenuTreeList } from "react-evefyou-router";

export type AntdMenuItem = Required<MenuProps>['items'][number];

export interface MenuItemLabelProps {
  title: string;
  to?: string;
}

export interface BasicMenuProps extends MenuProps {
  menuTreeList: MenuTreeList;
  className?: string;
}