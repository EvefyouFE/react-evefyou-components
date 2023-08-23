import React from "react";
import { PopconfirmProps, TooltipProps } from "antd";
import { BasicPopButtonProps } from "../../BasicPopButton/props";
import { Recordable } from "../../types";
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
export type TableChangeParams = Partial<Recordable & SearchState>;
export type CellFormat<T> = string | ((text: string, record: T, index: number) => string | number) | Map<string | number, any>;
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
    show?: boolean;
    tooltip?: string | TooltipProps;
    onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
}
export interface TableRenderComp {
    tableHeader?: React.ReactNode;
}
