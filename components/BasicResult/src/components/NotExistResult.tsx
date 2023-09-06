import { Button, Result } from 'antd';
import { FC } from 'react';
import { useNavigate } from 'react-router';
import { formatBaseById } from 'react-evefyou-common/locale';

interface NotExistResultProps {
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
}) => {
  const navigate = useNavigate();
  return (
    <Result
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
