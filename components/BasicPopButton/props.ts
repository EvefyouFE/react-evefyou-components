import { PopconfirmProps } from 'antd';
import { ButtonProps } from "../BasicButton/props";

export interface BasicPopButtonProps extends Partial<ButtonProps> {
    enable?: boolean;
    popconfirmProps?: PopconfirmProps;
}

