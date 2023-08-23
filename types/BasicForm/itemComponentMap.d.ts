/// <reference types="react" />
import { ItemComponentType } from './types/form';
declare const itemComponentMap: Map<ItemComponentType, import("react").ComponentType<any>>;
export declare function add(compName: ItemComponentType, component: React.ComponentType<any>): void;
export declare function del(compName: ItemComponentType): void;
export { itemComponentMap };
