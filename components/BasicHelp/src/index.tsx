/*
 * @Author: EvefyouFE
 * @Date: 2023-08-16 14:38:31
 * @FilePath: \react-evefyou-components\components\BasicHelp\index.tsx
 * @Description: 
 * Everyone is coming to the world i live in, as i am going to the world lives for you. 人人皆往我世界，我为世界中人人。
 * Copyright (c) 2023 by EvefyouFE/evef, All Rights Reserved. 
 */
import { InfoCircleOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import { is } from 'ramda';
import React, { Children, PropsWithChildren } from 'react';
import './BasicHelp.less';
import { BasicHelpProps } from './props';
import { getPopupContainer } from 'react-evefyou-common/utils/dom/getPopupContainer';
import { useDesign } from "react-evefyou-hooks/useDesign";

export const BasicHelp: React.FC<PropsWithChildren<BasicHelpProps>> = ({
  text,
  showIndex,
  color,
  fontSize = '14px',
  maxWidth = '600px',
  placement = 'right',
  children,
  ...rest
}) => {
  const { prefixCls } = useDesign('basic-help');
  const getTooltipStyle = { color, fontSize };
  const getOverlayStyle = { maxWidth };
  function renderTitle() {
    const textList = text;

    if (is(String, textList)) {
      return <p>{textList}</p>;
    }

    if (is(Array, textList)) {
      return textList.map((tx, index) => (
        <p key={tx}>
          {showIndex ? `${index + 1}. ` : ''}
          {tx}
        </p>
      ));
    }
    return null;
  }
  return (
    <Tooltip
      overlayClassName={`${prefixCls}__wrap`}
      title={<div style={getTooltipStyle}>{renderTitle()}</div>}
      autoAdjustOverflow
      overlayStyle={getOverlayStyle}
      placement={placement}
      getPopupContainer={() => getPopupContainer()}
      {...rest}
    >
      <span className={prefixCls}>
        {Children ? children : <InfoCircleOutlined />}
      </span>
    </Tooltip>
  );
};

export default BasicHelp