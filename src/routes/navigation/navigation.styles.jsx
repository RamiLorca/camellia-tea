import styled from 'styled-components';
import { Link } from 'react-router-dom';

const mobileMediaQuery = '@media (max-width: 768px)';
const smallMobileMediaQuery = '@media (max-width: 500px)';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 25px auto;

  h1 {
    font-weight: 300;
    align-self: center;

    ${mobileMediaQuery} {
      font-size: 18px;
      padding: auto;
      font-weight: 400;
    }

    ${smallMobileMediaQuery} {
      display: none;
    }
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: auto;
  padding: auto;
  margin: 0;

  ${mobileMediaQuery} {
    width: 40px;
    height: auto;
    margin-bottom: 10px;
    margin-right: 10px;
  }
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
  ${mobileMediaQuery} {
    padding: 5px;
  }
`;

export const Logo = styled.img`
    height: 100%;
    width: auto;
    margin: auto;
    padding: 10px;
`;