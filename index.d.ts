/// <reference types="react" />

import { Actions } from 'ahooks/lib/useBoolean';
import { BaseInstance } from 'react-evefyou-hooks';
import { BreadcrumbItemType } from 'antd/es/breadcrumb/Breadcrumb';
import { BreadcrumbProps } from 'antd';
import { ButtonProps as ButtonProps_2 } from 'antd';
import { ButtonType } from 'antd/es/button';
import { ColProps } from 'antd';
import { ColumnsType } from 'antd/es/table/interface';
import { ColumnType } from 'antd/es/table';
import { ComponentType } from 'react';
import { Context } from 'react';
import { CrumbData } from 'react-evefyou-router';
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
import { ModalFunc } from 'antd/es/modal/confirm';
import { ModalFuncProps } from 'antd';
import { ModalProps } from 'antd';
import { MouseEventHandler } from 'react';
import { NamedExoticComponent } from 'react';
import { notification } from 'antd';
import { PopconfirmProps } from 'antd';
import { PropsWithChildren } from 'react';
import { PropsWithChildrenCls } from 'react-evefyou-common';
import { default as React_2 } from 'react';
import { ReactElement } from 'react';
import { ReactNode } from 'react';
import { Recordable } from 'react-evefyou-common';
import { RefAttributes } from 'react';
import { RowProps } from 'antd';
import { RowSelectMethod } from 'antd/es/table/interface';
import { RuleObject } from 'antd/es/form';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { SorterResult } from 'antd/es/table/interface';
import { SortOrder } from 'antd/es/table/interface';
import { SpaceSize } from 'antd/es/space';
import { StoreValue } from 'antd/es/form/interface';
import { TablePaginationConfig } from 'antd';
import { TableProps } from 'antd/es/table';
import { TableRowSelection } from 'antd/es/table/interface';
import { TooltipProps } from 'antd';
import { UsePropsMethods } from 'react-evefyou-hooks';

export declare function add(compName: ItemComponentType, component: React.ComponentType<any>): void;

export declare type AntdMenuItem = Required<MenuProps>['items'][number];

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

export declare function BasicFormActionFn({ expand, showExpand, showReset, showSubmit, submitBtnOptions, resetBtnOptions, onExpand, size, textAlign, renderSubmitBefore, renderExpandBefore, renderExpandAfter, renderResetBefore, }: BasicFormActionProps): JSX_2.Element;

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

export declare const BasicFormItemFn: FC<BasicFormItemProps>;

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

export declare const BasicScrollBase: {
    defaultProps: BasicScrollDefaultProps;
    getProps: (props: Recordable) => BasicScrollProps;
    getOtherProps: (props: Recordable) => Omit<Recordable, keyof BasicScrollDefaultProps>;
};

