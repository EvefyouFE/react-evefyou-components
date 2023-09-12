import { Button, Result } from 'antd';
import { FC } from 'react';
import { useNavigate } from 'react-router';
import { formatBaseById } from 'react-evefyou-common/locale';
import { PropsWithCls } from "react-evefyou-common";
import { useDesign } from "react-evefyou-hooks";
import classNames from "classnames";

export interface NotExistResultProps extends PropsWithCls {
  back?: string;
  title?: string;
  subTitle?: string;
  btnName?: string;
}

export const NotExistResult: FC<NotExistResultProps> = ({
  back,
  title,
  subTitle,
  btnName,
  className
}) => {
  const navigate = useNavigate();
  const { prefixCls } = useDesign('basic-result-not-exist')
  const clsName = classNames(prefixCls, className)
  return (
    <Result
      className={clsName}
      status="404"
      title={title ?? formatBaseById('components.404.title')}
      subTitle={subTitle ?? formatBaseById('components.404.sub.title')}
      extra={
        <Button type="primary" onClick={() => navigate(back ?? '/')}>
          {btnName ?? formatBaseById('components.common.backhome')}
        </Button>
      }
    />
  );
};
