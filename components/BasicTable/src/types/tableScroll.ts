import { Recordable } from "react-evefyou-common";
import { BasicTableProps } from "../props";
import { TableHookMethods } from "./tableHook";

export interface UseTableScrollHooksMethods extends Pick<TableHookMethods,
  'getRowSelection' | 'getViewColumns'> {
  tableRef: React.RefObject<HTMLDivElement>;
}
export interface UseTableScrollMethods {
  canTableResize: () => boolean;
}

export type UseTableScrollReturnType<T extends Recordable = any> = [BasicTableProps<T>['scroll'], UseTableScrollMethods]