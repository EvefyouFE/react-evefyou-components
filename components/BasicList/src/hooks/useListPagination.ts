import { PaginationConfig } from "antd/es/pagination"
import { useMemo, useState } from "react";
import { LIST_PAGE_SIZE } from "../constants";
import { equals } from "ramda";

export type UseListPaginationMethods = {
  setCurrentState: React.Dispatch<React.SetStateAction<number>>
}

export const DEFAULT_BASIC_LIST_PAGINATION: PaginationConfig = {
  position: 'bottom',
  align: 'center',
  size: 'small',
  pageSize: LIST_PAGE_SIZE,
}

export function useListPagination(paginationConfig?: PaginationConfig | false): [PaginationConfig | false, UseListPaginationMethods] {
  const [currentState, setCurrentState] = useState(1);
  return useMemo(() => {
    const onChange = (page: number, pageSize: number) => {
      console.log('pageSize', pageSize)
      setCurrentState(page);
    }
    const pagination = {
      ...DEFAULT_BASIC_LIST_PAGINATION,
      current: currentState,
      onChange,
      ...paginationConfig
    } as PaginationConfig
    return [
      equals(paginationConfig, false) ? false : pagination,
      {
        setCurrentState
      }
    ]
  }, [currentState, paginationConfig])
}