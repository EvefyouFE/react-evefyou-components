/// <reference types="react" />
import { BasicScrollProps } from './base';
export interface BasicScrollMethods {
    props: BasicScrollProps;
    refresh: () => void;
    getElement: () => HTMLElement | null;
    getContent: () => HTMLElement | null;
    getXBar: () => HTMLElement | null;
    getYBar: () => HTMLElement | null;
}
export declare const BasicScroll: import("react").ForwardRefExoticComponent<Omit<BasicScrollProps, "ref"> & import("react").RefAttributes<BasicScrollMethods>>;
