import React from 'react';
import { Row } from "react-bootstrap";
import Logo from "../assets/images/logo.png";
import SigninBg from "../assets/images/signin_bg.jpeg";
import UserName from "../assets/images/username.svg";
import Password from "../assets/images/password.svg";
import GoogleIcon from "../assets/images/google_icon.svg";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="img_content_wrap signin_wrap">
      <Row className="m-0 mob_h_100">
        <div className="leftImg mob_d_none">
          <img src={SigninBg} alt="SigninBg" />
        </div>
        <div className="rightText mob_w_100 ">
          <div className="text-center mx-auto mob_min_w_100">
            <div className="logo_wrap"><img src={Logo} alt="Logo" className="mob_w_100"  /></div>
            <p>Please enter you Login and your Password</p>
            <form>
              <div className="form_control">
                <div className="input_wrap">
                  <img src={UserName} alt="UserName" />
                  <input type="text" placeholder="Username or E-mail" />
                </div>
              </div>
              <div className="form_control">
                <div className="input_wrap">
                  <img src={Password} alt="Password" />
                  <input type="password" placeholder="Password" />
                </div>
              </div>
              <div className="forgot_password">
                <Link to="/">Forgot Password</Link>
              </div>
              <button className="login_btn">Login</button>
              <button className="google_signin"><img src={GoogleIcon} alt="GoogleIcon" /> Or sign-in with Google</button>
            </form>
            <p>Not a member yet? <Link to="/">Register!</Link></p>
          </div>
        </div>
      </Row>
    </div>
  )
}

export default SignIn;