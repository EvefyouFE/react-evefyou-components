import { useEventListener, useUpdateEffect } from 'ahooks';
import { Spin } from 'antd';
import React, {
  Suspense,
  createContext,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import { ModalWrapperProps } from '../props';
import { ModalWrapperInstance } from '../typing';
import {
  BasicScroll,
  BasicScrollMethods,
} from '@/BasicScroll';

const DEFAULT_VALUE: ModalWrapperInstance = {
  resetModalHeight: () => { },
};
const ModalWrapperContext = createContext(DEFAULT_VALUE);

export const ModalWrapper = React.forwardRef<
  ModalWrapperInstance,
  ModalWrapperProps
>((props, ref) => {
  const {
    children,
    isAdaptive,
    isFullScreen = false,
    height,
    headerHeight,
    footerHeight,
    footerHeightOffset,
  } = props;
  const containerRef = useRef<BasicScrollMethods>(null);
  const [heightState, setHeightState] = useState<number | null>(null);
  const resetModalHeightCb = useCallback(resetModalHeight, [
    footerHeight,
    footerHeightOffset,
    headerHeight,
    height,
    isFullScreen,
  ]);
  const instance: ModalWrapperInstance = useMemo(
    () => ({
      resetModalHeight: resetModalHeightCb,
    }),
    [resetModalHeightCb],
  );
  useImperativeHandle(ref, () => ({
    resetModalHeight,
  }));

  useEventListener('resize', () => {
    isAdaptive && resetModalHeight();
  });

  useUpdateEffect(() => {
    resetModalHeight();
  }, [isFullScreen]);

  function resetModalHeight() {
    // calculate new height
    const containerEl = containerRef.current?.getElement();
    if (!containerEl) return;
    const modalEl =
      containerEl.parentElement &&
      containerEl.parentElement.parentElement &&
      containerEl.parentElement.parentElement.parentElement;
    if (!modalEl) return;

    const headerFooterHeight =
      (headerHeight ?? 0) + (footerHeight ?? 0) + (footerHeightOffset ?? 0);
    const bodyAndTopHeight = window.innerHeight - headerFooterHeight;

    let containerHeight;

    // fullscreen: container h = win h - header h - footer h - body padding（0）
    // other: container h = height >> content h（< max h） >> max h
    if (isFullScreen) {
      containerHeight = bodyAndTopHeight;
    } else {
      // max h = win h - top * 2 - header h - footer h - footer offset
      const modalComputedRect = getComputedStyle(modalEl);
      let defaultTop = 100;
      if (window.innerHeight <= 480) {
        defaultTop = 10;
      } else if (window.innerHeight <= 540) {
        defaultTop = 30;
      } else if (window.innerHeight <= 600) {
        defaultTop = 60;
      }
      const top = Number.parseInt(modalComputedRect.top, 10) || defaultTop;
      const maxHeight = bodyAndTopHeight - top * 2;

      const contentEl = containerRef.current?.getContent();
      const contentChildEl = contentEl?.children?.[0];
      if (!contentChildEl || !contentChildEl.scrollHeight) return;
      const contentChildHeight = contentChildEl.scrollHeight;
      console.log('contentChildHeight', contentChildHeight);

      containerHeight =
        height ||
        (contentChildHeight < maxHeight ? contentChildHeight : maxHeight);
    }
    // update container h
    setHeightState(containerHeight);
  }
  return (
    <BasicScroll
      ref={containerRef}
      style={{
        height: heightState,
      }}
    >
      <Suspense fallback={<Spin />}>
        <ModalWrapperContext.Provider value={instance}>
          {children}
        </ModalWrapperContext.Provider>
      </Suspense>
    </BasicScroll>
  );
});

ModalWrapper.displayName = 'ModalWrapper';
