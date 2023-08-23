/// <reference types="react" />
import { SortOrder, SorterResult } from "antd/es/table/interface";
export type PropsWithCls<P = unknown> = P & {
    className?: string | undefined;
};
export type PropsWithChildrenCls<P = unknown> = P & {
    children?: React.ReactNode | undefined;
    className?: string | undefined;
};
export type Recordable<T = any> = Record<string, T>;
export type Nullable<T> = T | null;
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
export interface ComponentTableFetchSetting {
    pageField: string;
    sizeField: string;
    listField: string;
    totalField: string;
}
export interface ComponentTableSetting {
    fetchSetting: ComponentTableFetchSetting;
    pageSizeOptions: `${number}`[];
    pageSize: number;
    size: string;
    sortFn: SortFn;
    filterFn: FilterFn;
}
export interface ComponentSetting {
    table: ComponentTableSetting;
}
