/// <reference types="react" />

import { Actions } from 'ahooks/lib/useBoolean';
import { BaseInstance } from 'react-evefyou-hooks';
import { BreadcrumbProps } from 'antd';
import { ButtonProps as ButtonProps_2 } from 'antd';
import { ButtonType } from 'antd/es/button';
import { ColProps } from 'antd';
import { ColumnsType } from 'antd/es/table/interface';
import { ColumnType } from 'antd/es/table';
import { Context } from 'react';
import { CSSProperties } from 'react';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import { DropdownProps } from 'antd';
import { FC } from 'react';
import { FormInstance } from 'antd';
import { FormItemProps } from 'antd';
import { FormProps } from 'antd';
import { ForwardRefExoticComponent } from 'react';
import { GetRowKey } from 'antd/es/table/interface';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { MemoExoticComponent } from 'react';
import { MenuItemType } from 'antd/es/menu/hooks/useItems';
import { MenuProps } from 'antd';
import { MenuTreeList } from 'react-evefyou-router';
import { message } from 'antd';
import { MessageDescriptor } from 'react-intl';
import { ModalFunc } from 'antd/es/modal/confirm';
import { ModalFuncProps } from 'antd';
import { ModalProps } from 'antd';
import { default as moment_2 } from 'moment';
import { MouseEventHandler } from 'react';
import { NamedExoticComponent } from 'react';
import { notification } from 'antd';
import { PopconfirmProps } from 'antd';
import { PrimitiveType } from 'react-intl';
import { PropsWithChildren } from 'react';
import { default as React_2 } from 'react';
import { ReactElement } from 'react';
import { RefAttributes } from 'react';
import { RowProps } from 'antd';
import { RowSelectMethod } from 'antd/es/table/interface';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { SorterResult } from 'antd/es/table/interface';
import { SortOrder } from 'antd/es/table/interface';
import { SpaceSize } from 'antd/es/space';
import { TablePaginationConfig } from 'antd';
import { TableProps } from 'antd/es/table';
import { TableRowSelection } from 'antd/es/table/interface';
import { TooltipProps } from 'antd';
import { UsePropsMethods } from 'react-evefyou-hooks';

export declare function addClass(element: HTMLElement, className: string): void;

export declare const BasicBreadcrumb: FC<BasicBreadcrumbProps>;

export declare type BasicBreadcrumbProps = BreadcrumbProps & {
    back?: boolean;
};

export declare const BasicButton: FC<PropsWithChildren<ButtonProps>>;

export declare const BasicDropdown: FC<BasicDropdownProps>;

export declare const BasicDropdownMemo: NamedExoticComponent<BasicDropdownProps>;

export declare interface BasicDropdownProps extends PropsWithChildren<DropdownProps> {
    popconfirm: boolean;
    onClick?: MenuItemType['onClick'];
    selectedKeys?: string[];
    items?: DropMenuItem[];
}

export declare const BasicFallback: FC<BasicFallbackProps>;

export declare interface BasicFallbackProps {
    fallbackType?: FallbackTypeEnum;
}

export declare const BasicForm: <T = any>(p: BasicFormProps & {
    children?: React_2.ReactNode;
    className?: string | undefined;
} & {
    ref?: React_2.Ref<BasicFormInstance<T>> | undefined;
}) => ReactElement;

export declare const BasicFormAction: MemoExoticComponent<typeof BasicFormActionFn>;

declare function BasicFormActionFn({ expand, showExpand, showReset, showSubmit, submitBtnOptions, resetBtnOptions, onExpand, size, textAlign, renderSubmitBefore, renderExpandBefore, renderExpandAfter, renderResetBefore, }: BasicFormActionProps): JSX_2.Element;

export declare interface BasicFormActionProps {
    expand?: boolean;
    showExpand?: boolean;
    showSubmit?: boolean;
    showReset?: boolean;
    onExpand?: MouseEventHandler<(HTMLButtonElement & HTMLAnchorElement)>;
    submitBtnOptions?: ButtonOptions;
    resetBtnOptions?: ButtonOptions;
    size?: SpaceSize;
    textAlign?: CSSProperties['textAlign'];
    renderSubmitBefore?: React.ReactNode;
    renderResetBefore?: React.ReactNode;
    renderExpandBefore?: React.ReactNode;
    renderExpandAfter?: React.ReactNode;
}

