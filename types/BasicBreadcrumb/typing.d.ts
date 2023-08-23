import { BreadcrumbItemType } from "antd/es/breadcrumb/Breadcrumb";
import { CrumbData } from "react-evefyou-router";
export type RouteAntdCrumbHandle = (data?: CrumbData) => BreadcrumbItemType;
export interface CrumbRouteHandle {
    crumb: RouteAntdCrumbHandle;
}
//# sourceMappingURL=typing.d.ts.map