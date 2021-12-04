import React, {useState} from 'react';
import Header from "../components/header";
import ExcellenceIcon from "../assets/images/exellence.svg";
import ReadMore from "../assets/images/readMore.svg";
import { Row } from "react-bootstrap";

function Excellence() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div>
      <Header />
      <div className="value_detail_wrap excellence_bg">
        <Row className="h-100 align-items-center mob_align_unset">
          <div className="value_left mob_w_100">
            <div className="text-center">
              <img src={ExcellenceIcon} alt="ExcellenceIcon" />
              <h2 className="color_white">Excellence</h2>
            </div>
          </div>
          <div className="value_right mob_w_100">
            <div className={showMore ? "readMore_wrap active mob_w_100" : "readMore_wrap mob_w_100"}>
              <p>
              Whenever TELMO does something, we do not only put our best effort in doing it at an acceptable level, but we consider it with our utmost excellence. We only accept, and deal, with one type of quality; the excellent quality. We distinct ourselves through providing excellent service and products, accompanied with all of the care we can provide to our entrusting clients.
              </p>
              <button onClick={() => setShowMore(!showMore)}> {showMore ? "Show Less" : "Show More"} <img src={ReadMore} alt="ReadMore" /></button>
            </div>
          </div>
        </Row>
      </div>
    </div>
  )
}

export default Excellence;