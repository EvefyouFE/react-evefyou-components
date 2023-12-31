/*
 * @Author: EvefyouFE
 * @Date: 2023-07-15 00:49:31
 * @FilePath: \react-evefyou-components\components\BasicButton\index.tsx
 * @Description:
 * Everyone is coming to the world i live in, as i am going to the world lives for you. 人人皆往我世界，我为世界中人人。
 * Copyright (c) 2023 by EvefyouFE/evef, All Rights Reserved.
 */
import { Button } from 'antd';
import classNames from 'classnames';
import { FC, PropsWithChildren, useMemo } from 'react';
import { BasicButtonProps } from './props';
import { BasicIcon } from '@/BasicIcon';
import { useNativeProps } from "react-evefyou-hooks/useNativeProps";
import { useDesign } from "react-evefyou-hooks/useDesign";

export const BasicButton: FC<PropsWithChildren<BasicButtonProps>> = ({
  preIcon,
  postIcon,
  color = '',
  iconSize = 14,
  children,
  ...rest
}) => {
  const { disabled } = rest;
  const { prefixCls } = useDesign('basic-button')
  const clsName = useMemo(
    () =>
      classNames(
        prefixCls,
        [
          {
            [`ant-btn-${color}`]: !!color,
            [`is-disabled`]: disabled,
          },
        ]
      ),
    [color, disabled, prefixCls],
  );
  const preIconClsName = classNames(prefixCls.concat('-pre-icon'))
  const postIconClsName = classNames(prefixCls.concat('-post-icon'))

  const nativeProps = useNativeProps(rest, { excludeDefaultKeys: false });

  return (
    <Button className={clsName} {...nativeProps} color={color}>
      {preIcon && <BasicIcon className={preIconClsName} icon={preIcon} size={iconSize} />}
      {children}
      {postIcon && <BasicIcon className={postIconClsName} icon={postIcon} size={iconSize} />}
    </Button>
  );
};

export default BasicButton