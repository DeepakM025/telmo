import React, { useState } from 'react';
import Header from "../components/header";
import ReadMore from "../assets/images/down_arrow_white.svg";
import { Row } from "react-bootstrap";

function HowWeWork() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div>
      <Header />
      <div className="value_detail_wrap how_we_work mob_h_100">
        <Row className="h-100 align-items-center">
          <div className="value_right">
            <div className={showMore ? "readMore_wrap active mob_w_100" : "readMore_wrap mob_w_100"}>
              <h2 className="color_white mb-2">How Do We Work</h2>
              <p>
                Together with our logistics partners, we guarantee quality local products at your door. Both the regions and our local producers are exhaustively selected with a wide variety of tastes and flavors.
  Thanks to the collaboration of our producers, our logistics partner is able to collect those products in order to put them on our TELMO BOX, ready to enjoy the great Italian flavors.
  <br /> <br />
  -	 PRODUCERS <br />
   The Producers have their products ready, and their artisanal work being ready for pickup. As soon as the order is done, their work is ready to be brought to our next step.
   <br /> <br />-	PREPARING THE TELMO BOX <br /> 
  Once the products have been collected, our logistics partner will bring to our TELMO Materialization centers. These products are going to be carefully packaged into the personalized, readily-prepared TELMO Boxes which are on standby to be shipped to you.
  <br /><br />-	 TELMO BOX <br />
  The TELMO Box, with each of our delicately selected products will compose your experience. Through the hands, and savoir-faire of our local producers, these products are going to give the deserved visibility to the 6 selected Italian regions.
  <br /> <br />-	Payment <br />
  100% Safe, reliable, easy, and practical. We make sure that you decide how to validate that your TELMO Box arrives where you want it to land.We accept different payment methods: Credit Card, Debit Card, Paypal, or Bank Transfer.
  <br /> <br />-	ENVIO TELMO BOX <br />
  Upon receipt of your order, immediate delivery of your TELMO Box to your home, or wherever you want to enjoy.
  <br /><br />-	ENJOY <br />
  Savor your TELMO Box, travelling and appreciating all of the most-locally, most-genuinely produced local and traditional Italian products. Overall, with TELMO your palate, and mind will be able to guide you through a true gastronomic journey through Italy!

              </p>
              <button onClick={() => setShowMore(!showMore)}> {showMore ? "Show Less" : "Show More"} <img src={ReadMore} alt="ReadMore" /></button>
            </div>
          </div>
        </Row>
      </div>
    </div>
  )
}

export default HowWeWork;