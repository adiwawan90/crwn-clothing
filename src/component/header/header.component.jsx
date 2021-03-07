import React from 'react'
import { Link } from 'react-router-dom'
import './header.styles.scss'

import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.util'
// using connect from react-redux, connect is HOC
import { connect } from 'react-redux'
// 
import { createStructuredSelector } from 'reselect'
// using selector for memoize curent user or it can be using useSelector for Hooks
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectCartHidden } from '../../redux/cart/cart.selectors'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

const Header = ({currentUser, hidden}) => {
    return (
        <div className="header">
                <Link to='/'>
                    <Logo className='logo' />
                </Link>
            
            <div className="options">
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/contact'>CONTACT</Link>
                {currentUser ? 
                    <div className='option' onClick={() => auth.signOut()} >SIGN OUT</div>
                    :
                    <Link className='option' to='/signin'>SIGN IN</Link>
                }
                <CartIcon />
            </div>
            { !hidden ? <CartDropdown /> : null }
        </div>
    )
}

// const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
//     currentUser,
//     hidden,
// })

// const mapStateToProps = (state) => ({
//     currentUser: selectCurrentUser(state),
//     hidden: selectCartHidden(state),
// })

const mapStateToProps = createStructuredSelector({ // dgn createStructuredSelector tdk harus passing state, krn sdh akan mengambil seluruh state di TOP LEVEL.
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
})

export default connect(mapStateToProps)(Header)
