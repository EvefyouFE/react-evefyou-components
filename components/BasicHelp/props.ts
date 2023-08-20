import { TooltipProps } from "antd";

export type BasicHelpProps = Partial<TooltipProps> & {
    text?: string | string[];
    showIndex?: boolean;
    fontSize?: string;
    maxWidth?: string;
}
