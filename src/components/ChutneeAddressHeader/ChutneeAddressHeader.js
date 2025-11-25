import "./ChutneeAddressHeader.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaInstagram, FaTiktok } from "react-icons/fa";
import { RiSnapchatLine } from "react-icons/ri";

const ChutneeAddressHeader = () => {
  return (
    <div className="header-container">
      <div className="header-container-two">
      <div className="header-left">
        <FaMapMarkerAlt className="icon" />
        <span className="address-text">124 THE BROADWAY, SOUTHALL, LONDON, UB1 1QF</span>
        <FaPhoneAlt className="icon phone" />
        <span className="address-text">02085711688</span>
      </div>

      <div className="header-right">
        <RiSnapchatLine className="icon" />
        <FaInstagram className="icon" />
        <FaTiktok className="icon" />
      </div>
    </div>
    </div>
  );
};

export default ChutneeAddressHeader;
