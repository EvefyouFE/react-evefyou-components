import { Button, Result } from 'antd';
import { FC } from 'react';
import { useNavigate } from 'react-router';
import { formatComponentsById } from '@/locale/locale';

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
      title={title ?? formatComponentsById('components.403.title')}
      subTitle={subTitle ?? formatComponentsById('components.403.sub.title')}
      extra={
        <Button type="primary" onClick={() => navigate(back ?? '/')}>
          {btnName ?? formatComponentsById('components.common.backLogin')}
        </Button>
      }
    />
  );
};
