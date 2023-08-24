/*
 * @Author: EvefyouFE
 * @Date: 2023-08-16 14:28:09
 * @FilePath: \react-evefyou-components\components\locale\locale.ts
 * @Description: 
 * Everyone is coming to the world i live in, as i am going to the world lives for you. 人人皆往我世界，我为世界中人人。
 * Copyright (c) 2023 by EvefyouFE/evef, All Rights Reserved. 
 */
import React from 'react';
import enUS from './en_US';
import { FormattedMessage, MessageDescriptor, PrimitiveType, useIntl } from 'react-intl';


export type ComponentsId = keyof typeof enUS;
type ComponentsFormatXMLElementFn<T, R = string | T | (string | T)[]> = (parts: Array<string | T>) => R;
export type ComponentsValues = Record<string, React.ReactNode | PrimitiveType | ComponentsFormatXMLElementFn<React.ReactNode, React.ReactNode>>;
interface ComponentsProps extends MessageDescriptor {
  id: ComponentsId;
  values?: ComponentsValues;
}
type FormatMessageProps = (descriptor: ComponentsProps, values?: ComponentsValues) => string;

export const useComponentsLocale = () => {
  const { formatMessage: _formatMessage } = useIntl();
  const formatMessage: FormatMessageProps = _formatMessage;
  const formatComponentsById = (id: ComponentsId, values?: ComponentsValues) => formatMessage({ id }, values);
  return {
    formatMessage,
    formatComponentsById
  };
};

export function formatComponentsMessage({ id, values }: ComponentsProps): React.ReactNode {
  return React.createElement(FormattedMessage, {
    id,
    values,
    key: id
  })
}

export function formatComponentsById(id: ComponentsId, values?: ComponentsValues) {
  return formatComponentsMessage({ id, values })
}

