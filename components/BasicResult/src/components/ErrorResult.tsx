/*
 * @Author: EvefyouFE
 * @Date: 2023-08-22 01:20:20
 * @FilePath: \react-evefyou-components\components\BasicResult\components\ErrorResult.tsx
 * @Description: 
 * Everyone is coming to the world i live in, as i am going to the world lives for you. 人人皆往我世界，我为世界中人人。
 * Copyright (c) 2023 by EvefyouFE/evef, All Rights Reserved. 
 */
import { Button, Result } from 'antd';
import { FC } from 'react';
import { useNavigate } from 'react-router';
import { useBaseLocale } from 'react-evefyou-common/locale';
import { PropsWithCls } from "react-evefyou-common";
import { useDesign } from "react-evefyou-hooks/useDesign";
import classNames from "classnames";

export interface ErrorResultProps extends PropsWithCls {
  back?: string;
  title?: string;
  subTitle?: string;
  btnName?: string;
}

export const ErrorResult: FC<ErrorResultProps> = ({
  back,
  title,
  subTitle,
  btnName,
  className
}) => {
  const { formatById } = useBaseLocale();
  const navigate = useNavigate();
  const { prefixCls } = useDesign('basic-result-error')
  const clsName = classNames(prefixCls, className)
  return (
    <Result
      className={clsName}
      status="500"
      title={title ?? formatById('components.error.title')}
      subTitle={subTitle ?? formatById('components.error.sub.title')}
      extra={
        <Button type="primary" onClick={() => navigate(back ?? '/')}>
          {btnName ?? formatById('components.common.backhome')}
        </Button>
      }
    />
  );
};
