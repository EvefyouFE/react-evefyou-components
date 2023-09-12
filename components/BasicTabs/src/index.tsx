import { Tabs } from 'antd';
import { defineActiveItemsState } from 'react-evefyou-hooks/useActiveItemsState';
import { BasicTabsProps } from "./props";
import { useCallback } from "react";
import 'virtual:windi.css';
import { AntdTabItem } from "./typing";
import { useDesign } from "react-evefyou-hooks/useDesign";
import classNames from "classnames";

const useTabItemsState = defineActiveItemsState<AntdTabItem>();

export const BasicTabs: React.FC<BasicTabsProps> = ({
  className,
  items,
  defaultActiveKey = items?.[0]?.key,
  onTabsChange
}) => {
  const [{
    activeKeyState,
    itemsState
  }, {
    active,
  }] = useTabItemsState({
    itemsState: items,
    activeKeyState: defaultActiveKey,
  })
  const onChange = useCallback((activeKey: string) => {
    active(activeKey)
    onTabsChange?.(activeKey)
  }, [active, onTabsChange])
  const prefixCls = useDesign('basic-tabs')
  const clsName = classNames(prefixCls, className)
  return (
    <Tabs
      className={clsName}
      defaultActiveKey={defaultActiveKey}
      activeKey={activeKeyState}
      onChange={onChange}
      items={itemsState}
    />
  )
}