export declare interface BasicFormInstance<T = any> extends FormInstance<T>, BaseInstance<BasicFormProps>, Pick<FormHookMethods, 'init'> {
}

export declare const BasicFormItem: NamedExoticComponent<BasicFormItemProps>;

export declare interface BasicFormItemProps {
    canRender?: boolean;
    hidden?: boolean;
    formProps?: Partial<BasicFormProps>;
    itemProps?: ItemProps;
    colProps?: Partial<ColProps>;
    renderColContent?: (params: RenderCallbackParams) => React.ReactNode;
}

export declare interface BasicFormProps extends FormProps {
    baseColProps?: Partial<ColProps>;
    rowProps?: RowProps;
    autoSetPlaceHolder?: boolean;
    items?: BasicFormItemProps[];
    showExpand?: boolean;
    actionProps?: BasicFormActionProps;
    showAction?: boolean;
    name?: string;
}

export declare const BasicHelp: React_2.FC<PropsWithChildren<BasicHelpProps>>;

export declare type BasicHelpProps = Partial<TooltipProps> & {
    text?: string | string[];
    showIndex?: boolean;
    fontSize?: string;
    maxWidth?: string;
};

export declare const BasicIcon: FC<BasicIconProps>;

export declare interface BasicIconProps extends Partial<CustomIconComponentProps> {
    icon?: React_2.ReactNode;
    size?: number;
    iconifyInline?: boolean;
    className?: string;
    onClick?: () => void;
}

export declare const BasicMenu: FC<BasicMenuProps>;

export declare interface BasicMenuProps extends MenuProps {
    menuTreeList: MenuTreeList;
    className?: string;
}

export declare const BasicModal: React_2.MemoExoticComponent<React_2.ForwardRefExoticComponent<BasicModalProps & React_2.RefAttributes<ModalInstance>>>;

export declare interface BasicModalProps extends Partial<ModalProps> {
    footerProps?: ModalFooterProps;
    headerProps?: ModalHeaderProps;
    closeIconProps?: ModalCloseProps;
    wrapperProps?: ModalWrapperProps;
    onCancel?: (e: React_2.MouseEvent<HTMLSpanElement>) => void;
    name?: string;
}

export declare const BasicNProgress: ({ children, }: {
    children: React_2.ReactElement;
}) => React_2.ReactElement;

export declare const BasicPopButton: FC<BasicPopButtonProps>;

export declare interface BasicPopButtonProps extends Partial<ButtonProps> {
    enable?: boolean;
    popconfirmProps?: PopconfirmProps;
}

export declare const BasicResult: ({ code, children, }: BasicResultProps) => React_2.ReactElement;

export declare interface BasicResultProps {
    code?: number;
    children?: React.ReactElement;
}

export declare const BasicScroll: ForwardRefExoticComponent<Omit<BasicScrollProps, "ref"> & RefAttributes<BasicScrollMethods>>;

declare type BasicScrollDefaultProps = PropsWithChildrenCls<{
    __TYPE: 'BasicScroll';
    id: string;
    style: CSSProperties;
}>;

export declare interface BasicScrollMethods {
    props: BasicScrollProps;
    refresh: () => void;
    getElement: () => HTMLElement | null;
    getContent: () => HTMLElement | null;
    getXBar: () => HTMLElement | null;
    getYBar: () => HTMLElement | null;
}

declare type BasicScrollProps = BasicScrollDefaultProps & Recordable;

export declare const BasicTable: <T = any>(p: BasicTableProps<T> & {
    ref?: React_2.Ref<BasicTableInstance<any>> | undefined;
}) => ReactElement;

export declare interface BasicTableInstance<T = any> extends BaseInstance<BasicTableProps<T>>, Pick<TableHookMethods<T>, 'init' | 'setHeight' | 'getPagination' | 'getDataSource'> {
    getElement?: () => HTMLDivElement | null;
}

