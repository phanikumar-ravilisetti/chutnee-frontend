import "./ChutneeHomeHeader.css";

const ChutneeHomeHeader = () => {
  return (
    <div className="main-header">
      <div className="logo-section">
        <img src="https://res.cloudinary.com/dasuvkmgv/image/upload/v1763119556/Chutnee-logo-2-2048x1310_1_t2bizr.png" 
        className="logo-circle" />
        <img src="https://res.cloudinary.com/dasuvkmgv/image/upload/v1763119562/Chutnee-logo-2-2048x1310_2_j0e9p9.png" className="logo-text" />
      </div>
      <div className="header-right-section">
      <nav className="nav-links">
        <a href="">OUR STORY</a>
        <a href="">MENU</a>
        <a href="">AFTERNOON TEA</a>
        <a href="">EVENTS</a>
        <a href="">CHUTNEE FAMILY</a>
        <a href="">CONTACT</a>
      </nav>
        <button className="reservation-btn">RESERVATION <span className="span-arrow">{">"}</span></button>
      </div>
    </div>
  );
};

export default ChutneeHomeHeader;
