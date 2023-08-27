/*
 * Copyright Notice:
 * Original code Copyright (c) 2020-present, Vben
 * This code section is based on vue-vben-admin.
 *
 * Modified Code Copyright:
 * Copyright (c) 2023-present EvefyouFE/evef
 * The following are modifications to the original code:
 * - move some code to props.ts 
 */
import { Modal, ModalFuncProps, notification, message } from 'antd';
import { is } from 'ramda';
import {
  CheckCircleFilled,
  CloseCircleFilled,
  InfoCircleFilled,
} from '@ant-design/icons';
import { ConfirmOptions, ModalOptionsEx, ModalOptionsPartial } from "./props";
import { formatComponentsById } from "../locale/locale";


function getIcon(iconType: string) {
  if (iconType === 'warning') {
    return <InfoCircleFilled className="modal-icon-warning" />;
  }
  if (iconType === 'success') {
    return <CheckCircleFilled className="modal-icon-success" />;
  }
  if (iconType === 'info') {
    return <InfoCircleFilled className="modal-icon-info" />;
  }
  return <CloseCircleFilled className="modal-icon-error" />;
}

function renderContent({ content }: Pick<ModalOptionsEx, 'content'>) {
  if (is(String, content)) {
    return (
      <div dangerouslySetInnerHTML={{ __html: `<div>${content}</div>` }} />
    );
  }
  return content;
}

/**
 * @description: Create confirmation box
 */
function createConfirm(options: ModalOptionsEx): ConfirmOptions {
  const iconType = options.iconType || 'warning';
  Reflect.deleteProperty(options, 'iconType');
  const opt: ModalFuncProps = {
    centered: true,
    icon: getIcon(iconType),
    ...options,
    content: renderContent(options),
  };
  return Modal.confirm(opt) as unknown as ConfirmOptions;
}

const getBaseOptions = () => ({
  okText: formatComponentsById('components.common.text.ok'),
  centered: true,
});

function createModalOptions(
  options: ModalOptionsPartial,
  icon: string,
): ModalOptionsPartial {
  return {
    ...getBaseOptions(),
    ...options,
    content: renderContent(options),
    icon: getIcon(icon),
  };
}

function createSuccessModal(options: ModalOptionsPartial) {
  return Modal.success(createModalOptions(options, 'success'));
}

function createErrorModal(options: ModalOptionsPartial) {
  return Modal.error(createModalOptions(options, 'error'));
}

function createInfoModal(options: ModalOptionsPartial) {
  return Modal.info(createModalOptions(options, 'info'));
}

function createWarningModal(options: ModalOptionsPartial) {
  return Modal.warning(createModalOptions(options, 'warning'));
}

notification.config({
  placement: 'topRight',
  duration: 3,
});

export class MessageHelper {
  static createMessage: typeof message = message;
  static notification: typeof notification = notification;
  static createConfirm = createConfirm;
  static createSuccessModal = createSuccessModal;
  static createErrorModal = createErrorModal;
  static createInfoModal = createInfoModal;
  static createWarningModal = createWarningModal;
}