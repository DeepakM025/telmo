import React from 'react';
import { Row } from "react-bootstrap";
import SignUpBg from "../assets/images/signup_page_bg.jpeg";
import UserName from "../assets/images/username.svg";
import Email from "../assets/images/email.svg";
import Password from "../assets/images/password.svg";
import ConfirmPassword from "../assets/images/confirm_password.svg";

function SignUp() {
  return (
    <div className="img_content_wrap signin_wrap">
      <Row className="m-0 mob_h_100">
        <div className="rightText mob_w_100">
          <div className="text-center mx-auto mob_min_w_100">
          <h2 className="color_white">Sign Up</h2>
            <form>
              <div className="form_control">
                <div className="input_wrap">
                  <img src={UserName} alt="UserName" />
                  <input type="text" placeholder="First Name" />
                </div>
              </div>
              <div className="form_control">
                <div className="input_wrap">
                  <img src={UserName} alt="UserName" />
                  <input type="text" placeholder="Last Name" />
                </div>
              </div>
              <div className="form_control">
                <div className="input_wrap">
                  <img src={Email} alt="Email" />
                  <input type="email" placeholder="Email" />
                </div>
              </div>
              <div className="form_control">
                <div className="input_wrap">
                  <img src={Password} alt="Password" />
                  <input type="password" placeholder="Password" />
                </div>
              </div>
              <div className="form_control mb-4">
                <div className="input_wrap">
                  <img src={ConfirmPassword} alt="ConfirmPassword" />
                  <input type="password" placeholder="Confirm Password" />
                </div>
              </div>
              
              <button className="login_btn">Create Account</button>
            </form>
          </div>
        </div>
        <div className="leftImg mob_d_none">
          <img src={SignUpBg} alt="SignUpBg" />
        </div>
      </Row>
    </div>
  )
}

export default SignUp;