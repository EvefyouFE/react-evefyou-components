import { Recordable } from "../../types";
interface UseNativePropsOptions {
    excludeListeners?: boolean;
    excludeKeys?: string[];
    excludeDefaultKeys?: boolean;
}
export declare function useNativeProps<T extends Recordable>(props: T, options?: UseNativePropsOptions): T;
export {};
