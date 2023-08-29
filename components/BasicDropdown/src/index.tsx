/*
 * @Author: EvefyouFE
 * @Date: 2023-08-16 15:19:26
 * @FilePath: \react-evefyou-components\components\BasicDropdown\index.tsx
 * @Description: 
 * Everyone is coming to the world i live in, as i am going to the world lives for you. 人人皆往我世界，我为世界中人人。
 * Copyright (c) 2023 by EvefyouFE/evef, All Rights Reserved. 
 */
import { Dropdown, Popconfirm } from 'antd';
import { MenuDividerType, MenuItemType } from 'antd/es/menu/hooks/useItems';
import { FC, memo } from 'react';
import { BasicIcon } from '@/BasicIcon';
import { BasicDropdownProps } from './props';

export const BasicDropdown: FC<BasicDropdownProps> = ({
  popconfirm,
  // dropdownRender,
  items,
  selectedKeys = [],
  children,
  ...props
}) => {
  const getItems = (): (MenuItemType | MenuDividerType)[] | undefined =>
    items?.reduce(
      (acc, item) => {
        let label = (
          <>
            <BasicIcon icon={item.icon} />
            <span className="ml-1">{item.title}</span>
          </>
        );
        if (popconfirm && item.popconfirm) {
          const { icon, ...rest } = item.popconfirm;
          label = (
            <Popconfirm icon={<BasicIcon icon={icon} />} {...rest}>
              <div>{label}</div>
            </Popconfirm>
          );
        }
        const { divider, onClick, key } = item;
        acc.push({
          key,
          label,
          onClick,
        });
        divider &&
          acc.push({
            key,
            type: 'divider',
          });
        return acc;
      },
      [] as (MenuItemType | MenuDividerType)[],
    );

  const { menu, trigger = ['contextMenu'], ...rest } = props;

  return (
    <Dropdown
      menu={
        menu ?? {
          items: getItems(),
          selectedKeys,
        }
      }
      trigger={trigger}
      {...rest}
    >
      <span>{children}</span>
    </Dropdown>
  );
};

export const BasicDropdownMemo = memo(BasicDropdown);


export default BasicDropdownMemo