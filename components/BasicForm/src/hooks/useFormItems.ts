import { useMemo } from "react";
import { BasicFormItemProps, BasicFormProps } from "../props";


export type UseFormItemsReturnType<T = any> = [
    BasicFormItemProps<T>[],
    object
]

export function useFormItems<T = any>(props: BasicFormProps<T>): UseFormItemsReturnType<T> {
    const {
        items,
        showExpand = false,
    } = props;
    // 过滤、
    const itemsMemo = useMemo(() => {
        if (!items?.length) return []
        const itemsValue = items.filter((item) => item.canRender ?? true);
        return itemsValue.map(item => ({
            formProps: props,
            ...item,
        }))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [items, showExpand, props])

    return [itemsMemo, {}]
}