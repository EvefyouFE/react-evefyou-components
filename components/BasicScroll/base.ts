/*
 * @Author: EvefyouFE
 * @Date: 2023-08-16 15:01:41
 * @FilePath: \react-evefyou-components\components\BasicScroll\base.ts
 * @Description: 
 * Everyone is coming to the world i live in, as i am going to the world lives for you. 人人皆往我世界，我为世界中人人。
 * Copyright (c) 2023 by EvefyouFE/evef, All Rights Reserved. 
 */
/* eslint-disable  */
import { CSSProperties } from "react";
import { ObjectUtils } from "./utils";
import { uuid } from "react-evefyou-common";
import { PropsWithChildrenCls, Recordable } from "../types";

export type BasicScrollDefaultProps = PropsWithChildrenCls<{
    __TYPE: 'BasicScroll';
    id: string;
    style: CSSProperties;
}>

export type BasicScrollProps = BasicScrollDefaultProps & Recordable

export const BasicScrollBase: {
    defaultProps: BasicScrollDefaultProps;
    getProps: (props: Recordable) => BasicScrollProps;
    getOtherProps: (props: Recordable) => Omit<Recordable, keyof BasicScrollDefaultProps>;
} = {
    defaultProps: {
        __TYPE: 'BasicScroll',
        id: uuid(),
        style: {} as CSSProperties,
        className: '',
        children: undefined
    },
    getProps: (props: Recordable) => ObjectUtils.getMergedProps(props, BasicScrollBase.defaultProps),
    getOtherProps: (props: any) => ObjectUtils.getDiffProps(props, BasicScrollBase.defaultProps)
};