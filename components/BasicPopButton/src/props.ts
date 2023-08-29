import { PopconfirmProps } from 'antd';
import { ButtonProps } from "@/BasicButton";

export interface BasicPopButtonProps extends Partial<ButtonProps> {
    enable?: boolean;
    popconfirmProps?: PopconfirmProps;
}

