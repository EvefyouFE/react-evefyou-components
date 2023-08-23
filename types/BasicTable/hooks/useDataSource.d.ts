import { UseDataSourceProps, UseDataSourceReturnType } from "../types/tableDataSource";
export declare function useDataSource<T = any>({ props, getRowKey, }: UseDataSourceProps<T>): UseDataSourceReturnType<T>;
