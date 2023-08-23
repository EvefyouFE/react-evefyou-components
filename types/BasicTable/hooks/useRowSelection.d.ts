import { UseRowSelectionReturnType } from "../types/tableRowSelection";
import { BasicTableProps } from "../props";
import { Recordable } from "../../types";
export declare function useRowSelection<T extends Recordable>(props: BasicTableProps<T>): UseRowSelectionReturnType<T>;
