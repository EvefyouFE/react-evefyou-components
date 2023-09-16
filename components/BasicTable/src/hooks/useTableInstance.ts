import { useCompInstance } from "react-evefyou-hooks/useCompInstance";
import { BasicTableInstance } from "../types/tableHook";
import { BasicTableProps } from "../props";

export function useTableInstance<T = any>(
    props?: BasicTableProps<T>
): [React.MutableRefObject<BasicTableInstance<T> | null>, Partial<BasicTableInstance<T>>] {
    return useCompInstance<BasicTableInstance<T>>(props)
}