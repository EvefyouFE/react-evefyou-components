import { useMemo } from "react"
import { useProps } from "react-evefyou-hooks/useProps"
import { SizeType } from "antd/es/config-provider/SizeContext"
import { BasicTableProps, TableRowSelectionProps } from "../props"
import { UseTablePropsReturnType, UseTablePropsSetMethods } from "../types/tableHook"
import { Recordable } from "react-evefyou-common"

export function useTableProps<T extends Recordable = any>(props: BasicTableProps<T>): UseTablePropsReturnType<T> {
    const [propsState, propsMethods] = useProps(props)
    const { setProps } = propsMethods
    const setMethods: UseTablePropsSetMethods<T> = useMemo(() => {
        function setShowIndexColumn(value = true) {
            setProps({ showIndexColumn: !!value })
        }
        function setRowSelection(value?: TableRowSelectionProps<T>) {
            setProps({ rowSelection: value })
        }
        function setSize(value: SizeType = 'middle') {
            setProps({ size: value })
        }
        function setHeight(value = 0) {
            value && setProps({ height: value })
        }
        return {
            ...propsMethods,
            setShowIndexColumn,
            setRowSelection,
            setSize,
            setHeight,
        }
    }, [propsMethods, setProps])
    return [propsState, setMethods]
}