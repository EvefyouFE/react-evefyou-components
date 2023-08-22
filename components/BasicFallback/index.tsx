/*
 * @Author: EvefyouFE
 * @Date: 2023-08-22 01:17:07
 * @FilePath: \react-evefyou-components\components\BasicFallback\index.tsx
 * @Description: 
 * Everyone is coming to the world i live in, as i am going to the world lives for you. 人人皆往我世界，我为世界中人人。
 * Copyright (c) 2023 by EvefyouFE/evef, All Rights Reserved. 
 */
import { FC } from 'react';
import { BasicFallbackProps, FallbackTypeEnum } from "./props";
import { LoadingSpin } from "./components/LoadingSpin";
import { BasicResult } from "@/BasicResult";

export const BasicFallback: FC<BasicFallbackProps> = ({
  fallbackType = FallbackTypeEnum.loading,
}) => {
  switch (fallbackType) {
    case FallbackTypeEnum.loading:
      return <LoadingSpin />
    case FallbackTypeEnum.errorResult:
      return <BasicResult code={500} />
  }
};
