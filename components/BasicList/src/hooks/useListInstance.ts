import { useCompInstance } from "react-evefyou-hooks/useCompInstance";
import { BasicListInstance, BasicListItem } from "../typing";
import { BasicListProps } from "../props";

export function useListInstance<T extends BasicListItem>(
    props?: BasicListProps<T>
): [React.MutableRefObject<BasicListInstance<T> | null>, Partial<BasicListInstance<T>>] {
    return useCompInstance<BasicListInstance<T>>(props)
}