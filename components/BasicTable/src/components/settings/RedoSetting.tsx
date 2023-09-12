import { RedoOutlined } from '@ant-design/icons';
import { Tooltip, TooltipProps } from 'antd';
import classNames from "classnames";
import React from 'react';
import { useDesign } from "react-evefyou-hooks/useDesign";
import { FormattedMessage } from 'react-intl';

export type RedoSettingProps = Partial<TooltipProps> & {
  redo?: () => void;
};

export const RedoSetting: React.FC<RedoSettingProps> = ({
  redo,
  getPopupContainer,
}) => {
  const { prefixCls } = useDesign('basic-table-setting-redo')
  const clsName = classNames(prefixCls, 'cursor-pointer')
  return (
    <Tooltip
      className={clsName}
      placement="top"
      getPopupContainer={getPopupContainer}
      title={
        <span>
          <FormattedMessage id="components.common.refresh" />
        </span>
      }
    >
      <RedoOutlined onClick={redo} />
    </Tooltip>
  )
}
