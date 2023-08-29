/*
 * @Author: EvefyouFE
 * @Date: 2023-08-16 16:12:19
 * @FilePath: \react-evefyou-components\components\_common\config\componentSetting.ts
 * @Description: 
 * Everyone is coming to the world i live in, as i am going to the world lives for you. 人人皆往我世界，我为世界中人人。
 * Copyright (c) 2023 by EvefyouFE/evef, All Rights Reserved. 
 */
import { SorterResult } from "antd/es/table/interface";
import { ComponentSetting } from "../../types";
import { Recordable } from "react-evefyou-common";

export const DEFAULT_COMPONENT_SETTING: ComponentSetting = {
  table: {
    fetchSetting: {
      pageField: 'page',
      sizeField: 'pageSize',
      listField: 'items',
      totalField: 'total',
    },
    pageSizeOptions: ['10', '50', '80', '100'],
    pageSize: 10,
    size: 'middle',
    sortFn: (sortInfo: SorterResult<any>) => (sortInfo.field && sortInfo.order) ? {
      field: sortInfo.field,
      order: sortInfo.order
    } : {},
    filterFn: (data: Recordable) => data
  }
}