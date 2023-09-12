import { Button, Result } from 'antd';
import { FC } from 'react';
import { useNavigate } from 'react-router';
import { formatBaseById } from 'react-evefyou-common/locale';
import { PropsWithCls } from "react-evefyou-common";
import { useDesign } from "react-evefyou-hooks";
import classNames from "classnames";

export interface ForbiddenResultProps extends PropsWithCls {
  back?: string;
  title?: string;
  subTitle?: string;
  btnName?: string;
}

export const ForbiddenResult: FC<ForbiddenResultProps> = ({
  back,
  title,
  subTitle,
  btnName,
  className
}) => {
  const navigate = useNavigate();
  const { prefixCls } = useDesign('basic-result-forbidden')
  const clsName = classNames(prefixCls, className)
  return (
    <Result
      className={clsName}
      status="403"
      title={title ?? formatBaseById('components.403.title')}
      subTitle={subTitle ?? formatBaseById('components.403.sub.title')}
      extra={
        <Button type="primary" onClick={() => navigate(back ?? '/')}>
          {btnName ?? formatBaseById('components.common.backLogin')}
        </Button>
      }
    />
  );
};
