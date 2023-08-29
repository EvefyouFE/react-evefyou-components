import { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { MenuItemLabelProps } from "../props";

export const MenuItemLabel: FC<MenuItemLabelProps> = ({ title, to }) =>
  to ? (
    <Link to={to}>
      <FormattedMessage id={title} />
    </Link>
  ) : (
    <FormattedMessage id={title} />
  );
