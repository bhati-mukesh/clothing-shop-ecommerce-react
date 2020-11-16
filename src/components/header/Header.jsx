import'./header.style.css'
import React from 'react';
import {Link} from 'react-router-dom'
import { ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from '../../firebase/firebase.utils'
import {connect} from 'react-redux'
import CartIcon from '../cart-icon/CartIcon';
import CartDropDown from '../cart-dropdown/CartDropDown';

const Header = ({currentUser,hidden}) => {
    return (
        <div className="header" >
            <Link to="/" className="logo-container" >
            <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/contact">CONTACT</Link>
                {
                    currentUser ?
                    <div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div> :
                    <Link className="option" to="/signin">SIGN IN</Link>
                }
                <CartIcon />

            </div>
            {
                hidden ? 
                    <CartDropDown />
                :
                null
            }
        </div>
    );
};

const mapStateToProps = ({user:{currentUser},cart:{hidden}})=>({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);