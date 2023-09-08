import { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { MenuItemLabelProps } from "../props";

export const MenuItemLabel: FC<MenuItemLabelProps> = ({ title, to, locale }) =>
  to ? (
    <Link to={to}>
      {
        locale ? <FormattedMessage id={locale} /> : title
      }
    </Link>
  ) : locale ? <FormattedMessage id={locale} /> : title;
