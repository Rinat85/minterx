import React from 'react';
import { FaUserCircle } from 'react-icons/fa'

const SignIn = () => {
    return (
        <a className="signin" href="#!">
            <FaUserCircle className="signin-icon" />
            <span>Вход</span>
        </a>
    )
}

export default SignIn;