export declare type BasicScrollDefaultProps = PropsWithChildrenCls<{
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

export declare type BasicScrollProps = BasicScrollDefaultProps & Recordable;

export declare const BasicTable: <T = any>(p: BasicTableProps<T> & {
    ref?: React_2.Ref<BasicTableInstance<any>> | undefined;
}) => ReactElement;

export declare interface BasicTableFetchSetting {
    pageField: string;
    sizeField: string;
    listField: string;
    totalField: string;
}

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
    tableSetting?: TableSettingConfig | false;
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

export declare interface BasicTableSetting {
    fetchSetting: BasicTableFetchSetting;
    pageSizeOptions: `${number}`[];
    pageSize: number;
    size: string;
    sortFn: SortFn;
    filterFn: FilterFn;
}

export declare const BasicTitle: FC<PropsWithChildrenCls<BasicTitleProps>>;

export declare interface BasicTitleProps {
    helpMessage?: string[] | string;
    span?: boolean;
    normal?: boolean;
    onDoubleClick?: MouseEventHandler;
}

export declare type ButtonColorType = ButtonType | '';

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

export declare interface CheckListState {
    checkAll: boolean;
    checkedList: React.Key[];
    defaultCheckList: React.Key[];
}

export declare function classNames(...args: string[]): string | undefined;

export declare type ColumnChangeParam = {
    dataIndex: React_2.Key;
    fixed: boolean | 'left' | 'right' | undefined;
    hidden: boolean;
};

export declare const ColumnSetting: React_2.FC<ColumnSettingProps>;

export declare interface ColumnSettingProps {
    getPopupContainer: (triggerNode: HTMLElement) => HTMLElement;
    onColumnsChange?: (data: ColumnChangeParam[]) => void;
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

/**
 * @description: 生成placeholder
 */
export declare function createPlaceholderMessage(component: ItemComponentType): ReactNode;

declare function createSuccessModal(options: ModalOptionsPartial): {
    destroy: () => void;
    update: (configUpdate: ModalFuncProps | ((prevConfig: ModalFuncProps) => ModalFuncProps)) => void;
};

declare function createWarningModal(options: ModalOptionsPartial): {
    destroy: () => void;
    update: (configUpdate: ModalFuncProps | ((prevConfig: ModalFuncProps) => ModalFuncProps)) => void;
};

export declare interface CrumbRouteHandle {
    crumb: RouteAntdCrumbHandle;
}

export declare const DEFAULT_ALIGN = "center";

export declare const DEFAULT_FILTER_FN: FilterFn;

export declare const DEFAULT_PAGINATION_PROPS: TablePaginationConfig;

export declare const DEFAULT_SIZE: string;

export declare const DEFAULT_SORT_FN: SortFn;

export declare const DEFAULT_TABLE_INNER_PROPS: any;

export declare const DEFAULT_TABLE_SETTING: TableSettingConfig;

export declare function del(compName: ItemComponentType): void;

export declare interface DropMenuItem extends MenuItemType {
    popconfirm?: PopconfirmProps;
    icon?: string;
    key: React_2.Key;
    disabled?: boolean;
    divider?: boolean;
}

export declare const EmptyResult: FC<EmptyResultProps>;

declare interface EmptyResultProps {
    back?: string;
    title?: string;
    subTitle?: string;
    btnName?: string;
}

export declare const ErrorResult: FC<ErrorResultProps>;

declare interface ErrorResultProps {
    back?: string;
    title?: string;
    subTitle?: string;
    btnName?: string;
}

export declare enum FallbackTypeEnum {
    errorResult = "errorResult",
    loading = "loading"
}

export declare const FETCH_SETTING: BasicTableFetchSetting;

export declare type FilterFn = (data: Recordable) => Recordable;

export declare const ForbiddenResult: FC<ForbiddenResultProps>;

declare interface ForbiddenResultProps {
    back?: string;
    title?: string;
    subTitle?: string;
    btnName?: string;
}

export declare function formatCell<T>(format: CellFormat<T>, text: string, record: T, index: number): string | number;

export declare type FormHookMethods = UseFormPropsMethods;

export declare const FullScreenSetting: React_2.FC<FullScreenSettingProps>;

export declare type FullScreenSettingProps = Partial<TooltipProps>;

export declare interface GetColumnsParams {
    ignoreIndex?: boolean;
    ignoreAction?: boolean;
    sort?: boolean;
}

export declare type IconType = 'success' | 'info' | 'error' | 'warning';

export declare const ImgIcon: FC<{
    url: string;
    height?: number;
    width?: number;
    className?: string;
}>;

export declare type IndexColumnProps<T = any> = TableColumnProps<T>;

export declare const Item: React_2.MemoExoticComponent<typeof useRenderItemFn>;

export declare const ItemComponent: React_2.MemoExoticComponent<typeof useRenderItemComponentFn>;

export declare const itemComponentMap: Map<ItemComponentType, ComponentType<any>>;

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

export declare const LoadingSpin: FC;

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

export declare const ModalClose: FC<ModalCloseProps>;

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

export declare const ModalFooter: FC<ModalFooterProps>;

export declare interface ModalFooterProps extends Partial<ModalProps> {
    okType?: ButtonType;
    onOk?: React_2.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
    onCancel?: React_2.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
    insertFooter?: React_2.ReactNode;
    centerFooter?: React_2.ReactNode;
    appendFooter?: React_2.ReactNode;
}

export declare const ModalHeader: FC<ModalHeaderProps>;

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

export declare const ModalWrapper: React_2.ForwardRefExoticComponent<ModalWrapperProps & React_2.RefAttributes<ModalWrapperInstance>>;

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

export declare const NotExistResult: FC<NotExistResultProps>;

declare interface NotExistResultProps {
    back?: string;
    title?: string;
    subTitle?: string;
    btnName?: string;
}

export declare type NotificationPlacement = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';

export declare class ObjectUtils {
    static getMergedProps(props: any, defaultProps: any): any;
    static getDiffProps(props: any, defaultProps: any): any;
    static findDiffKeys(obj1: any, obj2: any): any;
}

declare interface Option_2 {
    key: string;
    title?: string;
    value?: string;
}
export { Option_2 as Option }

export declare const PAGE_SIZE: number;

export declare const PAGE_SIZE_OPTIONS: `${number}`[];

export declare type PlainOption = Pick<TableColumnPropsWithKey, 'key' | 'dataIndex' | 'fixed' | 'hidden'> & {
    label: React.ReactNode;
    value: React.Key;
};

export declare const PlainOptionNode: FC<PlainOptionNodeProps>;

declare interface PlainOptionNodeProps {
    item: PlainOption;
    getPopupContainer: (triggerNode: HTMLElement) => HTMLElement;
    onFixed: (item: PlainOption, fixed?: 'left' | 'right') => void;
    leftIconClassName: (item: PlainOption) => string;
    rightIconClassName: (item: PlainOption) => string;
}

export declare const RedoSetting: React_2.FC<RedoSettingProps>;

export declare type RedoSettingProps = Partial<TooltipProps> & {
    redo?: () => void;
};

export declare interface RenderCallbackParams {
    props: ItemProps;
    values: Recordable;
    field: string;
}

export declare function renderClose(props: BasicModalProps, innerProps: ModalInnerProps): JSX_2.Element;

export declare function renderFooter(props: BasicModalProps, innerProps: ModalInnerProps): JSX_2.Element;

export declare type RouteAntdCrumbHandle = (data?: CrumbData) => BreadcrumbItemType;

export declare const ROW_KEYS: string[];

export declare interface SearchState {
    sortInfo: Recordable | Recordable[];
    filterInfo: Record<string, string[]>;
}

export declare function setComponentRuleType(rule: RuleObject, component: ItemComponentType, valueFormat: string): void;

export declare const SizeSetting: React_2.FC<SizeSettingProps>;

export declare type SizeSettingProps = Partial<TooltipProps>;

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

export declare const TableContext: Context<TableContextValue<any> | undefined>;

export declare interface TableContextValue<T = any> extends Pick<TableHookMethods<T>, 'setShowIndexColumn' | 'setSize' | 'setRowSelection' | 'getRowSelection' | 'getColumns' | 'getShowIndexColumn' | 'setColumnsWithCache' | 'getCacheColumns' | 'hideRowSelection' | 'rowSelectionIsHidden' | 'getDefaultRowSelection'> {
    getElement?: () => HTMLDivElement | null;
}

export declare const TableHeader: (props: TableHeaderProps & {
    ref?: React_2.ForwardedRef<HTMLDivElement>;
}) => JSX.Element;

export declare const TableHeaderMemo: (props: TableHeaderProps & {
    ref?: React_2.ForwardedRef<HTMLDivElement>;
}) => JSX.Element;

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

export declare const TableSetting: React_2.FC<TableSettingProps>;

export declare interface TableSettingConfig {
    redo?: boolean;
    size?: boolean;
    setting?: boolean;
    fullScreen?: boolean;
}

export declare interface TableSettingProps {
    items?: React_2.ReactNode[];
}

export declare const TableTitle: React.FC<TableTitleProps>;

export declare interface TableTitleProps {
    title?: React_2.ReactNode | ((option: {
        selectRows: Recordable[];
    }) => React_2.ReactNode);
    getSelectRows?: () => Recordable[];
    helpMessage?: string | string[];
}

export declare function useBasicTableRenders<T = any>(props: UseRednersProps<T>): TableRenderComp;

export declare function useColumns<T = any>(props: BasicTableProps<T>): UseColumnsReturnType<T>;

export declare interface UseColumnsMethods<T = any> {
    getViewColumns: () => TableColumnProps<T>[];
    getColumnsWithIndexAndAction: () => TableColumnProps<T>[];
    setColumns: (columnList: Partial<TableColumnProps<T>>[]) => void;
    resetColumns: () => void;
    setColumnsWithCache: (columnList: Partial<TableColumnProps<T>>[]) => void;
    getColumns: (opt?: GetColumnsParams) => TableColumnPropsWithKey<T>[];
    getCacheColumns: () => TableColumnPropsWithKey<T>[];
    getShowIndexColumn: () => boolean;
}

export declare type UseColumnsReturnType<T = any> = [
TableColumnProps<T>[],
UseColumnsMethods<T>
];

export declare function useDataSource<T = any>({ props, getRowKey, }: UseDataSourceProps<T>): UseDataSourceReturnType<T>;

export declare interface UseDataSourceMethods<T = any> {
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

export declare type UseDataSourceProps<T = any> = {
    props: BasicTableProps<T>;
    getRowKey: GetRowKey<T>;
};

export declare type UseDataSourceReturnType<T = any> = [
readonly T[],
UseDataSourceMethods<T>
];

export declare function useFormItems(props: BasicFormProps): UseFormItemsReturnType;

export declare type UseFormItemsReturnType = [
BasicFormItemProps[],
object
];

export declare function useFormProps(props: BasicFormProps): UseFormPropsReturnType;

export declare type UseFormPropsMethods = Pick<UsePropsMethods<BasicFormProps>, 'init'>;

export declare type UseFormPropsReturnType = [BasicFormProps, UseFormPropsMethods];

export declare function useMenu(): {
    loopMenuItem: (menus?: MenuTreeList) => AntdMenuItem[] | undefined;
};

export declare function useModalContext(): ModalContextValue;

export declare function useModalProps(props: BasicModalProps): UseModalPropsReturnType;

export declare type UseModalPropsMethods = Pick<UsePropsMethods<BasicModalProps>, 'init'>;

export declare type UseModalPropsReturnType = [BasicModalProps, UseModalPropsMethods];

export declare function usePagination({ pagination }: BasicTableProps): UsePaginationReturnType;

export declare interface UsePaginationMethods {
    getPagination: () => TablePaginationConfig | false;
    setPagination: (info: Partial<TablePaginationConfig | false>) => void;
}

export declare type UsePaginationReturnType = [
TablePaginationConfig | false,
UsePaginationMethods
];

export declare type UseRednersProps<T = any> = Partial<BasicTableProps<T>> & {
    tableRef: React.RefObject<HTMLDivElement>;
};

export declare function useRenderHeader(props: BasicModalProps, innerProps: ModalInnerProps): JSX_2.Element;

/**
 *
 * @param param0 渲染项包裹的组件 Input、Select...
 * @returns
 */
export declare function useRenderItemComponentFn({ name, itemComponent, itemComponentProps, changeEvent, disabled, size, autoSetPlaceHolder, renderItemComponentContent, renderCallbackParams, ...rest }: Partial<ItemInnerProps>): JSX_2.Element;

/**
 *
 * @param props 渲染项 form.item
 * @returns
 */
export declare function useRenderItemFn(props: Partial<ItemInnerProps>): JSX_2.Element;

export declare function useRenderModal(props: BasicModalProps, innerProps: ModalInnerProps): (modal: React_2.ReactNode) => JSX_2.Element;

export declare function useRenders(props: BasicModalProps, innerProps: ModalInnerProps): {
    header: JSX_2.Element;
    closeIcon: JSX_2.Element;
    footer: JSX_2.Element;
    modalRender: (modal: React_2.ReactNode) => JSX_2.Element;
};

export declare function useRowSelection<T extends Recordable>(props: BasicTableProps<T>): UseRowSelectionReturnType<T>;

export declare interface UseRowSelectionMethods<T = any> {
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

export declare type UseRowSelectionProps<T = any> = {
    props: BasicTableProps<T>;
    getRowKey: GetRowKey<T>;
};

export declare type UseRowSelectionReturnType<T = any> = [
(BasicTableProps<T>['rowSelection'] | undefined),
UseRowSelectionMethods<T>
];

export declare const useTableContext: () => TableContextValue<any>;

export declare function useTableProps<T = any>(props: BasicTableProps<T>): UseTablePropsReturnType<T>;

export declare type UseTablePropsMethods<T = any> = UseTablePropsSetMethods<T>;

export declare type UseTablePropsReturnType<T = any> = [BasicTableProps<T>, UseTablePropsMethods<T>];

export declare interface UseTablePropsSetMethods<T = any> extends UsePropsMethods<BasicTableProps<T>> {
    setShowIndexColumn: (value?: boolean) => void;
    setRowSelection: (value?: TableRowSelectionProps<T>) => void;
    setSize: (value?: SizeType) => void;
    setHeight: (value?: number) => void;
}

export declare function useTableScroll(props: BasicTableProps, methods: UseTableScrollHooksMethods): UseTableScrollReturnType;

export declare interface UseTableScrollHooksMethods extends Pick<TableHookMethods, 'getRowSelection' | 'getViewColumns'> {
    tableRef: React.RefObject<HTMLDivElement>;
}

export declare interface UseTableScrollMethods {
    canTableResize: () => boolean;
}

export declare type UseTableScrollReturnType = [BasicTableProps['scroll'], UseTableScrollMethods];

/**
 *
 * @param rule 自定义校验器
 * @param value
 * @returns
 */
export declare function validator(rule: RuleObject, value: StoreValue, callback: (error?: string) => void): Promise<void>;

export { }
