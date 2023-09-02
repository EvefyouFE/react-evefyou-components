/*
 * @Author: EvefyouFE
 * @Date: 2023-08-16 15:16:36
 * @FilePath: \react-evefyou-components\components\BasicButton\props.ts
 * @Description: 
 * Everyone is coming to the world i live in, as i am going to the world lives for you. 人人皆往我世界，我为世界中人人。
 * Copyright (c) 2023 by EvefyouFE/evef, All Rights Reserved. 
 */
import { ButtonProps as AntdButtonProps } from 'antd';
import React from "react";
import { ButtonColorType } from "./typing";


export interface BasicButtonProps extends Partial<AntdButtonProps> {
    color?: ButtonColorType;
    loading?: boolean;
    disabled?: boolean;
    /**
     * Text before icon.
     */
    preIcon?: React.ReactNode;
    /**
     * Text after icon.
     */
    postIcon?: React.ReactNode;
    /**
     * preIcon and postIcon icon size.
     * @default: 14
     */
    iconSize?: number;
    onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
}



