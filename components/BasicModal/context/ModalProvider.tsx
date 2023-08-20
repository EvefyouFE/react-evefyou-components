/*
 * @Author: EvefyouFE
 * @Date: 2023-08-16 13:04:13
 * @FilePath: \react-evefyou-components\src\Modal\src\context\ModalProvider.tsx
 * @Description: 
 * Everyone is coming to the world i live in, as i am going to the world lives for you. 人人皆往我世界，我为世界中人人。
 * Copyright (c) 2023 by EvefyouFE/evef, All Rights Reserved. 
 */
import { FC, createContext, useState } from 'react';
import { ModalContextProps, ModalContextValue } from '../typing';

const DEFAULT_MODAL_CONTEXT_VALUE = {
  dataMap: {},
  setDataMap: () => { },
  openMap: {},
  setOpenMap: () => { },
};

export const ModalContext = createContext<ModalContextValue>(
  DEFAULT_MODAL_CONTEXT_VALUE,
);

export const ModalProvider: FC<ModalContextProps> = ({ children }) => {
  const [dataMap, setDataMap] = useState({});
  const [openMap, setOpenMap] = useState({});
  const value = {
    dataMap,
    setDataMap,
    openMap,
    setOpenMap,
  };
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
