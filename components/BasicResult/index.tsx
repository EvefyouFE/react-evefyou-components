/*
 * @Author: EvefyouFE
 * @Date: 2023-08-22 01:19:56
 * @FilePath: \react-evefyou-components\components\BasicResult\Index.tsx
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

export const BasicResult = ({
  code,
  children,
}: BasicResultProps): React.ReactElement => {
  switch (code) {
    case 200:
      return children || <EmptyResult />;
    case 404:
      return <NotExistResult />;
    case 403:
      return <ForbiddenResult />;
    case 500:
    default:
      return <ErrorResult />;
  }
};
