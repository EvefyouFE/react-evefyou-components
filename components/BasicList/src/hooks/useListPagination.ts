import { PaginationConfig } from "antd/es/pagination"
import { useEffect, useMemo, useState } from "react";
import { LIST_PAGE_SIZE } from "../constants";
import { isEmpty } from "ramda";
import { UseListPaginationMethods } from "../typing";

export const DEFAULT_BASIC_LIST_PAGINATION: PaginationConfig = {
  position: 'bottom',
  align: 'center',
  size: 'small',
  current: 1,
  pageSize: LIST_PAGE_SIZE,
}

export function useListPagination(pagination?: PaginationConfig | false): [PaginationConfig | false, UseListPaginationMethods] {
  const [paginationState, setPaginationState] = useState<PaginationConfig | false>(pagination ?? {})
  useEffect(() => {
    if (pagination) {
      setPaginationState(p => ({
        ...p,
        ...(isEmpty(p) ? DEFAULT_BASIC_LIST_PAGINATION : p),
        ...pagination,
      }))
    }
  }, [pagination])

  return useMemo(() => {
    function getPagination() {
      return paginationState
    }
    function setPagination(info: Partial<PaginationConfig | false>) {
      setPaginationState({
        ...paginationState,
        ...info,
      })
    }
    return [
      paginationState,
      {
        getPagination,
        setPagination,
      }
    ]
  }, [paginationState]);
}