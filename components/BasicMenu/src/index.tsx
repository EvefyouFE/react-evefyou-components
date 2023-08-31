/*
 * @Author: EvefyouFE
 * @Date: 2023-08-23 00:18:13
 * @FilePath: \react-evefyou-components\components\BasicMenu\index.tsx
 * @Description: 
 * Everyone is coming to the world i live in, as i am going to the world lives for you. 人人皆往我世界，我为世界中人人。
 * Copyright (c) 2023 by EvefyouFE/evef, All Rights Reserved. 
 */
import { ConfigProvider, Menu } from 'antd';
import { FC, useCallback, useTransition } from 'react';
import { useNavigate } from 'react-router';
import './BasicMenu.less';
import { useDesign } from 'react-evefyou-hooks/useDesign';
import { useMenu } from "./hooks/useMenu";
import { BasicMenuProps, AntdMenuItem } from "./props";

export const BasicMenu: FC<BasicMenuProps> = (props) => {
  const { menuTreeList, className = '', mode } = props;
  const navigate = useNavigate();
  const [, startTrainsition] = useTransition();
  const { prefixCls } = useDesign('basic-menu');
  const { loopMenuItem } = useMenu()

  const items = loopMenuItem(menuTreeList);
  const defaultSelectedKeys = items ? [items?.[0]?.key as string] : undefined
  const handleClick = useCallback((item: AntdMenuItem) => {
    startTrainsition(() => {
      navigate(item?.key as string);
    });
  }, []);

  return (
    <ConfigProvider
      theme={{
        token: {
          controlHeightLG: 50,
        },
      }}
    >
      <Menu
        className={`${className} ${prefixCls}`}
        theme="dark"
        mode={mode}
        defaultSelectedKeys={defaultSelectedKeys}
        items={items}
        onClick={handleClick}
      />
    </ConfigProvider>
  );
};

export default BasicMenu;
