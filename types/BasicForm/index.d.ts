import React, { ReactElement, Ref } from 'react';
import { BasicFormProps } from './props';
import { BasicFormInstance } from './types/formHooks';
import { PropsWithChildrenCls } from "../types";
export declare const BasicForm: <T = any>(p: BasicFormProps & {
    children?: React.ReactNode;
    className?: string | undefined;
} & {
    ref?: React.Ref<BasicFormInstance<T>> | undefined;
}) => ReactElement;
