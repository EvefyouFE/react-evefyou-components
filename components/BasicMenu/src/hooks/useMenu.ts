import { MenuTreeList } from "react-evefyou-router";
import { MenuItemLabel } from "../components/MenuItemLabel";
import React from "react";
import { BasicIcon } from "@/BasicIcon";
import { AntdMenuItem } from "../props";


export function useMenu() {
  function loopMenuItem(menus?: MenuTreeList): AntdMenuItem[] | undefined {
    return menus?.map((item) => ({
      label: React.createElement(MenuItemLabel, {
        locale: item.locale,
        title: item.name
      }),
      key: item.key ? item.key : item.path,
      icon: React.createElement(BasicIcon, {
        icon: item.icon
      }),
      children: item.children && loopMenuItem(item.children),
    } as AntdMenuItem))
  }
  return {
    loopMenuItem
  }
}