export declare interface BasicTableProps<T = any> extends Omit<TableProps<T>, 'rowSelection' | 'columns' | 'children'> {
    height?: number;
    columns?: TableColumnProps<T>[];
    rowSelection?: TableRowSelectionProps<T>;
    sortFn?: SortFn;
    filterFn?: FilterFn;
    clearSelectOnChange?: boolean;
    autoCreateKey?: boolean;
    isTreeTable?: boolean;
    ellipsis?: boolean;
    tableSetting?: TableSetting | false;
    headerProps?: TableHeaderProps;
    titleProps?: TableTitleProps;
    canResize?: boolean;
    canResizeParent?: boolean;
    searchProps?: BasicFormProps;
    indexColumnConfig?: ColumnType<T>;
    actionColumnConfig?: ColumnType<T>;
    showIndexColumn?: boolean;
    onReload?: () => void;
    onTableChange?: (params: TableChangeParams) => void;
    onSelectionChange?: (selectedRowKeys: React_2.Key[], selectedRows: T[]) => void;
    onColumnsChange?: (data: ColumnChangeParam[]) => void;
    openSearchForm?: boolean;
    resizeHeightOffset?: number;
    maxHeight?: number;
    children?: ColumnType<T>['render'];
    headerRowHeight?: string;
}

export declare const BasicTitle: FC<PropsWithChildrenCls<BasicTitleProps>>;

export declare interface BasicTitleProps {
    helpMessage?: string[] | string;
    span?: boolean;
    normal?: boolean;
    onDoubleClick?: MouseEventHandler;
}

declare type ButtonColorType = ButtonType | '';

declare type ButtonOptions = Partial<ButtonProps_2> & {
    text: React.ReactNode;
};

export declare interface ButtonProps extends Partial<ButtonProps_2> {
    color?: ButtonColorType;
    loading?: boolean;
    disabled?: boolean;
    /**
     * Text before icon.
     */
    preIcon?: React_2.ReactNode;
    /**
     * Text after icon.
     */
    postIcon?: React_2.ReactNode;
    /**
     * preIcon and postIcon icon size.
     * @default: 14
     */
    iconSize?: number;
    onClick?: React_2.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
}

export declare type CellFormat<T> = string | ((text: string, record: T, index: number) => string | number) | Map<string | number, any>;

export declare type ColumnChangeParam = {
    dataIndex: React_2.Key;
    fixed: boolean | 'left' | 'right' | undefined;
    hidden: boolean;
};

export declare interface ComponentSetting {
    table: ComponentTableSetting;
}

declare type ComponentsFormatXMLElementFn<T, R = string | T | (string | T)[]> = (parts: Array<string | T>) => R;

export declare type ComponentsId = keyof typeof _default;

declare interface ComponentsProps extends MessageDescriptor {
    id: ComponentsId;
    values?: ComponentsValues;
}

export declare type ComponentsValues = Record<string, React_2.ReactNode | PrimitiveType | ComponentsFormatXMLElementFn<React_2.ReactNode, React_2.ReactNode>>;

export declare interface ComponentTableFetchSetting {
    pageField: string;
    sizeField: string;
    listField: string;
    totalField: string;
}

export declare interface ComponentTableSetting {
    fetchSetting: ComponentTableFetchSetting;
    pageSizeOptions: `${number}`[];
    pageSize: number;
    size: string;
    sortFn: SortFn;
    filterFn: FilterFn;
}

export declare interface ConfirmOptions {
    info: ModalFunc;
    success: ModalFunc;
    error: ModalFunc;
    warn: ModalFunc;
    warning: ModalFunc;
}

/**
 * @description: Create confirmation box
 */
declare function createConfirm(options: ModalOptionsEx): ConfirmOptions;

declare function createErrorModal(options: ModalOptionsPartial): {
    destroy: () => void;
    update: (configUpdate: ModalFuncProps | ((prevConfig: ModalFuncProps) => ModalFuncProps)) => void;
};

declare function createInfoModal(options: ModalOptionsPartial): {
    destroy: () => void;
    update: (configUpdate: ModalFuncProps | ((prevConfig: ModalFuncProps) => ModalFuncProps)) => void;
};

declare function createSuccessModal(options: ModalOptionsPartial): {
    destroy: () => void;
    update: (configUpdate: ModalFuncProps | ((prevConfig: ModalFuncProps) => ModalFuncProps)) => void;
};

declare function createWarningModal(options: ModalOptionsPartial): {
    destroy: () => void;
    update: (configUpdate: ModalFuncProps | ((prevConfig: ModalFuncProps) => ModalFuncProps)) => void;
};

