/*
 * @Author: EvefyouFE
 * @Date: 2023-07-15 00:49:33
 * @FilePath: \react-evefyou-admin\src\pages\components\Reminder\ReminderList.tsx
 * @Description:
 * Everyone is coming to the world i live in, as i am going to the world lives for you. 人人皆往我世界，我为世界中人人。
 * Copyright (c) 2023 by EvefyouFE/evef, All Rights Reserved.
 */
import { List } from 'antd';
import React, { ReactElement, Ref, memo, useImperativeHandle, useMemo } from 'react';
import { useListPagination } from './hooks/useListPagination';
import { BasicListProps } from "./props";
import { BasicListInstance, BasicListItem } from "./typing";
import { deepCompareObj } from "react-evefyou-common/utils/object/deepCompareObj";
import 'virtual:windi.css';
import classNames from "classnames";

export const BasicList = memo(React.forwardRef(<T extends BasicListItem>(
  props: BasicListProps<T>,
  ref: React.ForwardedRef<BasicListInstance<T>>
) => {
  const {
    className,
    dataSource,
    pagination: paginationConfig,
    itemCls
  } = props
  const [pagination] = useListPagination(paginationConfig)

  const basicListInstance = useMemo(() => ({
    pagination
  }), [pagination])

  useImperativeHandle(ref, () => basicListInstance, [basicListInstance])

  const listCls = classNames('w-full', className)
  const listItemCls = classNames('flex w-full items-center justify-between', itemCls)
  return (
    <List<T>
      className={listCls}
      pagination={pagination}
      dataSource={dataSource}
      renderItem={(item) => (
        <List.Item
          className={listItemCls}
          key={item.key}
        >
          {item.content}
        </List.Item>
      )}
    />
  )
}), deepCompareObj) as <T extends BasicListItem>(
  p: BasicListProps<T> & { ref?: Ref<BasicListInstance<T>> },
) => ReactElement
