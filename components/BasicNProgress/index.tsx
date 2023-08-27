/*
 * @Author: EvefyouFE
 * @Date: 2023-08-22 01:14:09
 * @FilePath: \react-evefyou-components\components\BasicNProgress\index.tsx
 * @Description: 
 * Everyone is coming to the world i live in, as i am going to the world lives for you. 人人皆往我世界，我为世界中人人。
 * Copyright (c) 2023 by EvefyouFE/evef, All Rights Reserved. 
 */
import nProgress from 'nprogress';
import React, { useEffect } from 'react';

nProgress.configure({
  showSpinner: false,
});

export const BasicNProgress = ({
  children,
}: {
  children: React.ReactElement;
}): React.ReactElement => {
  useEffect(() => {
    nProgress.done();
    return () => {
      nProgress.start();
    };
  }, []);
  return children;
};

export default BasicNProgress;