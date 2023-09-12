import {
  CloseOutlined,
  FullscreenExitOutlined,
  FullscreenOutlined,
} from '@ant-design/icons';
import { Tooltip } from 'antd';
import { FC } from 'react';
import { ModalCloseProps } from '../props';
import { formatBaseById } from 'react-evefyou-common/locale';
import { useDesign } from "react-evefyou-hooks/useDesign";
import classNames from "classnames";

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

  const { prefixCls } = useDesign('basic-modal-close')
  const clsName = classNames(prefixCls, 'flex items-center space-x-6')
  return (
    <div className={clsName}>
      {showFullscreen ? (
        isFullscreen ? (
          <Tooltip
            title={formatBaseById('components.common.exitFullScreen')}
            placement="bottom"
          >
            <FullscreenExitOutlined role="button" onClick={handleFullScreen} />
          </Tooltip>
        ) : (
          <Tooltip
            title={formatBaseById('components.common.fullScreen')}
            placement="bottom"
          >
            <FullscreenOutlined role="button" onClick={handleFullScreen} />
          </Tooltip>
        )
      ) : undefined}
      <Tooltip title={formatBaseById('components.common.close')} placement="bottom">
        <CloseOutlined role="button" onClick={onCancel} />
      </Tooltip>
    </div>
  );
};
