import { PopconfirmProps } from 'antd';
import { BasicButtonProps } from "@/BasicButton";

export interface BasicPopButtonProps extends Partial<BasicButtonProps> {
    enable?: boolean;
    popconfirmProps?: PopconfirmProps;
}

