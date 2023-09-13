import { usePropsState } from "react-evefyou-hooks/usePropsState"
import { BasicListProps } from "../props"
import { BasicListItem } from "../typing"
import { UsePropsStateReturnType } from "react-evefyou-hooks"

export function useListProps<T extends BasicListItem>(props: BasicListProps<T>): UsePropsStateReturnType<BasicListProps<T>> {
    return usePropsState(props)
}