import React, { FC } from 'react';
import LogoBlock from '../UI/LogoBlock/LogoBlock';
import styles from './Footer.module.scss';
import CustomNavLink from '../UI/CustomNavLink/CustomNavLink';

interface ILink {
  name: string,
  link: string,
}

const LINKS: Array<ILink> = [{
  name: 'Support',
  link: '/support'
}, {
  name: 'Privacy Policy',
  link: '/privacy-policy'
}, {
  name: 'Terms and Conditions',
  link: '/terms-and-conditions'
}];

const Footer: FC = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
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
      <p className={styles.rights}>© 2020 Enver, All Rights Reserved</p>
    </footer>
  );
};

export default Footer;