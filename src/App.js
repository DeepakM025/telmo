import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home";
import OurMission from "./pages/ourmission";
import About from "./pages/about";
import SignIn from "./pages/signin";
import OurValues from "./pages/ourvalues";
import OurConfections from "./pages/ourconfections";
import ForgetPassword from "./pages/forgetpassword";
import ResetPassword from "./pages/resetpassword";
import SignUp from "./pages/signup";
import Passion from "./pages/passion";
import Creativity from "./pages/creativity";
import Excellence from "./pages/excellence";
import HowWeWork from "./pages/howwework";
import WhatWeOffer from "./pages/whatweoffer";
import GetInTouch from "./pages/getintouch";
import ProductList from "./pages/productlist";
import ComingSoon from "./pages/comingsoon";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/passion" element={<Passion />} />
          <Route exact path="/creativity" element={<Creativity />} />
          <Route exact path="/excellence" element={<Excellence />} />
          <Route exact path="/howwework" element={<HowWeWork />} />
          <Route exact path="/whatweoffer" element={<WhatWeOffer />} />
          <Route exact path="/getintouch" element={<GetInTouch />} />
          <Route exact path="/forgetpassword" element={<ForgetPassword />} />
          <Route exact path="/resetpassword" element={<ResetPassword />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/ourmission" element={<OurMission />} />
          <Route exact path="/ourvalues" element={<OurValues />} />
          <Route exact path="/ourconfections" element={<OurConfections />} />
          <Route exact path="/productlist" element={<ProductList />} />
          <Route exact path="/comingsoon" element={<ComingSoon />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
