import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 25px auto;

  h1 {
    font-weight: 300;
    align-self: center;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: auto;
  padding: auto;
  margin: 0;
`;

export const NavLinks = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

export const Logo = styled.img`
    height: 100%;
    width: auto;
    margin: auto;
    padding: 10px;
`;