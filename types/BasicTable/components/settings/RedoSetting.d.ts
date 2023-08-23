import { TooltipProps } from 'antd';
import React from 'react';
export type RedoSettingProps = Partial<TooltipProps> & {
    redo?: () => void;
};
export declare const RedoSetting: React.FC<RedoSettingProps>;
