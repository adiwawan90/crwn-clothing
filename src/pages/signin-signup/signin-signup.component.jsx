import React from 'react'

import Signin from '../../component/signin/signin.component'
import Signup from '../../component/signup/signup.component'

import './signin-signup.styles.scss'

const SigninSignup = () => {
    return (
        <div className="signin-signup">
            <Signin />
            <Signup />
        </div>
    )
}

export default SigninSignup
