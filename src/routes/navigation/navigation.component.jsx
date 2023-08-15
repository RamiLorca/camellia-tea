import { Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import CamelliaLogo from '../../assets/CamelliaLogo.png';
import { UserContext } from '../../context/user.context';
import { CartContext } from "../../context/cart.context";
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { NavigationContainer, NavLinks, NavLink, Logo, LogoContainer, LogoAndHeader } from './navigation.styles';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return (
      <Fragment>
        <NavigationContainer className='navigation'>

            <LogoContainer to='/'>
              <Logo src={CamelliaLogo} className='logo' alt=''/>
            </LogoContainer>

            <h1>CAMELLIA TEA CO.</h1>

          <NavLinks>
            <NavLink to='/shop'>
                SHOP
            </NavLink>
            {
              currentUser ? (
                <NavLink as='span' onClick={signOutUser}>
                  SIGN OUT
                </NavLink>)
                : (
                <NavLink to='/auth'>
                  SIGN IN
                </NavLink>
            )}
            <CartIcon />
          </NavLinks>
          {isCartOpen && <CartDropdown />}
        </NavigationContainer>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation;