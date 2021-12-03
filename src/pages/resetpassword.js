import React from 'react';
import { Row } from "react-bootstrap";
import ResetPasswordBg from "../assets/images/reset_password.jpeg";
import Password from "../assets/images/password.svg";

function ResetPassword() {
  return (
    <div className="img_content_wrap signin_wrap">
      <Row className="m-0 mob_h_100">
      <div className="leftImg mob_d_none">
          <img src={ResetPasswordBg} alt="ResetPasswordBg" />
        </div>
      <div className="rightText mob_w_100">
          <div className="text-center mx-auto">
            <h2 className="color_white">Reset Password</h2>
            <form>
            <div className="form_control">
                <div className="input_wrap">
                  <img src={Password} alt="Password" />
                  <input type="password" placeholder="Password" />
                </div>
              </div>
              <div className="form_control mb-5">
                <div className="input_wrap">
                  <img src={Password} alt="Password" />
                  <input type="password" placeholder="Confirm Password" />
                </div>
              </div>
              <button className="login_btn">Reset Password</button>
            </form>
          </div>
        </div>
      </Row>
    </div>
  )
}

export default ResetPassword;