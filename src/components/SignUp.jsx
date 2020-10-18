import React from "react";
import FormInput from "./FormInput";
import CustomButton from "./CustomButton";
import {auth, createUserProfileDocument} from "../firebase/firebase.utils.js";

import "./sign-up.styles.scss";

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = async e => {
        e.preventDefault();
        
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });

            this.setState({ displayName: "", email: "", password: "", confirmPassword: "" });

        } catch(error) {
            console.log("error", error.message);
        }

    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;

        return (
            <div className="sign-up">
                <form onSubmit={ this.handleSubmit } className="sign-up-form">
                    <h2 className="title">I do not have an account</h2>
                    <span>Sign up with your email and password</span>
                    <FormInput
                        type="text"
                        value={ displayName }
                        name="displayName"
                        handleChange={ this.handleChange }
                        label="NAME"
                        required 
                    />
                    <FormInput
                        type="email"
                        value={ email }
                        name="email"
                        handleChange={ this.handleChange }
                        label="EMAIL"
                        required
                    />
                    <FormInput
                        type="password"
                        value={ password }
                        name="password"
                        handleChange={ this.handleChange }
                        label="PASSWORD"
                        required
                    />
                    <FormInput
                        type="password"
                        value={ confirmPassword }
                        name="confirmPassword"
                        handleChange={ this.handleChange }
                        label="CONFIRM PASSWORD"
                        required 
                    />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;