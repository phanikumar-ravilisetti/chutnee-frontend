import WhatWeOffer from "../WhatWeOffer/WhatWeOffer";

import "./ChutneeAbout.css";

const ChutneeAbout = () => {
  return (
    <div className="about-container-main">
        <div className="about-container">
        <img className="flower-parrtern" src="https://res.cloudinary.com/dasuvkmgv/image/upload/v1763382793/Vector_ojt2a3.png" />
        <div className="where-tredition-container-main">
            <div className="where-tredition-container">
        <h1 className="where-tredition-heading">WHERE TREDITION MEETS INNOVATION IN EVERY BYTE.</h1>
        <p className="where-tredition-para">
Founded by a passionate husband-and-wife duo, Chutnée is London's go-to for a bold and refreshing twist on South Asian street food. Our dishes are crafted from cherished family recipes using hand-picked ingredients, blending authentic flavours with Western finesse.
From signature chaii to inventive plates paired with our vibrant chutneys, every bite is made to surprise and comfort. More than a café, our House of Chaii is an experience-where rich teas, soulful food, and fusion delights bring the warmth of home to every dish</p>   
<button className="view-about-btn">VIEW ABOUT US <span className="span-arrows">{">"}</span></button>
</div>
<div className="greenlogo-star-image-container">
    <img className="green-logo-star" src="https://res.cloudinary.com/dasuvkmgv/image/upload/v1763382808/Group_1171275302_jcvmki.png"/>
    <img className="green-logo-star star-image" src="https://res.cloudinary.com/dasuvkmgv/image/upload/v1763382817/Vector_1_ayk7gh.png"/>
</div>
</div>
<img className="star-pattern" src="https://res.cloudinary.com/dasuvkmgv/image/upload/v1763386280/Vector_2_liymse.png" />
</div>
<WhatWeOffer />
</div>
  );
};

export default ChutneeAbout;




