import { RuleObject } from "antd/es/form";
import { StoreValue } from "antd/es/form/interface";
import { isNil } from "ramda";
import { ItemComponentType } from "../types/form";
import { formatBaseById } from 'react-evefyou-common/locale';

/**
 * @description: 生成placeholder
 */
export function createPlaceholderMessage(component: ItemComponentType) {
    if (component.includes('Input') || component.includes('Complete')) {
        return formatBaseById('components.common.input.text');
    }
    if (component.includes('Picker')) {
        return formatBaseById('components.common.choose.text');
    }
    if (
        component.includes('Select') ||
        component.includes('Cascader') ||
        component.includes('Checkbox') ||
        component.includes('Radio') ||
        component.includes('Switch')
    ) {
        return formatBaseById('components.common.choose.text');
    }
    return '';
}

export function setComponentRuleType(
    rule: RuleObject,
    component: ItemComponentType,
    valueFormat: string,
) {
    if (['DatePicker', 'MonthPicker', 'WeekPicker', 'TimePicker'].includes(component)) {
        rule.type = valueFormat ? 'string' : 'object';
    } else if (['RangePicker', 'Upload', 'CheckboxGroup', 'TimePicker'].includes(component)) {
        rule.type = 'array';
    } else if (['InputNumber'].includes(component)) {
        rule.type = 'number';
    }
}

/**
 * 
 * @param rule 自定义校验器
 * @param value 
 * @returns 
 */
export function validator(rule: RuleObject, value: StoreValue, callback: (error?: string) => void) {
    console.debug(callback)
    const msg = rule.message;
    if (isNil(value)) {
        // 空值
        return Promise.reject(msg);
    } if (Array.isArray(value) && !value.length) {
        // 数组类型
        return Promise.reject(msg);
    } if (typeof value === 'string' && value.trim() === '') {
        // 空字符串
        return Promise.reject(msg);
    } if (
        typeof value === 'object' &&
        Reflect.has(value, 'checked') &&
        Reflect.has(value, 'halfChecked') &&
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        Array.isArray(value.checked) &&
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        Array.isArray(value.halfChecked) &&
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        value.checked.length === 0 &&
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        value.halfChecked.length === 0
    ) {
        // 非关联选择的tree组件
        return Promise.reject(msg);
    }
    return Promise.resolve();
}