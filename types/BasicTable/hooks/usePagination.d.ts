import { TablePaginationConfig } from "antd";
import { BasicTableProps } from "../props";
import { UsePaginationReturnType } from "../types/tablePagination";
export declare const DEFAULT_PAGINATION_PROPS: TablePaginationConfig;
export declare function usePagination({ pagination }: BasicTableProps): UsePaginationReturnType;
