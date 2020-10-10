import React from "react";
import { auth, signInWithGoogle } from "../firebase/firebase.utils";
import CustomButton from "./CustomButton";
import FormInput from "./FormInput";

import "./sign-in.scss";

class SignIn extends React.Component {
    constructor () {
        super();

        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: "", password: ""});
        } catch(error) {
            console.log(error);
        }
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value }); 
    }

    render() {
        
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign In with your email and password</span>
                    <form onSubmit={ this.handleSubmit }>
                        <FormInput 
                        handleChange={ this.handleChange }
                        name="email"
                        type="email"
                        value={ this.state.email }
                        required
                        label="EMAIL"
                        />
                        <FormInput 
                        handleChange={ this.handleChange }
                        name="password"
                        type="password"
                        value={ this.state.password }
                        required
                        label="PASSWORD"
                        />
                        <div className="buttons">
                        <CustomButton type="submit" value="Submit Form">
                            SIGN IN
                        </CustomButton>
                        <CustomButton 
                        type="button"
                        isGoogleSignIn
                        onClick={ signInWithGoogle }>
                            SIGN IN WITH GOOGLE
                        </CustomButton>
                        </div>
                    </form>

            </div>
        )
    }
}

export default SignIn;