/*
 * @Author: EvefyouFE
 * @Date: 2023-08-16 15:10:56
 * @FilePath: \react-evefyou-components\components\BasicIcon\index.tsx
 * @Description: 
 * Everyone is coming to the world i live in, as i am going to the world lives for you. 人人皆往我世界，我为世界中人人。
 * Copyright (c) 2023 by EvefyouFE/evef, All Rights Reserved. 
 */
import Icon, * as icons from '@ant-design/icons';
import { Icon as Iconify } from '@iconify/react';
import { FC, isValidElement } from 'react';
import { ImgIcon } from '@/BasicIcon/src/components/ImgIcon';
import { BasicIconProps } from './props';

export const BasicIcon: FC<BasicIconProps> = ({ icon, size, iconifyInline, ...rest }) => {
  if (!icon) return null;
  if (isValidElement(icon)) {
    return icon;
  }
  if (typeof icon !== 'string') return null;

  if (icon.indexOf('http') !== -1 || icon.indexOf(':') === -1) {
    return <ImgIcon url={icon} width={size} height={size} />;
  }
  const idx = icon.indexOf(':');
  const supplier = idx && icon.slice(0, idx);
  const name = idx && icon.slice(idx + 1, icon.length);
  if (!name) return null;
  switch (supplier) {
    case 'ant-icon':
      // eslint-disable-next-line no-case-declarations
      const antIcon: { [key: string]: any } = icons;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      return <Icon component={antIcon[name]} size={size} {...rest} />;
    case 'iconify':
      return <Iconify inline={iconifyInline} icon={name} {...rest} />;
    default:
      return null;
  }
}

export default BasicIcon