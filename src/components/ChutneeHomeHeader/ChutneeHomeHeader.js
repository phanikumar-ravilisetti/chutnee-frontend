import "./ChutneeHomeHeader.css";

const ChutneeHomeHeader = () => {
  return (
    <div className="main-header">
      <div className="logo-section">
        <img  alt="" src="https://res.cloudinary.com/dasuvkmgv/image/upload/v1763119556/Chutnee-logo-2-2048x1310_1_t2bizr.png" 
        className="logo-circle" />
        <img alt="" src="https://res.cloudinary.com/dasuvkmgv/image/upload/v1763119562/Chutnee-logo-2-2048x1310_2_j0e9p9.png" className="logo-text" />
      </div>
      <div className="header-right-section">
      <nav className="nav-links">
        <button className="anchor-buttons" type="button">OUR STORY</button>
        <button className="anchor-buttons" type="button">MENU</button>
        <button className="anchor-buttons" type="button">AFTERNOON TEA</button>
        <button className="anchor-buttons" type="button">EVENTS</button>
        <button className="anchor-buttons" type="button">CHUTNEE FAMILY</button>
        <button className="anchor-buttons" type="button">CONTACT</button>
      </nav>
        <button className="reservation-btn">RESERVATION <span className="span-arrow">{">"}</span></button>
      </div>
    </div>
  );
};

export default ChutneeHomeHeader;
