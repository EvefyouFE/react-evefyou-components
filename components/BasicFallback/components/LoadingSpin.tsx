/*
 * @Author: EvefyouFE
 * @Date: 2023-08-22 01:17:07
 * @FilePath: \react-evefyou-components\components\BasicFallback\components\LoadingSpin.tsx
 * @Description: 
 * Everyone is coming to the world i live in, as i am going to the world lives for you. 人人皆往我世界，我为世界中人人。
 * Copyright (c) 2023 by EvefyouFE/evef, All Rights Reserved. 
 */
import 'virtual:windi.css'
import { Spin } from 'antd';
import { FC } from 'react';
import { FormattedMessage } from 'react-intl';

export const LoadingSpin: FC = () => (
  <div className="flex justify-center items-center h-full">
    <Spin size="large" spinning>
      <FormattedMessage
        id="components.fallback.loading.tip"
        defaultMessage="loading..."
      />
    </Spin>
  </div>
);
