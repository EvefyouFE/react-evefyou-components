/*
 * @Author: EvefyouFE
 * @Date: 2023-08-15 23:50:05
 * @FilePath: \react-evefyou-components\src\Table\src\components\TableTitle.tsx
 * @Description: 
 * Everyone is coming to the world i live in, as i am going to the world lives for you. 人人皆往我世界，我为世界中人人。
 * Copyright (c) 2023 by EvefyouFE/evef, All Rights Reserved. 
 */
import { is } from 'ramda';
import { useMemo } from 'react';
import { BasicTitle } from '@/BasicTitle';
import { TableTitleProps } from '../props';
import 'virtual:windi.css';

export const TableTitle: React.FC<TableTitleProps> = ({
  title,
  getSelectRows,
  helpMessage = '',
}) => {
  const getTitle = useMemo(() => {
    if (is(Function, title)) {
      return (
        getSelectRows &&
        title({
          selectRows: getSelectRows(),
        })
      );
    }
    return title;
  }, [title, getSelectRows]);

  return (
    <BasicTitle
      className="flex items-center justify-between"
      helpMessage={helpMessage}
    >
      {getTitle}
    </BasicTitle>
  );
};
