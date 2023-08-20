/*
 * @Author: EvefyouFE
 * @Date: 2023-08-15 23:50:05
 * @FilePath: \react-evefyou-components\components\BasicTable\components\TableHeader.tsx
 * @Description: 
 * Everyone is coming to the world i live in, as i am going to the world lives for you. 人人皆往我世界，我为世界中人人。
 * Copyright (c) 2023 by EvefyouFE/evef, All Rights Reserved. 
 */
import 'virtual:windi.css';
import { Divider } from 'antd';
import React from 'react';
import { TableHeaderProps } from '../props';

export const TableHeader = React.forwardRef(
  (
    {
      renderTableTitle,
      renderTableSetting,
      renderHeaderTop,
      renderToolbar,
    }: TableHeaderProps,
    ref: React.ForwardedRef<HTMLDivElement>,
  ) => (
    <div ref={ref}>
      {renderHeaderTop && <div className="m-1">{renderHeaderTop}</div>}
      <div className="flex items-center">
        {renderTableTitle}
        <div className="flex-1 flex items-center justify-end">
          {renderToolbar}
          {renderToolbar && renderTableSetting && <Divider type="vertical" />}
          {renderTableSetting}
        </div>
      </div>
    </div>
  ),
) as (
  props: TableHeaderProps & { ref?: React.ForwardedRef<HTMLDivElement> },
) => JSX.Element;

export const TableHeaderMemo = React.memo(TableHeader) as typeof TableHeader;
