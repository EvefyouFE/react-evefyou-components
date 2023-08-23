import { BasicTableProps } from "../props";
import { CellFormat } from "../types/table";
import { UseColumnsReturnType } from "../types/tableColumns";
export declare function useColumns<T = any>(props: BasicTableProps<T>): UseColumnsReturnType<T>;
export declare function formatCell<T>(format: CellFormat<T>, text: string, record: T, index: number): string | number;
