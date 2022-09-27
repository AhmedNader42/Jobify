import main from "../assets/images/main.svg";
import React from "react";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span> tracking</span> app
          </h1>
          <p>
            I'm baby deep v VHS bitters blue bottle pok pok JOMO cardigan lo-fi.
            Offal skateboard occupy succulents. Tote bag tacos disrupt banjo
            chambray, gastropub paleo blog crucifix master cleanse swag. Tacos
            wayfarers selfies, fingerstache ethical hashtag organic mukbang
            church-key glossier cray stumptown wolf. Adaptogen truffaut lomo
            normcore. Green juice tofu affogato before they sold out poke tonx
            try-hard blue bottle gochujang offal.
          </p>
          <button className="btn btn-hero"> Login/Register </button>
        </div>
        <img src={main} alt="job hunt" className="img main-img"></img>
      </div>
    </Wrapper>
  );
};

export default Landing;
