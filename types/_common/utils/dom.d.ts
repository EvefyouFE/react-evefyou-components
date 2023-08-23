export declare function getPopupContainer(node?: HTMLElement): HTMLElement;
export interface ViewportOffsetResult {
    left: number;
    top: number;
    right: number;
    bottom: number;
    rightIncludeBody: number;
    bottomIncludeBody: number;
}
export declare function getBoundingClientRect(element: Element): DOMRect | number;
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
/**
 *
 * @param el 获取内容高度
 * @returns
 */
export declare function getHeight(el: HTMLElement): number;
export declare function addClass(element: HTMLElement, className: string): void;
export declare function removeClass(element: HTMLElement, className: string): void;
