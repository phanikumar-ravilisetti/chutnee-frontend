import ChutneeHomeHeader from "../ChutneeHomeHeader/ChutneeHomeHeader";
import ChutneeAddressHeader from "../ChutneeAddressHeader/ChutneeAddressHeader";


import "./ChutneeHome.css";

const ChutneeHome = () => {
  return (
    <div className="background-container">
      <ChutneeAddressHeader />
      <ChutneeHomeHeader />
      <div className="welcome-text-container-main">
        <div className="welcome-text-container">
        <h1 className="welcome-heading">WELCOME TO CHUTNEE</h1>
        <button className="view-btn">VIEW MENU <span className="span-arrows">{">"}</span></button>
        <button className="book-btn">BOOK A TABLE <span className="span-arrows">{">"}</span></button>
      </div>
      </div>
    </div>
  )
};

export default ChutneeHome;
