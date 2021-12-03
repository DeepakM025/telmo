import React from 'react';
import { Row } from "react-bootstrap";
import ForgetPasswordBg from "../assets/images/forget_password.jpeg";
import UserName from "../assets/images/username.svg";

function ForgetPassword() {
  return (
    <div className="img_content_wrap signin_wrap">
      <Row className="m-0 mob_h_100">
      <div className="rightText mob_w_100">
          <div className="text-center mx-auto">
            <h2 className="color_white">Forget Password</h2>
            <form>
              <div className="form_control mb-5">
                <div className="input_wrap">
                  <img src={UserName} alt="UserName" />
                  <input type="text" placeholder="Username or E-mail" />
                </div>
              </div>
              <button className="login_btn">Forgot Password</button>
            </form>
          </div>
        </div>
        <div className="leftImg mob_d_none">
          <img src={ForgetPasswordBg} alt="SigninBg" />
        </div>
        
      </Row>
    </div>
  )
}

export default ForgetPassword;