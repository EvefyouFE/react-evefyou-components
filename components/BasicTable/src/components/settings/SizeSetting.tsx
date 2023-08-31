/*
 * @Author: EvefyouFE
 * @Date: 2023-08-15 23:50:05
 * @FilePath: \react-evefyou-components\components\BasicTable\src\components\settings\SizeSetting.tsx
 * @Description: 
 * Everyone is coming to the world i live in, as i am going to the world lives for you. 人人皆往我世界，我为世界中人人。
 * Copyright (c) 2023 by EvefyouFE/evef, All Rights Reserved. 
 */
import { ColumnHeightOutlined } from '@ant-design/icons';
import { Dropdown, Tooltip, TooltipProps } from 'antd';
import { useSelectItemsState } from "react-evefyou-hooks/useSelectItemsState";
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { MenuItemType } from 'antd/es/menu/hooks/useItems';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useTableContext } from '../../context';

export type SizeSettingProps = Partial<TooltipProps>;

const DEFAULT_ITEMS: MenuItemType[] = [
  {
    key: 'default',
    label: (
      <span>
        <FormattedMessage id="components.table.setting.size.default" />
      </span>
    ),
  },
  {
    key: 'middle',
    label: (
      <span>
        <FormattedMessage id="components.table.setting.size.middle" />
      </span>
    ),
  },
  {
    key: 'small',
    label: (
      <span>
        <FormattedMessage id="components.table.setting.size.small" />
      </span>
    ),
  },
];

export const SizeSetting: React.FC<SizeSettingProps> = ({
  getPopupContainer,
}) => {
  const [{ selectKeysState, itemsState }, { reSelect }] = useSelectItemsState(
    { selectKeysState: [], itemsState: DEFAULT_ITEMS }
  );
  const { setSize } = useTableContext();

  function handleMenuClick({ key }: { key: string }) {
    setSize(key as SizeType);
    reSelect([key])
  }
  return (
    <Tooltip
      placement="top"
      getPopupContainer={getPopupContainer}
      title={
        <span>
          <FormattedMessage id="components.table.setting.size" />
        </span>
      }
    >
      <Dropdown
        placement="bottom"
        trigger={['click']}
        getPopupContainer={getPopupContainer}
        menu={{
          items: itemsState,
          selectable: true,
          selectedKeys: selectKeysState as string[],
          onClick: handleMenuClick,
        }}
      >
        <ColumnHeightOutlined />
      </Dropdown>
    </Tooltip>
  );
};
