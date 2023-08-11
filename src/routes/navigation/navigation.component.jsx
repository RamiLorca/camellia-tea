import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
// import { ReactComponent as CamelliaLogo } from '../../assets/CamelliaLogo.svg';
import CamelliaLogo from '../../assets/CamelliaLogo.png';
import './navigation.styles.scss';

const Navigation = () => {
    return (
      <Fragment>
        <div className='navigation'>

          <Link className='logo-container' to='/'>
            {/* <CamelliaLogo className='logo' /> */}
            <img src={CamelliaLogo} className='logo' alt=''/>
          </Link>

          <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>
                SHOP
            </Link>
            <Link className='nav-link' to='/auth'>
                SIGN IN
            </Link>
          </div>

        </div>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation;