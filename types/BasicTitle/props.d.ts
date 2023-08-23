import { MouseEventHandler } from "react";
export interface BasicTitleProps {
    helpMessage?: string[] | string;
    span?: boolean;
    normal?: boolean;
    onDoubleClick?: MouseEventHandler;
}
