import { useBoolean } from 'ahooks';
import { Modal } from 'antd';
import classNames from 'classnames';
import { assoc, equals } from 'ramda';
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useId,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react';
import { useDesign } from 'react-evefyou-hooks/useDesign';
import { useUnmountEffect } from 'react-evefyou-hooks/useUnmountEffect';
import { useModalContext } from './hooks';
import { BasicModalProps, ModalWrapperProps } from './props';
import { BasicModalInstance } from './typing';
import { useModalProps } from './hooks/useModalProps';
import { useRenders } from './renders';
import './BasicModal.less';
import { ModalWrapper } from './components/ModalWrapper';
import { deepCompareObj } from 'react-evefyou-common/utils/object/deepCompareObj';

export const BasicModal = React.memo(
  forwardRef<BasicModalInstance, BasicModalProps>((props, ref) => {
    const { children } = props;
    const [propsState, propsMethods] = useModalProps(props);
    const [openState, { setTrue: open, setFalse: closeModal }] =
      useBoolean(false);
    const [okLoadingState, okLoadingMethods] = useBoolean(false);
    const { dataMap, setDataMap, setOpenMap } = useModalContext();
    const key = useId();
    const fullScreen = useBoolean(false);
    const [isFullScreenState] = fullScreen;
    const { prefixCls } = useDesign('basic-modal');
    const disabled = useState(true);

    const openModalCb = useCallback(openModal, [
      dataMap,
      key,
      open,
      setDataMap,
    ]);

    const instance: BasicModalInstance = useMemo(
      () => ({
        init: propsMethods.init,
        openModal: openModalCb,
        closeModal,
        openOkLoading: okLoadingMethods.setTrue,
        closeOkLoading: okLoadingMethods.setFalse,
      }),
      [
        propsMethods.init,
        openModalCb,
        closeModal,
        okLoadingMethods.setTrue,
        okLoadingMethods.setFalse,
      ],
    );
    useImperativeHandle(ref, () => instance, [instance]);

    const { header, closeIcon, footer, modalRender } = useRenders(propsState, {
      fullScreen,
      instance,
      okLoadingState,
      disabled,
    });

    const { wrapClassName, ...restPropsState } = propsState;
    const wrapClassNameValue = useMemo(
      () =>
        classNames(prefixCls, wrapClassName, {
          'fullscreen-modal': isFullScreenState,
        }),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [isFullScreenState],
    );
    const propsValue: BasicModalProps = {
      centered: true,
      ...restPropsState,
      open: openState,
      title: header,
      footer,
      closeIcon,
      wrapClassName: wrapClassNameValue,
      modalRender,
    };
    const headerHeight = 56;
    const footerHeight = 56;
    const modalWrapperPropsValue: ModalWrapperProps = {
      headerHeight,
      footerHeight,
      isAdaptive: true,
      isFullScreen: isFullScreenState,
    };

    useEffect(() => {
      setOpenMap((opm) => ({
        ...assoc(key, openState, opm),
      }));
    }, [key, openState, setOpenMap]);

    useUnmountEffect(() => {
      setDataMap({
        ...assoc(key, null, dataMap),
      });
    });

    function openModal<T>(opState = true, data?: T, openOnSet = true) {
      console.debug(opState);
      open();
      // 缓存modal data
      if (!data) return;
      if (openOnSet) {
        setDataMap({
          ...assoc(key, data, dataMap),
        });
        return;
      }
      const equal = equals(dataMap[key], data);
      if (!equal) {
        setDataMap({
          ...assoc(key, data, dataMap),
        });
      }
    }
    return (
      <Modal key={key} {...propsValue}>
        <ModalWrapper {...modalWrapperPropsValue}>{children}</ModalWrapper>
      </Modal>
    );
  }),
  deepCompareObj,
);

export default BasicModal;