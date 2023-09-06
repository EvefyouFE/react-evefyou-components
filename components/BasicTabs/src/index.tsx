import { Tabs } from 'antd';
import { defineActiveItemsState } from 'react-evefyou-hooks/useActiveItemsState';
import { BasicTabsProps } from "./props";
import { useCallback } from "react";
import 'virtual:windi.css';
import { AntdTabItem } from "./typing";

const useTabItemsState = defineActiveItemsState<AntdTabItem>();

export const BasicTabs: React.FC<BasicTabsProps> = ({
  className,
  items = [],
  defaultActiveKey = items[0]?.key,
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

  return (
    <Tabs
      className={className}
      defaultActiveKey={defaultActiveKey}
      activeKey={activeKeyState}
      onChange={onChange}
      items={itemsState}
    />
  )
}