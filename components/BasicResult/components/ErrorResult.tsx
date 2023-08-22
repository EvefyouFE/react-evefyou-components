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
import { useLocale } from '@/locale/locale';

interface ErrorResultProps {
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
}) => {
  const { formatById } = useLocale();
  const navigate = useNavigate();
  return (
    <Result
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
