import { FC } from 'react';
import { PlainOption } from './ColumnSettingType';
interface PlainOptionNodeProps {
    item: PlainOption;
    getPopupContainer: (triggerNode: HTMLElement) => HTMLElement;
    onFixed: (item: PlainOption, fixed?: 'left' | 'right') => void;
    leftIconClassName: (item: PlainOption) => string;
    rightIconClassName: (item: PlainOption) => string;
}
export declare const PlainOptionNode: FC<PlainOptionNodeProps>;
export {};
