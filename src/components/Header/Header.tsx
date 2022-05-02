import React, { FC } from 'react';
import CustomNavLink from '../UI/CustomNavLink/CustomNavLink';
import styles from './Header.module.scss';
import DefaultButton from '../UI/Buttons/DefaultButton/DefaultButton';
import { slide as Menu } from 'react-burger-menu'
import LogoBlock from '../UI/LogoBlock/LogoBlock';

interface ILink {
  name: string,
  link: string,
}

const LINKS: Array<ILink> = [{
  name: 'Home',
  link: '/'
}, {
  name: 'Services',
  link: '/services'
}, {
  name: 'Our Project',
  link: '/our_project'
}, {
  name: 'About us',
  link: '/about_us'
}];

const menuStyles = {
  bmOverlay: {
    height: '44px'
  },
  bmBurgerButton: {
    width: '24px',
    height: '24px',
    position: 'relative',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
    top: '0'
  },
  bmMenu: {
    background: '#373a47',
  },
}

const Header: FC = (): JSX.Element => {
  return (
    <header>
      <LogoBlock/>

      <div className={styles.links}>
        {
          LINKS.map((link: ILink, index: number) =>
            <CustomNavLink key={`link_${index}`} to={link?.link}>
              {link?.name}
            </CustomNavLink>
          )
        }
      </div>

      <div className={styles.menuLib}>
        <Menu styles={menuStyles} right customBurgerIcon={<img src="./images/menu.png"/>} customCrossIcon={<img className={styles.cross} src="./images/cross.png"/>}>
          <div className={styles.listWrap}>
            {
              LINKS.map((link: ILink, index: number) =>
                <CustomNavLink id={link?.name} key={`link_${index}`} to={link?.link}>
                  {link?.name}
                </CustomNavLink>
              )
            }
          </div>
        </Menu>
      </div>

      <DefaultButton className={styles.contactButton}>
        Contact us
      </DefaultButton>
    </header>
  );
};

export default Header;