import { Button, Result } from 'antd';
import { FC } from 'react';
import { useNavigate } from 'react-router';
import { formatBaseById } from 'react-evefyou-common';

interface ForbiddenResultProps {
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
}) => {
  const navigate = useNavigate();
  return (
    <Result
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
