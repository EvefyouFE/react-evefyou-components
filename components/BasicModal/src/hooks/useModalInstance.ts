import { useCompInstance } from "react-evefyou-hooks/useCompInstance";
import { BasicModalInstance } from "../typing";
import { BasicModalProps } from "../props";

export function useModalInstance(
    props?: BasicModalProps
): [React.MutableRefObject<BasicModalInstance | null>, Partial<BasicModalInstance>] {
    return useCompInstance<BasicModalInstance>(props)
}