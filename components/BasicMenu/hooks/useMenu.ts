import { MenuTreeList } from "react-evefyou-router";
import { MenuItemLabel } from "../components/MenuItemLabel";
import React from "react";
import { BasicIcon } from "@/BasicIcon";
import { MenuItem } from "../props";


export function useMenu() {
  function loopMenuItem(menus?: MenuTreeList): MenuItem[] | undefined {
    return menus?.map((item) => ({
      label: React.createElement(MenuItemLabel, {
        title: item.locale ? item.locale : item.name || ''
      }),
      key: item.key ? item.key : item.path,
      icon: React.createElement(BasicIcon, {
        icon: item.icon
      }),
      children: item.children && loopMenuItem(item.children),
    } as MenuItem))
  }
  return {
    loopMenuItem
  }
}