export declare const dateUtil: typeof moment_2;

declare const _default: {
    'components.common.text.ok': string;
    'components.common.search': string;
    'components.common.refresh': string;
    'components.common.reset': string;
    'components.common.fullScreen': string;
    'components.common.exitFullScreen': string;
    'components.common.close': string;
    'components.common.input.text': string;
    'components.common.choose.text': string;
    'components.common.backhome': string;
    'components.common.backLogin': string;
    'components.button.okText': string;
    'components.button.cancelText': string;
    'components.form.max.tip': string;
    'components.table.total': string;
    'components.table.index': string;
    'components.table.column.action': string;
    'components.table.setting.columns': string;
    'components.table.setting.size': string;
    'components.table.setting.size.default': string;
    'components.table.setting.size.middle': string;
    'components.table.setting.size.small': string;
    'components.table.setting.columns.showAll': string;
    'components.table.setting.columns.showIndex': string;
    'components.table.setting.columns.showSelect': string;
    'components.table.setting.columns.fixedLeft': string;
    'components.table.setting.columns.fixedRight': string;
    'components.fallback.loading.tip': string;
    'components.error.title': string;
    'components.error.sub.title': string;
    'components.404.title': string;
    'components.404.sub.title': string;
    'components.403.title': string;
    'components.403.sub.title': string;
};

export declare const DEFAULT_COMPONENT_SETTING: ComponentSetting;

declare interface DropMenuItem extends MenuItemType {
    popconfirm?: PopconfirmProps;
    icon?: string;
    key: React_2.Key;
    disabled?: boolean;
    divider?: boolean;
}

export declare enum FallbackTypeEnum {
    errorResult = "errorResult",
    loading = "loading"
}

export declare type FilterFn = (data: Recordable) => Recordable;

export declare function formatComponentsById(id: ComponentsId, values?: ComponentsValues): React_2.ReactNode;

export declare function formatComponentsMessage({ id, values }: ComponentsProps): React_2.ReactNode;

declare type FormatMessageProps = (descriptor: ComponentsProps, values?: ComponentsValues) => string;

export declare function formatToDate(date?: moment_2.MomentInput, format?: string): string;

export declare function formatToDateTime(date?: moment_2.MomentInput, format?: string): string;

export declare type FormHookMethods = UseFormPropsMethods;

export declare function getBoundingClientRect(element: Element): DOMRect | number;

declare interface GetColumnsParams {
    ignoreIndex?: boolean;
    ignoreAction?: boolean;
    sort?: boolean;
}

/**
 *
 * @param el 获取内容高度
 * @returns
 */
export declare function getHeight(el: HTMLElement): number;

export declare function getPopupContainer(node?: HTMLElement): HTMLElement;

/**
 * Get the left and top offset of the current element
 * left: the distance between the leftmost element and the left side of the document
 * top: the distance from the top of the element to the top of the document
 * right: the distance from the far right of the element to the right of the document
 * bottom: the distance from the bottom of the element to the bottom of the document
 * rightIncludeBody: the distance between the leftmost element and the right side of the document
 * bottomIncludeBody: the distance from the bottom of the element to the bottom of the document
 *
 * @description:
 */
export declare function getViewportOffset(element: Element): ViewportOffsetResult;

export declare type IconType = 'success' | 'info' | 'error' | 'warning';

export declare type IndexColumnProps<T = any> = TableColumnProps<T>;

export declare interface ItemComponentParams {
    props: Partial<ItemProps>;
    formModel: Recordable;
}

export declare type ItemComponentType = '' | 'Input' | 'InputGroup' | 'InputPassword' | 'InputSearch' | 'InputTextArea' | 'InputNumber' | 'InputCountDown' | 'Select' | 'TreeSelect' | 'RadioButtonGroup' | 'RadioGroup' | 'Checkbox' | 'CheckboxGroup' | 'AutoComplete' | 'Cascader' | 'DatePicker' | 'MonthPicker' | 'RangePicker' | 'WeekPicker' | 'TimePicker' | 'Switch' | 'StrengthMeter' | 'Upload' | 'IconPicker' | 'Render' | 'Slider' | 'Rate' | 'Divider';

export declare interface ItemInnerProps extends ItemProps {
    renderCallbackParams: RenderCallbackParams;
}

