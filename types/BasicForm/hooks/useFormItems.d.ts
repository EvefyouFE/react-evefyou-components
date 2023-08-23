import { BasicFormItemProps, BasicFormProps } from "../props";
export type UseFormItemsReturnType = [
    BasicFormItemProps[],
    object
];
export declare function useFormItems(props: BasicFormProps): UseFormItemsReturnType;
