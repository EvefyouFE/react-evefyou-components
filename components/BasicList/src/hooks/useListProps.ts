import { BasicListProps } from "../props"
import { BasicListItem } from "../typing"
import { UsePropsReturnType } from "react-evefyou-hooks"
import { useProps } from "react-evefyou-hooks/useProps"

export function useListProps<T extends BasicListItem>(props: BasicListProps<T>): UsePropsReturnType<BasicListProps<T>> {
    return useProps(props)
}