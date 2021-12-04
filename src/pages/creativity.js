import React, {useState} from 'react';
import Header from "../components/header";
import CreativityIcon from "../assets/images/creativity.svg";
import ReadMore from "../assets/images/readMore.svg";
import { Row } from "react-bootstrap";

function Creativity() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div>
      <Header />
      <div className="value_detail_wrap creativity_bg">
        <Row className="h-100 align-items-center mob_align_unset">
          <div className="value_left mob_w_100">
            <div className="text-center">
              <img src={CreativityIcon} alt="CreativityIcon" />
              <h2>Creativity</h2>
            </div>
          </div>
          <div className="value_right mob_w_100">
            <div className={showMore ? "readMore_wrap active mob_w_100" : "readMore_wrap mob_w_100"}>
              <p>
              Creativity is a core value at TELMO. We are certain that it should be embraced at every level, and in every taken action. At TELMO, Creativity doesn’t only come in when we want to solve an issue, or look into a new service. It helps us to challenge ourselves on a daily basis, to see what can be improved, and it drives us for “impossible” goals.
              </p>
              <button onClick={() => setShowMore(!showMore)}> {showMore ? "Show Less" : "Show More"} <img src={ReadMore} alt="ReadMore" /></button>
            </div>
          </div>
        </Row>
      </div>
    </div>
  )
}

export default Creativity;