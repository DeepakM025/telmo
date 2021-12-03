import React, { useState } from 'react';
import Header from "../components/header";
import ReadMore from "../assets/images/down_arrow_white.svg";
import { Row } from "react-bootstrap";

function WhatWeOffer() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div>
      <Header />
      <div className="value_detail_wrap how_we_work what_we_offer mob_h_100">
        <Row className="h-100 align-items-center">
          <div className="value_right">
            <div className={showMore ? "readMore_wrap active mob_w_100" : "readMore_wrap mob_w_100"}>
              <h2 className="color_white mb-2">What Do We Offer</h2>
              <p>
              Our goal is to bring to your table, the flavors of the Italian gastronomy. That is why we select each of our products exhaustively, after having tried and enjoyed the secrets of the artisan production, selecting them under strict criteria of quality and authenticity. We choose the products to give you in order to maintain an exquisite standard, along with an overall choice covering the entire savoir-faire of the selected regions. The products in our TELMO BOX will deal with all of your taste buds. The articles are sweet, salty, sour, and bitter. We want to make sure that we do not, only, deliver products but we strive to give you the entire experience, the encompassing escapade to the offered regions.
<br /> <br />
Our TELMO BOX is a symbiosis between culture, art and gastronomy, where local producers are the main protagonists. <br />
 Through our TELMO BOX we intend to create a gastronomic encounter between our clients and the Italian territories. This experience takes place directly at your home, or wherever you are more comfortable, through the tasting of products from  specific Italian regions. Thanks to the TELMO BOX you will, not only, be able to have quality, locally-sourced products but you can taste the region enclosed in the received box.
 <br /> <br />
The quality of the product is the essential of a tradition, of a love relationship between an artisan and his land. That is why we look for local products with a recognized know-how, with which we build a human relationship of trust and closeness. Moreover, in order to effectively convey the genuine savoir-faire the products that we take into account are to be rooted in the local traditional considerations, along with being protected, and guaranteed, by the European Union-backed PGI (Protected Geographical Indication) and PDO (Protected Designation of Origin) labels.


              </p>
              <button onClick={() => setShowMore(!showMore)}> {showMore ? "Show Less" : "Show More"} <img src={ReadMore} alt="ReadMore" /></button>
            </div>
          </div>
        </Row>
      </div>
    </div>
  )
}

export default WhatWeOffer;