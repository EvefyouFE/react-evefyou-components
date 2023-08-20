/*
 * @Author: EvefyouFE
 * @Date: 2023-08-16 13:04:13
 * @FilePath: \react-evefyou-components\components\BasicModal\hooks\useModalContext.ts
 * @Description: 
 * Everyone is coming to the world i live in, as i am going to the world lives for you. 人人皆往我世界，我为世界中人人。
 * Copyright (c) 2023 by EvefyouFE/evef, All Rights Reserved. 
 */
import { useContext } from "react";
import { ModalContext } from "../context/ModalProvider";

export function useModalContext() {
    const context = useContext(ModalContext);
    return context;
}