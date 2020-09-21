import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from './form';
class RegisterForm extends Form {

    state = {
        data: { username: '', password: '', name: '' },
        errors: {}
    }

    schema = {
        username: Joi.string().email().required(),
        password: Joi.string().min(3).max(30).required(),
        name: Joi.string().required()
    };

    doSubmit = () => {
        console.log('register Form submitted');
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username", "Username")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderInput("name", "Name")}
                    {this.renderButton("Register")}
                </form>
            </div>
        );
    }
}

export default RegisterForm;