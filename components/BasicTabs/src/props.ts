import { PropsWithCls } from "react-evefyou-common";
import { AntdTabItem } from "./typing";

export interface BasicTabsProps extends PropsWithCls {
  items: AntdTabItem[];
  defaultActiveKey?: string;
  onTabsChange?: (activeKey: string) => void;
}