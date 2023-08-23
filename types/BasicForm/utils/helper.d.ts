/// <reference types="react" />
import { RuleObject } from "antd/es/form";
import { StoreValue } from "antd/es/form/interface";
import { ItemComponentType } from "../types/form";
/**
 * @description: 生成placeholder
 */
export declare function createPlaceholderMessage(component: ItemComponentType): import("react").ReactNode;
export declare function setComponentRuleType(rule: RuleObject, component: ItemComponentType, valueFormat: string): void;
/**
 *
 * @param rule 自定义校验器
 * @param value
 * @returns
 */
export declare function validator(rule: RuleObject, value: StoreValue, callback: (error?: string) => void): Promise<void>;
