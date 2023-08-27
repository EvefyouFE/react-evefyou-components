/*
 * @Author: EvefyouFE
 * @Date: 2023-08-16 14:38:31
 * @FilePath: \react-evefyou-components\components\BasicTitle\index.tsx
 * @Description: 
 * Everyone is coming to the world i live in, as i am going to the world lives for you. 人人皆往我世界，我为世界中人人。
 * Copyright (c) 2023 by EvefyouFE/evef, All Rights Reserved. 
 */
import classNames from 'classnames';
import { FC, useMemo } from 'react';
import { BasicHelp } from '@/BasicHelp';
import './BasicTitle.less';
import { BasicTitleProps } from './props';
import { useDesign } from '@common/hooks';
import { PropsWithChildrenCls } from "../types";

export const BasicTitle: FC<PropsWithChildrenCls<BasicTitleProps>> = ({
  span,
  normal,
  helpMessage = '',
  onDoubleClick,
  className,
  children,
}) => {
  const { prefixCls } = useDesign('basic-title');
  const rootClsName = useMemo(
    () =>
      classNames(
        className,
        prefixCls,
        children && span && prefixCls.concat('-show-span'),
        normal && prefixCls.concat('-normal'),
      ),
    [className, prefixCls, children, span, normal],
  );
  return (
    <span className={rootClsName} onDoubleClick={onDoubleClick}>
      {children}
      {helpMessage ? (
        <BasicHelp className={prefixCls.concat('-help')} text={helpMessage} />
      ) : undefined}
    </span>
  );
};

export default BasicTitle;