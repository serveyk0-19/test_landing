import React, { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import styles from './CustomNavLink.module.scss';

interface Props {
  to: string,
  className?: string,
  children: ReactNode,
  id?: string
}

const CustomNavLink: FC<Props> = ({children, className, to, id}): JSX.Element => {
  return (
    <NavLink id={id} to={to} className={(navData) => cn(className, styles.link, navData.isActive ? styles.active : "")}>
      {children}
    </NavLink>
  );
};

export default CustomNavLink;