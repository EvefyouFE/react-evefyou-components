/*
 * @Author: EvefyouFE
 * @Date: 2023-08-22 01:06:11
 * @FilePath: \react-evefyou-components\components\BasicBreadcrumb\index.tsx
 * @Description: 
 * Everyone is coming to the world i live in, as i am going to the world lives for you. 人人皆往我世界，我为世界中人人。
 * Copyright (c) 2023 by EvefyouFE/evef, All Rights Reserved. 
 */
import { Breadcrumb } from 'antd';
import { FC } from 'react';
import { useMatches } from 'react-router-dom';
import { CrumbData } from 'react-evefyou-router';
import { useDesign } from '@common/hooks/useDesign';
import { BasicBreadcrumbProps } from "./props";
import { CrumbRouteHandle } from "./typing";
import classNames from "classnames";

export const BasicBreadcrumb: FC<BasicBreadcrumbProps> = ({ ...rest }) => {
  const { prefixCls } = useDesign('basic-breadcrumb');
  const matches = useMatches() as {
    data: CrumbData;
    handle: CrumbRouteHandle;
  }[];

  const items = matches
    .filter((match) => Boolean(match.handle?.crumb))
    .map((match) => match.handle?.crumb(match.data));

  const className = classNames(prefixCls, 'w-full flex items-center justify-start')
  return <Breadcrumb className={className} items={items} {...rest} />;
};
