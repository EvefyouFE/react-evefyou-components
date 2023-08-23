import {
  CloseOutlined,
  FullscreenExitOutlined,
  FullscreenOutlined,
} from '@ant-design/icons';
import { Tooltip } from 'antd';
import { FC } from 'react';
import { ModalCloseProps } from '../props';
import { formatComponentsById } from '@/locale/locale';

export const ModalClose: FC<ModalCloseProps> = ({
  showFullscreen = true,
  isFullscreen,
  onFullScreen,
  onCancel,
}) => {
  const handleFullScreen = (e: React.MouseEvent<HTMLButtonElement>) => {
    e?.stopPropagation();
    e?.preventDefault();
    onFullScreen?.(e);
  };

  return (
    <div className="flex items-center space-x-6">
      {showFullscreen ? (
        isFullscreen ? (
          <Tooltip
            title={formatComponentsById('components.common.exitFullScreen')}
            placement="bottom"
          >
            <FullscreenExitOutlined role="button" onClick={handleFullScreen} />
          </Tooltip>
        ) : (
          <Tooltip
            title={formatComponentsById('components.common.fullScreen')}
            placement="bottom"
          >
            <FullscreenOutlined role="button" onClick={handleFullScreen} />
          </Tooltip>
        )
      ) : undefined}
      <Tooltip title={formatComponentsById('components.common.close')} placement="bottom">
        <CloseOutlined role="button" onClick={onCancel} />
      </Tooltip>
    </div>
  );
};
