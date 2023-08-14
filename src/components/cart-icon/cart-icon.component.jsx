import {ShoppingIcon, CartIconContainer, ItemCount} from './cart-icon.styles';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount, isCheckoutPage } = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <CartIconContainer isCheckoutPage={isCheckoutPage} onClick={toggleIsCartOpen} >
            <ShoppingIcon className='shopping-icon' />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;