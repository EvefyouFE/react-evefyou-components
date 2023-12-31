import React, { useMemo } from 'react';
import { TableHeader } from './components/TableHeader';
import { TableTitle } from './components/TableTitle';
import { ColumnSetting } from './components/settings/ColumnSetting';
import { FullScreenSetting } from './components/settings/FullScreenSetting';
import { RedoSetting } from './components/settings/RedoSetting';
import { SizeSetting } from './components/settings/SizeSetting';
import { TableSetting } from './components/settings/TableSetting';
import { DEFAULT_TABLE_SETTING } from './constants';
import { UseRendersProps } from './types/tableHook';
import { TableRenderComp } from './types/table';
import { TableHeaderProps } from './props';
import { uuid } from 'react-evefyou-common/utils/generate/uuid';
import { Recordable } from "react-evefyou-common";

// eslint-disable-next-line react-refresh/only-export-components
const RenderTableSetting = React.memo(renderTableSettingFn);

export function useBasicTableRenders<T extends Recordable = any>(
  props: UseRendersProps<T>,
): TableRenderComp {
  const {
    tableSetting,
    onReload,
    onColumnsChange,
    tableRef,
    titleProps = {},
    title,
    caption,
    headerProps = {},
    dataSource = [],
  } = props;
  const headerPropsMemo = useMemo(() => {
    const renderTableSetting = (
      <RenderTableSetting
        {...{
          tableSetting,
          onReload,
          onColumnsChange,
          tableRef,
        }}
      />
    );
    if (title || caption) {
      titleProps.title ??= caption ?? title?.(dataSource);
    }
    const renderTableTitle = <TableTitle {...titleProps} />;
    return {
      renderTableSetting,
      renderTableTitle,
      ...headerProps,
    };
  }, [
    tableSetting,
    onReload,
    onColumnsChange,
    tableRef,
    title,
    caption,
    titleProps,
    headerProps,
    dataSource,
  ]);

  const tableHeader = renderHeaderFn(headerPropsMemo);
  return {
    tableHeader,
  };
}

function renderTableSettingFn<T extends Recordable = any>({
  tableSetting = DEFAULT_TABLE_SETTING,
  onReload,
  onColumnsChange,
  tableRef,
}: UseRendersProps<T>) {
  if (!tableSetting) return null;
  const { redo, size, setting, fullScreen } = tableSetting;
  const items = [
    redo && (
      <RedoSetting
        redo={onReload}
        getPopupContainer={getPopupContainer}
        key={uuid()}
      />
    ),
    size && (
      <SizeSetting getPopupContainer={getPopupContainer} key={uuid()} />
    ),
    setting && (
      <ColumnSetting
        onColumnsChange={onColumnsChange}
        getPopupContainer={getPopupContainer}
        key={uuid()}
      />
    ),
    fullScreen && (
      <FullScreenSetting
        getPopupContainer={getPopupContainer}
        key={uuid()}
      />
    ),
  ];
  function getPopupContainer() {
    return tableRef?.current ? tableRef.current : document.body;
  }
  return <TableSetting items={items} />;
}

function renderHeaderFn(headerProps: TableHeaderProps) {
  const {
    renderHeaderTop,
    renderTableSetting,
    renderTableTitle,
    renderToolbar,
  } = headerProps;
  if (
    !renderHeaderTop &&
    !renderTableSetting &&
    !renderTableTitle &&
    !renderToolbar
  )
    return null;
  return <TableHeader {...headerProps} />;
}
