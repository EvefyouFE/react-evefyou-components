/*
 * @Author: EvefyouFE
 * @Date: 2023-08-22 01:19:56
 * @FilePath: \react-evefyou-components\components\BasicResult\index.tsx
 * @Description: 
 * Everyone is coming to the world i live in, as i am going to the world lives for you. 人人皆往我世界，我为世界中人人。
 * Copyright (c) 2023 by EvefyouFE/evef, All Rights Reserved. 
 */
import React from 'react';
import { EmptyResult } from './components/EmptyResult';
import { ErrorResult } from './components/ErrorResult';
import { NotExistResult } from './components/NotExistResult';
import { ForbiddenResult } from './components/ForbiddenResult';
import { BasicResultProps } from "./props";
import { useDesign } from "react-evefyou-hooks/useDesign";
import classNames from "classnames";

export const BasicResult = ({
  code,
  children,
  className
}: BasicResultProps): React.ReactElement => {
  const { prefixCls } = useDesign('basic-result')
  const clsName = classNames(prefixCls, className)
  switch (code) {
    case 200:
      return children || <EmptyResult className={clsName} />;
    case 404:
      return <NotExistResult className={clsName} />;
    case 403:
      return <ForbiddenResult className={clsName} />;
    case 500:
    default:
      return <ErrorResult className={clsName} />;
  }
};


export default BasicResult;