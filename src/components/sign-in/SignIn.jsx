import "./sign-in.style.css";
import React, { Component } from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = event =>{
      event.preventDefault();
      this.setState({email:"",})
  }

  handleChange = event =>{
      const {value,name} = event.target;
      this.setState({[name]:value})
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          
            <FormInput type="email" name="email" value={this.state.email} id="email" required handleChange={this.handleChange} label="email" />
            {/* <label htmlFor="email">Email</label> */}
            <FormInput type="password" name="password" value={this.state.password} id="password" required handleChange={this.handleChange} label="password" />
            {/* <label htmlFor="password">Password</label> */}
            
            <CustomButton type="submit" >Sign In</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
