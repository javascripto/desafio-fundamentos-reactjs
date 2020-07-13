import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  function isActive(route: string): string {
    return window.location.pathname === route ? 'active' : '';
  }
  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <Link to="/" className={isActive('/')}>
            Listagem
          </Link>
          <Link to="/import" className={isActive('/import')}>
            Importar
          </Link>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
