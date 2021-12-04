import React from 'react';
import Header from "../components/header";
import { Row, Container } from "react-bootstrap";
import Cofounder1 from "../assets/images/FilippoDiNola.jpeg";
import Cofounder2 from "../assets/images/MartaMarqués.jpeg";
import Phone from "../assets/images/phone.svg";
import Mail from "../assets/images/mail_2.svg";

function GetInTouch (){
  return(
    <div>
      <Header />
      <div className="getin_touch">
        <Container className="h-100">
        <Row className="h-100">
          <div className="col-md-4 d-flex align-items-center">
            <h2>Get In Touch</h2>
          </div>
          <div className="col-md-8 d-flex align-items-center">
            <div className="text-center">
              <div className="getin_touch_card mob_max_w_100">
                <p>Customer Support/ Help Us to Help You <br /> <br /> We want to make sure that you can voice your concerns, or what you think that could be improved. Please make us know what you think, if there is a problem or something that has made you uncomfortable, we want you to know that we are here for you! Please shoot a message, write us an email, or call us!</p>
              </div>
              <h4 className="color_white">Our Team</h4>
              <Row>
                <div className="col-md-6">
                  <img src={Cofounder1} alt="Cofounder1" />
                  <div className="getin_touch_card mt-4">
                  Filippo Di Nola <br /> Co-Founder <br /> <a href="tel:+33614642437"><img src={Phone} alt="Phone" />  +33614642437</a>  <br /> <a href="mailto:telmopartners@gmail.com"><img src={Mail} alt="Mail" /> telmopartners@gmail.com</a>
                  </div>
                </div>
                <div className="col-md-6">
                  <img src={Cofounder2} alt="Cofounder2" />
                  <div className="getin_touch_card mt-4">
                  Filippo Di Nola <br /> Co-Founder <br /> <a href="tel:+33614642437"><img src={Phone} alt="Phone" />  +33614642437</a>  <br /> <a href="mailto:telmopartners@gmail.com"><img src={Mail} alt="Mail" /> telmopartners@gmail.com</a>
                  </div>
                </div>
              </Row>
            </div>
            
          </div>
        </Row>
        </Container>
        
      </div>
    </div>
  )
}

export default GetInTouch;