export declare interface ItemProps extends Omit<FormItemProps, 'required'> {
    itemComponent?: ItemComponentType;
    itemComponentProps?: Recordable | ((params: RenderCallbackParams) => Recordable);
    helpMessage?: string | string[] | ((renderCallbackParams: RenderCallbackParams) => string | string[]);
    helpProps?: Partial<BasicHelpProps>;
    subLabel?: React.ReactNode;
    changeEvent?: string;
    disabled?: boolean;
    size?: SizeType;
    autoSetPlaceHolder?: boolean;
    suffix?: string | number | ((params: RenderCallbackParams) => string | number);
    renderItemComponentContent?: (params: RenderCallbackParams) => React.ReactNode;
    renderItemContent?: (params: RenderCallbackParams) => React.ReactNode;
    required?: boolean | ((params: RenderCallbackParams) => boolean);
    dynamicRules?: (params: RenderCallbackParams) => FormItemProps['rules'];
}

export declare type MenuItem = Required<MenuProps>['items'][number];

export declare const MenuItemLabel: FC<MenuItemLabelProps>;

export declare interface MenuItemLabelProps {
    title: string;
    to?: string;
}

export declare class MessageHelper {
    static createMessage: typeof message;
    static notification: typeof notification;
    static createConfirm: typeof createConfirm;
    static createSuccessModal: typeof createSuccessModal;
    static createErrorModal: typeof createErrorModal;
    static createInfoModal: typeof createInfoModal;
    static createWarningModal: typeof createWarningModal;
}

export declare interface ModalCloseProps {
    showFullscreen?: boolean;
    isFullscreen?: boolean;
    onFullScreen?: (e: React_2.MouseEvent<HTMLButtonElement>) => void;
    onCancel?: (e: React_2.MouseEvent<HTMLSpanElement>) => void;
}

export declare const ModalContext: Context<ModalContextValue>;

export declare interface ModalContextData {
    isUpdate?: boolean;
    record?: object;
}

export declare type ModalContextDataMap = {
    [key: string]: ModalContextData | undefined | null;
};

export declare type ModalContextOpenMap = {
    [key: string]: boolean | undefined | null;
};

export declare type ModalContextProps = PropsWithChildren;

export declare interface ModalContextValue {
    dataMap: ModalContextDataMap;
    setDataMap: React.Dispatch<React.SetStateAction<ModalContextDataMap>>;
    openMap: ModalContextOpenMap;
    setOpenMap: React.Dispatch<React.SetStateAction<ModalContextOpenMap>>;
}

export declare interface ModalFooterProps extends Partial<ModalProps> {
    okType?: ButtonType;
    onOk?: React_2.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
    onCancel?: React_2.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
    insertFooter?: React_2.ReactNode;
    centerFooter?: React_2.ReactNode;
    appendFooter?: React_2.ReactNode;
}

export declare interface ModalHeaderProps extends Partial<ModalProps> {
    helpMessage?: string[] | string;
    onDoubleClick?: MouseEventHandler;
    onMouseOver?: <T>(event?: React_2.MouseEvent<T, MouseEvent>) => void;
    onMouseOut?: <T>(event?: React_2.MouseEvent<T, MouseEvent>) => void;
}

export declare interface ModalHookMethods extends UseModalPropsMethods {
    isOpen?: () => boolean;
    open: () => void;
    closeModal: () => void;
    openOkLoading: () => void;
    closeOkLoading: () => void;
    openModal: <T = any>(props?: boolean, data?: T, openOnSet?: boolean) => void;
}

