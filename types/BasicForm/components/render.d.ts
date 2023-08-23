import React from 'react';
import { ItemInnerProps } from '../props';
/**
 *
 * @param param0 渲染项包裹的组件 Input、Select...
 * @returns
 */
export declare function useRenderItemComponentFn({ name, itemComponent, itemComponentProps, changeEvent, disabled, size, autoSetPlaceHolder, renderItemComponentContent, renderCallbackParams, ...rest }: Partial<ItemInnerProps>): import("react/jsx-runtime").JSX.Element;
/**
 *
 * @param props 渲染项 form.item
 * @returns
 */
export declare function useRenderItemFn(props: Partial<ItemInnerProps>): import("react/jsx-runtime").JSX.Element;
export declare const ItemComponent: React.MemoExoticComponent<typeof useRenderItemComponentFn>;
export declare const Item: React.MemoExoticComponent<typeof useRenderItemFn>;
