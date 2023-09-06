import { ListProps } from "antd";
import { BasicListItem } from "./typing";

export interface BasicListProps<T extends BasicListItem> extends ListProps<T> {
  itemCls?: string;
}