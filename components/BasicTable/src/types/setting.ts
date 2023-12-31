/*
 * @Author: EvefyouFE
 * @Date: 2023-08-15 23:38:27
 * @FilePath: \react-evefyou-components\components\types\index.ts
 * @Description: 
 * Everyone is coming to the world i live in, as i am going to the world lives for you. 人人皆往我世界，我为世界中人人。
 * Copyright (c) 2023 by EvefyouFE/evef, All Rights Reserved. 
 */
import { SortOrder, SorterResult } from "antd/es/table/interface";
import { Recordable } from "react-evefyou-common";



export interface Option {
  key: string;
  title?: string;
  value?: string;
}

export interface SorterParam {
  order: SortOrder;
  field: string;
}

export type SortFn = <T>(sortInfo: SorterResult<T>) => SorterParam | object;
export type FilterFn = (data: Recordable) => Recordable;

export interface BasicTableFetchSetting {
  pageField: string;
  sizeField: string;
  listField: string;
  totalField: string;
}

export interface BasicTableSetting {
  fetchSetting: BasicTableFetchSetting;
  pageSizeOptions: `${number}`[];
  pageSize: number;
  size: string;
  sortFn: SortFn;
  filterFn: FilterFn;
}
