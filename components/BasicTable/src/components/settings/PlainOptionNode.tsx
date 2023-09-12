import { DragOutlined } from '@ant-design/icons';
import { useSortable } from '@dnd-kit/sortable';
import { Checkbox, Divider, Tooltip } from 'antd';
import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import './ColumnSetting.less';
import { CSS } from '@dnd-kit/utilities';
import { BasicIcon } from '@/BasicIcon';
import { PlainOption } from './ColumnSettingType';
import 'virtual:windi.css';
import { useDesign } from "react-evefyou-hooks/useDesign";
import classNames from "classnames";

interface PlainOptionNodeProps {
  item: PlainOption;
  getPopupContainer: (triggerNode: HTMLElement) => HTMLElement;
  onFixed: (item: PlainOption, fixed?: 'left' | 'right') => void;
  leftIconClassName: (item: PlainOption) => string;
  rightIconClassName: (item: PlainOption) => string;
}

export const PlainOptionNode: FC<PlainOptionNodeProps> = ({
  item,
  getPopupContainer,
  onFixed,
  leftIconClassName,
  rightIconClassName,
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: item.key,
  });
  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform && { ...transform, scaleY: 1 }),
    transition,
    ...(isDragging ? { position: 'relative', zIndex: 9999 } : {}),
  };
  const { prefixCls } = useDesign('basic-table-plain-option-node')
  const clsName = classNames(prefixCls, 'flex items-center min-w-full pt-1 pb-2')
  return (
    <div
      ref={setNodeRef}
      key={item.value}
      className={clsName}
      style={style}
      {...attributes}
    >
      <DragOutlined
        className="pr-4 cursor-pointer"
        ref={setActivatorNodeRef}
        style={{ touchAction: 'none', cursor: 'move' }}
        {...listeners}
      />
      <Checkbox value={item.value} className="w-full">
        {item.label}
      </Checkbox>
      <Tooltip
        placement="bottomLeft"
        mouseLeaveDelay={0.4}
        getPopupContainer={getPopupContainer}
        title={
          <FormattedMessage id="components.table.setting.columns.fixedLeft" />
        }
      >
        <BasicIcon
          icon="iconify:line-md:arrow-align-left"
          className={leftIconClassName(item)}
          width="1.2em"
          height="1.2em"
          onClick={() => onFixed(item, 'left')}
        />
      </Tooltip>
      <Divider type="vertical" />
      <Tooltip
        placement="bottomLeft"
        mouseLeaveDelay={0.4}
        getPopupContainer={getPopupContainer}
        title={
          <FormattedMessage id="components.table.setting.columns.fixedRight" />
        }
      >
        <BasicIcon
          icon="iconify:line-md:arrow-align-left"
          className={rightIconClassName(item)}
          width="1.2em"
          height="1.2em"
          onClick={() => onFixed(item, 'right')}
        />
      </Tooltip>
    </div>
  );
};