export declare interface ModalInnerProps {
    fullScreen: [boolean, Actions];
    instance: ModalInstance;
    okLoadingState: boolean;
    disabled: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

export declare interface ModalInstance extends BaseInstance<BasicModalProps>, Pick<ModalHookMethods, 'init' | 'openModal' | 'closeModal' | 'openOkLoading' | 'closeOkLoading'> {
}

export declare interface ModalOptionsEx extends Omit<ModalFuncProps, 'iconType'> {
    iconType: 'warning' | 'success' | 'error' | 'info';
}

export declare type ModalOptionsPartial = Partial<ModalOptionsEx> & Pick<ModalOptionsEx, 'content'>;

export declare const ModalProvider: FC<ModalContextProps>;

export declare interface ModalWrapperInstance {
    resetModalHeight: () => void;
}

export declare interface ModalWrapperProps extends PropsWithChildren {
    height?: number;
    isAdaptive?: boolean;
    headerHeight?: number;
    footerHeight?: number;
    footerHeightOffset?: number;
    isFullScreen?: boolean;
}

export declare type NotificationPlacement = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';

export declare type Nullable<T> = T | null;

declare interface Option_2 {
    key: string;
    title?: string;
    value?: string;
}
export { Option_2 as Option }

export declare type PropsWithChildrenCls<P = unknown> = P & {
    children?: React.ReactNode | undefined;
    className?: string | undefined;
};

export declare type PropsWithCls<P = unknown> = P & {
    className?: string | undefined;
};

export declare type Recordable<T = any> = Record<string, T>;

export declare function removeClass(element: HTMLElement, className: string): void;

export declare interface RenderCallbackParams {
    props: ItemProps;
    values: Recordable;
    field: string;
}

export declare interface SearchState {
    sortInfo: Recordable | Recordable[];
    filterInfo: Record<string, string[]>;
}

export declare interface SorterParam {
    order: SortOrder;
    field: string;
}

export declare type SortFn = <T>(sortInfo: SorterResult<T>) => SorterParam | object;

export declare const TableAction: FC<TableActionProps>;

export declare interface TableActionItem extends BasicPopButtonProps {
    key: React_2.Key;
    title?: string;
    icon?: React_2.ReactNode;
    popConfirmProps?: PopconfirmProps;
    disabled?: boolean;
    divider?: boolean;
    show?: boolean;
    tooltip?: string | TooltipProps;
    onClick?: React_2.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
}

export declare interface TableActionProps {
    divider?: boolean;
    items?: TableActionItem[];
    dropDownItems?: TableActionItem[];
    renderItem?: (item: TableActionItem) => React_2.ReactNode;
    renderDropdownHeader?: () => React_2.ReactNode;
}

export declare type TableChangeParams = Partial<Recordable & SearchState>;

export declare type TableColumnProps<T = any> = ColumnsType<T>[number] & {
    type?: 'index' | 'action' | 'normal';
    children?: TableColumnProps<T>[];
    dataIndex?: string | number | readonly (string | number)[];
    show?: boolean | ((column: TableColumnProps<T>) => boolean);
    format?: CellFormat<T>;
    edit?: boolean;
    editRow?: boolean;
    editable?: boolean;
    hidden?: boolean;
};

export declare type TableColumnPropsWithKey<T = any> = TableColumnProps<T> & {
    key: React_2.Key;
};

export declare interface TableContextValue<T = any> extends Pick<TableHookMethods<T>, 'setShowIndexColumn' | 'setSize' | 'setRowSelection' | 'getRowSelection' | 'getColumns' | 'getShowIndexColumn' | 'setColumnsWithCache' | 'getCacheColumns' | 'hideRowSelection' | 'rowSelectionIsHidden' | 'getDefaultRowSelection'> {
    getElement?: () => HTMLDivElement | null;
}

export declare interface TableHeaderProps {
    renderTableTitle?: React_2.ReactNode;
    renderTableSetting?: React_2.ReactNode;
    renderHeaderTop?: React_2.ReactNode;
    renderToolbar?: React_2.ReactNode;
}

export declare interface TableHookMethods<T = any> extends UseTablePropsMethods<T>, UseDataSourceMethods, UseColumnsMethods, UseRowSelectionMethods, UsePaginationMethods {
}

export declare interface TableRenderComp {
    tableHeader?: React_2.ReactNode;
}

export declare interface TableRowSelectionProps<T = any> extends TableRowSelection<T> {
    checkMode?: 'strict' | 'default' | 'complex';
}

export declare interface TableSetting {
    redo?: boolean;
    size?: boolean;
    setting?: boolean;
    fullScreen?: boolean;
}

export declare interface TableSettingProps {
    items?: React_2.ReactNode[];
}

export declare interface TableTitleProps {
    title?: React_2.ReactNode | ((option: {
        selectRows: Recordable[];
    }) => React_2.ReactNode);
    getSelectRows?: () => Recordable[];
    helpMessage?: string | string[];
}

declare interface UseColumnsMethods<T = any> {
    getViewColumns: () => TableColumnProps<T>[];
    getColumnsWithIndexAndAction: () => TableColumnProps<T>[];
    setColumns: (columnList: Partial<TableColumnProps<T>>[]) => void;
    resetColumns: () => void;
    setColumnsWithCache: (columnList: Partial<TableColumnProps<T>>[]) => void;
    getColumns: (opt?: GetColumnsParams) => TableColumnPropsWithKey<T>[];
    getCacheColumns: () => TableColumnPropsWithKey<T>[];
    getShowIndexColumn: () => boolean;
}

export declare const useComponentsLocale: () => {
    formatMessage: FormatMessageProps;
    formatComponentsById: (id: ComponentsId, values?: ComponentsValues) => string;
};

declare interface UseDataSourceMethods<T = any> {
    getDataSource: () => T[];
    setDataSource: (dataSource: T[]) => void;
    findTableRecord: (rowKey: string | number) => {
        idxArr: number[];
        row?: T;
    };
    findTableRecords: (rowKeys: (string | number)[]) => {
        idxArr: number[];
        row?: T;
    }[];
    updateTableRecordProp: (index: number, key: keyof T, value: T[keyof T]) => T[keyof T];
    updateTableRecord: (rowKey: string | number, record: T) => T | undefined;
    deleteTableRecord: (rowKey: string | number | string[] | number[]) => void;
}

export declare function useDesign(scope: string): {
    prefixCls: string;
    prefixVar: string;
};

export declare type UseFormPropsMethods = Pick<UsePropsMethods<BasicFormProps>, 'init'>;

export declare type UseFormPropsReturnType = [BasicFormProps, UseFormPropsMethods];

export declare function useMenu(): {
    loopMenuItem: (menus?: MenuTreeList) => MenuItem[] | undefined;
};

export declare function useModalContext(): ModalContextValue;

export declare function useModalProps(props: BasicModalProps): UseModalPropsReturnType;

export declare type UseModalPropsMethods = Pick<UsePropsMethods<BasicModalProps>, 'init'>;

export declare type UseModalPropsReturnType = [BasicModalProps, UseModalPropsMethods];

declare interface UsePaginationMethods {
    getPagination: () => TablePaginationConfig | false;
    setPagination: (info: Partial<TablePaginationConfig | false>) => void;
}

export declare type UseRednersProps<T = any> = Partial<BasicTableProps<T>> & {
    tableRef: React.RefObject<HTMLDivElement>;
};

declare interface UseRowSelectionMethods<T = any> {
    getRowKey: GetRowKey<T>;
    handleRowSelectionChange: (selectedRowKeys: React_2.Key[], selectedRows: T[], info: {
        type: RowSelectMethod;
    }) => void;
    setSelectedRowsAndRowKeys: (keys?: React_2.Key[], rows?: T[]) => void;
    setSelectedRowKeys: (keys: React_2.Key[]) => void;
    setSelectedRows: (rows: T[]) => void;
    clearSelectedRowKeys: (keys: React_2.Key[]) => void;
    removeSelectedRowKey: (key: React_2.Key) => void;
    getSelectedRowKeys: () => React_2.Key[];
    getSelectedRows: () => T[];
    getDefaultRowSelection: () => TableRowSelectionProps<T> | undefined;
    getRowSelection: () => TableRowSelectionProps<T> | undefined;
    hideRowSelection: (flag?: boolean) => void;
    rowSelectionIsHidden: () => boolean;
}

export declare type UseTablePropsMethods<T = any> = UseTablePropsSetMethods<T>;

export declare type UseTablePropsReturnType<T = any> = [BasicTableProps<T>, UseTablePropsMethods<T>];

export declare interface UseTablePropsSetMethods<T = any> extends UsePropsMethods<BasicTableProps<T>> {
    setShowIndexColumn: (value?: boolean) => void;
    setRowSelection: (value?: TableRowSelectionProps<T>) => void;
    setSize: (value?: SizeType) => void;
    setHeight: (value?: number) => void;
}

export declare function uuid(): string;

export declare interface ViewportOffsetResult {
    left: number;
    top: number;
    right: number;
    bottom: number;
    rightIncludeBody: number;
    bottomIncludeBody: number;
}

export { }
