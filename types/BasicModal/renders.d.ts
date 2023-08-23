import React from 'react';
import { BasicModalProps } from './props';
import { ModalInnerProps } from './typing';
export declare function useRenders(props: BasicModalProps, innerProps: ModalInnerProps): {
    header: import("react/jsx-runtime").JSX.Element;
    closeIcon: import("react/jsx-runtime").JSX.Element;
    footer: import("react/jsx-runtime").JSX.Element;
    modalRender: (modal: React.ReactNode) => import("react/jsx-runtime").JSX.Element;
};
export declare function useRenderModal(props: BasicModalProps, innerProps: ModalInnerProps): (modal: React.ReactNode) => import("react/jsx-runtime").JSX.Element;
export declare function useRenderHeader(props: BasicModalProps, innerProps: ModalInnerProps): import("react/jsx-runtime").JSX.Element;
export declare function renderClose(props: BasicModalProps, innerProps: ModalInnerProps): import("react/jsx-runtime").JSX.Element;
export declare function renderFooter(props: BasicModalProps, innerProps: ModalInnerProps): import("react/jsx-runtime").JSX.Element;
