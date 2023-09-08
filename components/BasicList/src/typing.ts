import { PaginationConfig } from "antd/es/pagination";
import React from "react";
import { BaseInstance } from "react-evefyou-hooks";
import { BasicListProps } from "..";

export interface BasicListItem {
  key: string;
  content: React.ReactNode;
}

export interface BasicListInstance<T extends BasicListItem> extends BaseInstance<BasicListProps<T>> {
  pagination: PaginationConfig | false;
}

export interface BasicListSetting {
  pageSizeOptions: `${number}`[];
  pageSize: number;
  size: string;
}