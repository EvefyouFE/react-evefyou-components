import { PopconfirmProps } from "antd";
import { MenuItemType } from "antd/es/menu/hooks/useItems";
import React from "react";
export interface DropMenuItem extends MenuItemType {
    popconfirm?: PopconfirmProps;
    icon?: string;
    key: React.Key;
    disabled?: boolean;
    divider?: boolean;
}
//# sourceMappingURL=typing.d.ts.map