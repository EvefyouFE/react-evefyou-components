import { PropsWithCls } from "react-evefyou-common";

export interface BasicResultProps extends PropsWithCls {
  code?: number;
  children?: React.ReactElement;
}