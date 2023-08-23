import { FormInstance } from "antd";
import { BaseInstance, UsePropsMethods } from "react-evefyou-hooks";
import { BasicFormProps, ItemProps } from "../props";
import { Recordable } from "../../types";
export interface ItemComponentParams {
    props: Partial<ItemProps>;
    formModel: Recordable;
}
export type UseFormPropsMethods = Pick<UsePropsMethods<BasicFormProps>, 'init'>;
export type UseFormPropsReturnType = [BasicFormProps, UseFormPropsMethods];
export type FormHookMethods = UseFormPropsMethods;
export interface BasicFormInstance<T = any> extends FormInstance<T>, BaseInstance<BasicFormProps>, Pick<FormHookMethods, 'init'> {
}
