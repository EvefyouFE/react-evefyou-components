/*
 * @Author: EvefyouFE
 * @Date: 2023-08-15 23:50:05
 * @FilePath: \react-evefyou-components\components\Table\src\components\TableAction.tsx
 * @Description: 
 * Everyone is coming to the world i live in, as i am going to the world lives for you. 人人皆往我世界，我为世界中人人。
 * Copyright (c) 2023 by EvefyouFE/evef, All Rights Reserved. 
 */
import { MoreOutlined } from '@ant-design/icons';
import { Button, Divider, Tooltip, TooltipProps } from 'antd';
import { is } from 'ramda';
import React, { FC } from 'react';
import { TableActionProps } from '../props';
import { TableActionItem } from '../types/table';
import { BasicPopButton } from '@/BasicPopButton/src';
import { BasicDropdown } from '@/BasicDropdown/src';
import { BasicIcon } from '@/BasicIcon';
import { useDesign } from "react-evefyou-hooks/useDesign";

export const TableAction: FC<TableActionProps> = ({
  divider = true,
  items,
  dropDownItems,
  renderItem,
  renderDropdownHeader,
}) => {
  const { prefixCls } = useDesign('basic-table-action')
  if (!items && dropDownItems) return null;

  const getTooltip = (data: string | TooltipProps): TooltipProps => ({
    // TODO 这里要绑定table
    // getPopupContainer: () => undefined ?? document.body,
    placement: 'bottom',
    ...(is(String, data) ? { title: data } : data),
  });

  const getItem = (item: TableActionItem) => {
    if (renderItem) return renderItem(item);
    const { tooltip, popConfirmProps, icon, disabled, title, onClick } = item;
    const ActionButton = (
      <BasicPopButton
        title={title}
        icon={<BasicIcon icon={icon} />}
        disabled={disabled}
        popconfirmProps={popConfirmProps}
        onClick={onClick}
        type="link"
      />
    );
    return tooltip ? (
      <Tooltip {...getTooltip(tooltip)}>{ActionButton}</Tooltip>
    ) : (
      ActionButton
    );
  };

  const getDropdownItems = () =>
    dropDownItems
      // ?.filter((action) => hasPermission(action.auth) && action.show)
      ?.map((action, index, array) => {
        const { key, popConfirmProps, title } = action;
        return {
          key,
          popConfirmProps,
          title,
          divider: index < array.length - 1 ? divider : false,
        };
      });

  const DropdownHeader = renderDropdownHeader ? (
    renderDropdownHeader()
  ) : (
    <Button icon={<MoreOutlined />} type="link" size="small" />
  );

  return (
    <div className={prefixCls}>
      {items?.map((item, index) => (
        <React.Fragment key={item.key}>
          {getItem(item)}
          {divider && index < items.length - 1 ? (
            <Divider type="vertical" className="action-divider" />
          ) : undefined}
        </React.Fragment>
      ))}
      {dropDownItems ? (
        <BasicDropdown
          trigger={['hover']}
          items={getDropdownItems()}
          popconfirm
        >
          {DropdownHeader}
        </BasicDropdown>
      ) : undefined}
    </div>
  );
};
