import { useCompInstance } from "react-evefyou-hooks/useCompInstance";
import { BasicFormInstance } from "../types/formHooks";
import { BasicFormProps } from "../props";

export function useFormInstance<T = any>(
    props?: BasicFormProps<T>
): [React.MutableRefObject<BasicFormInstance<T> | null>, Partial<BasicFormInstance<T>>] {
    return useCompInstance<BasicFormInstance<T>>(props)
}