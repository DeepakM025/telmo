import React, {useState} from 'react';
import Header from "../components/header";
import PassionIcon from "../assets/images/passion.svg";
import ReadMore from "../assets/images/readMore.svg";
import { Row } from "react-bootstrap";

function Passion() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div>
      <Header />
      <div className="value_detail_wrap passion_bg">
        <Row className="h-100 align-items-center mob_align_unset">
          <div className="value_left mob_w_100">
            <div className="text-center">
              <img src={PassionIcon} alt="PassionIcon" />
              <h2>Passion</h2>
            </div>
          </div>
          <div className="value_right mob_w_100">
            <div className={showMore ? "readMore_wrap active mob_w_100" : "readMore_wrap mob_w_100"}>
              <p>
              At TELMO, we do what we do with passion, or we don’t do them at all. Passion is what drives TELMO; without it, we wouldn’t be able to push ourselves over the limit, and provide a constantly improving array of services.
              </p>
              <button onClick={() => setShowMore(!showMore)}> {showMore ? "Show Less" : "Show More"} <img src={ReadMore} alt="ReadMore" /></button>
            </div>
          </div>
        </Row>
      </div>
    </div>
  )
}

export default Passion;