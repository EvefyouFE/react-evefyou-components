import { ButtonProps as AntdButtonProps } from 'antd';
import React from "react";
import { ButtonColorType } from "./typing";
export interface ButtonProps extends Partial<AntdButtonProps> {
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
