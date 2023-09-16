import { useCompInstance } from "react-evefyou-hooks/useCompInstance";
import { BasicTableInstance } from "../types/tableHook";
import { BasicTableProps } from "../props";
import { Recordable } from "react-evefyou-common";

export function useTableInstance<T extends Recordable = any>(
    props?: BasicTableProps<T>
): [React.MutableRefObject<BasicTableInstance<T> | null>, Partial<BasicTableInstance<T>>] {
    return useCompInstance<BasicTableInstance<T>>(props)
}