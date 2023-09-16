/*
 * @Author: EvefyouFE
 * @Date: 2023-08-20 15:08:33
 * @FilePath: \react-evefyou-components\components\BasicForm\types\formHooks.ts
 * @Description: 
 * Everyone is coming to the world i live in, as i am going to the world lives for you. 人人皆往我世界，我为世界中人人。
 * Copyright (c) 2023 by EvefyouFE/evef, All Rights Reserved. 
 */
import { FormInstance } from "antd";
import { BaseInstance, UsePropsMethods } from "react-evefyou-hooks";
import { BasicFormProps, ItemProps } from "../props";
import { Recordable } from "react-evefyou-common"

export interface ItemComponentParams {
  props: Partial<ItemProps>;
  // tableAction: TableActionType;
  // formActionType: FormActionType;
  formModel: Recordable;
}

export type UseFormPropsMethods<T = any> = Pick<UsePropsMethods<BasicFormProps<T>>, 'init'>;
export type UseFormPropsReturnType<T = any> = [BasicFormProps<T>, UseFormPropsMethods]
export type FormHookMethods<T = any> = UseFormPropsMethods<T>;
export interface BasicFormInstance<T = any> extends FormInstance<T>, BaseInstance<BasicFormProps<T>> {
}