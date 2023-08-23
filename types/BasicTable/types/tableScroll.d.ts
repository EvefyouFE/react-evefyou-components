/// <reference types="react" />
import { BasicTableProps } from "../props";
import { TableHookMethods } from "./tableHook";
export interface UseTableScrollHooksMethods extends Pick<TableHookMethods, 'getRowSelection' | 'getViewColumns'> {
    tableRef: React.RefObject<HTMLDivElement>;
}
export interface UseTableScrollMethods {
    canTableResize: () => boolean;
}
export type UseTableScrollReturnType = [BasicTableProps['scroll'], UseTableScrollMethods];
//# sourceMappingURL=tableScroll.d.ts.map