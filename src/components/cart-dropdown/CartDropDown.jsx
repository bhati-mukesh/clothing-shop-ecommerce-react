import './cart-dropdown.style.css'
import React from 'react';
import CustomButton from '../custom-button/CustomButton'
import CartItem from '../cart-item/CartItem';
import {connect} from 'react-redux'

const CartDropDown = ({cartItems}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
            {
                cartItems.map(cartItem=>
                    (<CartItem key={cartItem.id} item={cartItem} />))
            }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );
};

const mapSatetToProps = ({cart:{cartItems}})=>({
    cartItems 
})

export default connect(mapSatetToProps,null)(CartDropDown);