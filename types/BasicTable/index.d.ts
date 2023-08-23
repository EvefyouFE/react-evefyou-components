import React, { ReactElement, Ref } from 'react';
import { BasicTableProps } from './props';
import { BasicTableInstance } from './types/tableHook';
export declare const BasicTable: <T = any>(p: BasicTableProps<T> & {
    ref?: React.Ref<BasicTableInstance<any>> | undefined;
}) => ReactElement;
