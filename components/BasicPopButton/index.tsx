/*
 * @Author: EvefyouFE
 * @Date: 2023-08-16 15:16:36
 * @FilePath: \react-evefyou-components\components\BasicPopButton\index.tsx
 * @Description: 
 * Everyone is coming to the world i live in, as i am going to the world lives for you. 人人皆往我世界，我为世界中人人。
 * Copyright (c) 2023 by EvefyouFE/evef, All Rights Reserved. 
 */
import { Popconfirm } from 'antd';
import { FC } from 'react';
import { BasicButton } from '../BasicButton';
import { formatById } from '@common/locales';
import { BasicPopButtonProps } from '../BasicPopButton/props';

export const BasicPopButton: FC<BasicPopButtonProps> = (props) => {
  const { popconfirmProps, color, disabled, ...rest } = props;

  const popconfirmPropsMemo = popconfirmProps && {
    okText: formatById('components.button.okText'),
    cancelText: formatById('components.button.cancelText'),
    ...popconfirmProps,
  };

  const buttonProps = {
    color: color && disabled ? '' : color,
    disabled,
    ...rest,
  };

  return popconfirmPropsMemo ? (
    <Popconfirm {...popconfirmPropsMemo}>
      <BasicButton {...buttonProps} />
    </Popconfirm>
  ) : (
    <BasicButton {...rest} />
  );
};
