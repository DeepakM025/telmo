import React from 'react';
import Header from "../components/header";
import { Container, Row } from "react-bootstrap";
import Federico from "../assets/images/federico.jpeg";
import AboutUs from "../assets/images/about_us.jpeg";
import OurMission from "../assets/images/our_mission.jpeg";
import RightArrow from "../assets/images/right_arrow.svg";
import FooterImg from "../assets/images/footer_img.png";
import Logo from "../assets/images/logo.png";
import Insta from "../assets/images/insta.svg";
import Linkedin from "../assets/images/linkedin.svg";
import Twitter from "../assets/images/twitter.svg";
import Emoji from "../assets/images/emoji.svg";
import Facebook from "../assets/images/facebook.svg";
import BannerVideo from "../assets/images/banner_video.webm";
import Noodles from "../assets/images/yellow_noodles.png";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Header />
      <div className="banner">
      {/* <iframe width="100%" height="700px" src={require("../assets/images/banner_video.mp4")}></iframe> */}
      <video id="bgvid1" class="hide-mobile" autoplay="true" loop muted poster> <source src={BannerVideo} /> <source src="" type="video/webm" /> <source src="" type="video/ogv" /></video>
      </div>
      <div class="welcome_sec">
        <Container>
          <div className="welcome_header text-center">
            <h1><span className="d-md-block d-none"><img src={Noodles} alt="Noodles" /></span> WELCOME TO TELMO <span className="d-md-block d-none"><img src={Noodles} alt="Noodles" /></span></h1>
          </div>
          <Row className="justify-content-center">
            <div className="card_ mob_w_90">
              <div className="card_img">
                <img src={Federico} alt="federico" />
              </div>
              <div className="card_auth">
                <h4>FEDERICO FELLINI</h4>
                <p>(“Life is a combination of magic and pasta”)</p>
              </div>
            </div>
            <div className="card_ mob_w_90">
              <div className="card_img">
                <img src={Federico} alt="federico" />
              </div>
              <div className="card_auth">
                <h4>FEDERICO FELLINI</h4>
                <p>(“Life is a combination of magic and pasta”)</p>
              </div>
            </div>
            <div className="card_ mob_w_90">
              <div className="card_img">
                <img src={Federico} alt="federico" />
              </div>
              <div className="card_auth">
                <h4>FEDERICO FELLINI</h4>
                <p>(“Life is a combination of magic and pasta”)</p>
              </div>
            </div>
          </Row>
          <Row className="justify-content-center">
            <div className="card_ mob_w_90">
              <div className="card_img">
                <img src={Federico} alt="federico" />
              </div>
              <div className="card_auth">
                <h4>FEDERICO FELLINI</h4>
                <p>(“Life is a combination of magic and pasta”)</p>
              </div>
            </div>
            <div className="card_ mob_w_90">
              <div className="card_img">
                <img src={Federico} alt="federico" />
              </div>
              <div className="card_auth">
                <h4>FEDERICO FELLINI</h4>
                <p>(“Life is a combination of magic and pasta”)</p>
              </div>
            </div>
            <div className="card_ mob_w_90">
              <div className="card_img">
                <img src={Federico} alt="federico" />
              </div>
              <div className="card_auth">
                <h4>FEDERICO FELLINI</h4>
                <p>(“Life is a combination of magic and pasta”)</p>
              </div>
            </div>
            <div className="card_ mob_w_90">
              <div className="card_img">
                <img src={Federico} alt="federico" />
              </div>
              <div className="card_auth">
                <h4>FEDERICO FELLINI</h4>
                <p>(“Life is a combination of magic and pasta”)</p>
              </div>
            </div>
          </Row>
        </Container>
      </div>
      <div className="img_content_wrap">
        <Row className="m-0">
          <div className="leftImg d-md-block d-none">
            <img src={AboutUs} alt="AboutUs" />
          </div>
          <div className="rightText mob_w_100">
            <div className="text-center">
              <h2>ABOUT US</h2>
              <p>The Idea of this venture comes from our inability to easily find top-quality, local products in foreign countries. As our frustration mounted, we realised that it was an opportunity that had to be seized. <br /> Everything started with our international team that was abroad and did not have easy access to our local products.</p>
              <Link to="/about">Read More...</Link>
            </div>
          </div>
        </Row>
      </div>
      <div className="img_content_wrap">
        <Row className="m-0">
          <div className="rightText ourmission mob_w_100">
            <div className="text-center">
              <h2>OUR MISSION</h2>
              <p>As quality products are the assurance of a positive experience, a constant discovery, and authentic excellence, we want to make sure that you have these products at your doorstep. <br /> We want to make sure that having high-quality products is an easy, seamless process in terms of an array of choices, trust, ease of buying.</p>
              <Link to="/about">Read More...</Link>
            </div>
          </div>
          <div className="leftImg d-md-block d-none">
            <img src={OurMission} alt="ourmission" />
          </div>
        </Row>
      </div>
      <div className="signup">
        <Container>
          <h2>BECOME A TELMO <br /> ENJOYER!</h2>
          <input type="email" placeholder="Email" /> <br />
          <button>SIGN UP</button>
        </Container>
      </div>
      <div className="footer">
        <Row className="m-0">
          <div className="leftImg d-md-block d-none">
            <img src={FooterImg} alt="FooterImg" />
          </div>
          <div className="rightText mob_w_100">
            <div className="text-center w-100">
              <div className="logo_wrap"><img src={Logo} alt="logo" /></div>
              <h4><span><img src={RightArrow} alt="rightArrow" /></span> REACH THE TELMO COMMUNITY</h4>
              <div className="socialmedia_links">
                <Link to=""><img src={Insta} alt="Insta" /></Link>
                <Link to=""><img src={Linkedin} alt="Linkedin" /></Link>
                <Link to=""><img src={Twitter} alt="Twitter" /></Link>
                <Link to=""><img src={Facebook} alt="Facebook" /></Link>
              </div>
              <div className="links">
                <Link to="">Meet Us</Link>
                <Link to="">My Account</Link>
                <br />
                <hr />
                <Link to="">Legal Notice</Link>
                <Link to="">Terms and Condition</Link>
              </div>
              <h3>ENJOY! <span><img src={Emoji} alt="Emoji" /></span></h3>
            </div>

          </div>
        </Row>

      </div>
    </div>

  )
}

export default Home;