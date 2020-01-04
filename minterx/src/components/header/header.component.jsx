import React, { Component } from 'react';
import Time from '../time/time.component';
import LangPicker from '../langpicker/langpicker.component';
import SignIn from '../signin/signin.component';
import SignUp from '../signup/signup.component';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="time-and-lang">
                    <Time />
                    <LangPicker />
                </div>
                <div className="signin-and-signup">
                    <SignIn />
                    <SignUp />
                </div>
            </header>
        )
    }
}

export default Header;