import React, { Component } from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import './signin.styles.scss'

import { signinWithGoogle } from '../../firebase/firebase.util'

export class Signin extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = e => {
        e.preventDefault()

        this.setState({ email: '', password: '' })
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }
    
    render() {
        return (
            <div className='sign-in'>
                <h1>I already have an account</h1>
                <span>Signin with your email & password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" value={this.state.email} handleChage={this.handleChange} label='email' required />
                    <FormInput type="password" name="password" value={this.state.password} handleChage={this.handleChange} label='password' required />
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signinWithGoogle} isGoogleSignin >Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default Signin
