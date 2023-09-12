/*
 * @Author: EvefyouFE
 * @Date: 2023-07-15 00:49:31
 * @FilePath: \react-evefyou-components\components\BasicForm\index.tsx
 * @Description:
 * Everyone is coming to the world i live in, as i am going to the world lives for you. 人人皆往我世界，我为世界中人人。
 * Copyright (c) 2023 by EvefyouFE/evef, All Rights Reserved.
 */
import { Col, Form, Row, RowProps } from 'antd';
import { is, omit } from 'ramda';
import React, {
  MouseEvent,
  ReactElement,
  Ref,
  useImperativeHandle,
  useMemo,
} from 'react';
import 'virtual:windi.css';
import { usePropsState } from 'react-evefyou-hooks/usePropsState';
import { BasicFormAction } from './components/BasicFormAction';
import { BasicFormItem } from './components/BasicFormItem';
import { useFormItems } from './hooks';
import { BasicFormActionProps, BasicFormProps } from './props';
import { BasicFormInstance } from './types/formHooks';
import { deepCompareObj } from 'react-evefyou-common/utils/object/deepCompareObj';
import { uuid } from 'react-evefyou-common/utils/generate/uuid';
import { PropsWithChildrenCls } from 'react-evefyou-common';
import { useFormProps } from './hooks/useFormProps';
import { useDesign } from "react-evefyou-hooks/useDesign";
import classNames from "classnames";

export const BasicForm = React.memo(
  React.forwardRef(
    <T = any>(
      props: PropsWithChildrenCls<BasicFormProps>,
      ref: React.ForwardedRef<BasicFormInstance<T>>,
    ) => {
      const { children } = props;

      const [propsState, propsMethods] = useFormProps(props);

      const { items, rowProps, baseColProps, actionProps, size, showAction } =
        propsState;
      const [expand, setExpand] = usePropsState(!!actionProps?.expand);
      const [form] = Form.useForm<T>();

      const [itemsMemo] = useFormItems(propsState);

      const instance: BasicFormInstance<T> = useMemo(
        () => ({
          init: propsMethods.init,
          ...form,
        }),
        [propsMethods, form],
      );

      useImperativeHandle(ref, () => instance, [instance]);

      const { prefixCls } = useDesign('basic-form')
      const clsName = classNames(prefixCls, propsState.className)
      const propsValue: BasicFormProps = {
        ...omit(
          [
            'children',
            'items',
            'showAction',
            'actionProps',
            'rowProps',
            'baseColProps',
            'className'
          ],
          propsState,
        ),
        className: clsName
      };

      const actionColSpan = useMemo(() => {
        const rowSpan = rowProps?.gutter;
        if (!is(Number, rowSpan)) {
          return 24;
        }
        const colSpan = baseColProps?.span;
        const site =
          Number.parseFloat(`${colSpan ?? ''}`) /
          Number.parseFloat(`${rowSpan}`);
        if (items?.length && items.length * site > 3 / 4) {
          return rowSpan;
        }
        return colSpan;
      }, [rowProps, baseColProps, items]);
      const rowPropsValue: RowProps = {
        ...rowProps,
        className: 'p-4',
      };

      const actionPropsValue: BasicFormActionProps = {
        size,
        onExpand: handleExpand,
        expand,
        ...omit(['onExpand', 'expand'], actionProps),
      };

      function handleExpand(
        event: MouseEvent<HTMLButtonElement & HTMLAnchorElement>,
      ) {
        setExpand(!expand);
        actionProps?.onExpand?.(event);
      }
      return (
        <Form<T> form={form} {...propsValue}>
          {children}
          {!children && (
            <Row {...rowPropsValue}>
              {itemsMemo.map((item) => (
                <BasicFormItem key={uuid()} {...item} />
              ))}
              {showAction && (
                <Col span={actionColSpan} className="h-full">
                  <BasicFormAction {...actionPropsValue} />
                </Col>
              )}
            </Row>
          )}
        </Form>
      );
    },
  ),
  deepCompareObj,
) as <T = any>(
  p: PropsWithChildrenCls<BasicFormProps> & { ref?: Ref<BasicFormInstance<T>> },
) => ReactElement;

export default BasicForm
