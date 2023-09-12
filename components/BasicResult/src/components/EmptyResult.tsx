import { Empty } from 'antd';
import classNames from "classnames";
import { FC } from 'react';
import { PropsWithCls } from "react-evefyou-common";
import { useDesign } from "react-evefyou-hooks/useDesign";

export interface EmptyResultProps extends PropsWithCls {
}

export const EmptyResult: FC<EmptyResultProps> = ({
  className
}) => {
  const { prefixCls } = useDesign('basic-result-empty')
  const clsName = classNames(prefixCls, className)
  return <Empty className={clsName} />;
};
