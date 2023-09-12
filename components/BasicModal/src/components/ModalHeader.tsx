/*
 * @Author: EvefyouFE
 * @Date: 2023-08-16 13:04:13
 * @FilePath: \react-evefyou-components\src\Modal\src\components\ModalHeader.tsx
 * @Description: 
 * Everyone is coming to the world i live in, as i am going to the world lives for you. 人人皆往我世界，我为世界中人人。
 * Copyright (c) 2023 by EvefyouFE/evef, All Rights Reserved. 
 */
import { FC } from 'react';
import { ModalHeaderProps } from '../props';
import { BasicTitle } from '@/BasicTitle';
import { useDesign } from "react-evefyou-hooks/useDesign";
import classNames from "classnames";

export const ModalHeader: FC<ModalHeaderProps> = ({
  helpMessage,
  title,
  onDoubleClick,
  onMouseOver,
  onMouseOut,
}) => {
  const { prefixCls } = useDesign('basic-modal-footer')
  const clsName = classNames(prefixCls)
  return (
    <div
      className={clsName}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onFocus={() => onMouseOver?.()}
      onBlur={() => onMouseOut?.()}
    >
      <BasicTitle
        helpMessage={helpMessage}
        onDoubleClick={onDoubleClick}
        className="items-center"
      >
        {title}
      </BasicTitle>
    </div>
  )
}
