import { PaginationConfig } from "antd/es/pagination";
import React from "react";
import { BaseInstance } from "react-evefyou-hooks";
import { BasicListProps } from "..";

export interface BasicListItem {
  key: string;
  content: React.ReactNode;
}

export type UseListPaginationMethods = {
  getPagination: () => PaginationConfig | false;
  setPagination: (info: Partial<PaginationConfig | false>) => void;
}

export type ListHookMethods = UseListPaginationMethods

export interface BasicListInstance<T extends BasicListItem> extends BaseInstance<BasicListProps<T>>,
  Pick<UseListPaginationMethods,
    "getPagination"
    | "setPagination"
  > {
  pagination: PaginationConfig | false;
}

export interface BasicListSetting {
  pageSizeOptions: `${number}`[];
  pageSize: number;
  size: string;
}