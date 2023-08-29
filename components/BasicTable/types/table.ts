/*
 * @Author: EvefyouFE
 * @Date: 2023-08-15 23:50:05
 * @FilePath: \react-evefyou-components\components\BasicTable\types\table.ts
 * @Description: 
 * Everyone is coming to the world i live in, as i am going to the world lives for you. 人人皆往我世界，我为世界中人人。
 * Copyright (c) 2023 by EvefyouFE/evef, All Rights Reserved. 
 */
import React from "react";
import { PopconfirmProps, TooltipProps } from "antd";
import { BasicPopButtonProps } from "../../BasicPopButton/props";
import { Recordable } from "react-evefyou-common"

export interface TableSetting {
  redo?: boolean;
  size?: boolean;
  setting?: boolean;
  fullScreen?: boolean;
}
export interface SearchState {
  sortInfo: Recordable | Recordable[];
  filterInfo: Record<string, string[]>;
}

export type TableChangeParams = Partial<Recordable & SearchState>

export type CellFormat<T> =
  | string
  | ((text: string, record: T, index: number) => string | number)
  | Map<string | number, any>;

export type ColumnChangeParam = {
  dataIndex: React.Key;
  fixed: boolean | 'left' | 'right' | undefined;
  hidden: boolean;
};

export interface TableActionItem extends BasicPopButtonProps {
  key: React.Key;
  title?: string;
  icon?: React.ReactNode;
  popConfirmProps?: PopconfirmProps;
  disabled?: boolean;
  divider?: boolean;
  // 业务控制是否显示
  show?: boolean;
  tooltip?: string | TooltipProps;
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
}

export interface TableRenderComp {
  tableHeader?: React.ReactNode;
}

