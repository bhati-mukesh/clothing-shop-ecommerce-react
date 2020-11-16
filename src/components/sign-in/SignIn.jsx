import "./sign-in.style.css";
import React, { Component } from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";

import { auth,signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async event =>{
      event.preventDefault();
      const {email,password} = this.state
      try{
        const res = await auth.signInWithEmailAndPassword(email,password);
         this.setState({
          email: "",
          password: "",
        })
        console.log(res)
      }catch(error){
        console.log(error)
      }
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
            
            <div className="buttons">
            <CustomButton type="submit" >Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign In With Google</CustomButton>
            </div>

        </form>
      </div>
    );
  }
}

export default SignIn;
