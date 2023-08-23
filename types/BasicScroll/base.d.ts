import { CSSProperties } from "react";
import { PropsWithChildrenCls, Recordable } from "../types";
export type BasicScrollDefaultProps = PropsWithChildrenCls<{
    __TYPE: 'BasicScroll';
    id: string;
    style: CSSProperties;
}>;
export type BasicScrollProps = BasicScrollDefaultProps & Recordable;
export declare const BasicScrollBase: {
    defaultProps: BasicScrollDefaultProps;
    getProps: (props: Recordable) => BasicScrollProps;
    getOtherProps: (props: Recordable) => Omit<Recordable, keyof BasicScrollDefaultProps>;
};
