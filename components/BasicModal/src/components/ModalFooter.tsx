import { Button } from 'antd';
import { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import { ModalFooterProps } from '../props';
import { useDesign } from "react-evefyou-hooks";
import classNames from "classnames";

export const ModalFooter: FC<ModalFooterProps> = ({
  cancelText,
  okText,
  okButtonProps,
  cancelButtonProps,
  insertFooter,
  centerFooter,
  appendFooter,
  onCancel,
}) => {
  const { prefixCls } = useDesign('basic-modal-footer')
  const clsName = classNames(prefixCls, 'flex items-center justify-center')
  return (
    <div className={clsName}>
      {insertFooter}
      <Button onClick={onCancel} {...cancelButtonProps}>
        {cancelText || <FormattedMessage id="components.button.cancelText" />}
      </Button>
      {centerFooter}
      <Button {...okButtonProps}>
        {okText || <FormattedMessage id="components.button.okText" />}
      </Button>
      {appendFooter}
    </div>
  )
}
