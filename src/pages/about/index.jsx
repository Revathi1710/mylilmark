import React, { useEffect } from "react";

import "../../assets/css/main.scss";
import banner from "../../assets/images/about/aboutUs.png";
import aboutm from "../../assets/images/about/aboutm.png";
import aboutT from "../../assets/images/about/aboutT.png";
import ourStory from "../../assets/images/about/ourStory.jpg";
import vision from "../../assets/images/about/vision.png";
import mission from "../../assets/images/about/mission.png";
import edge1 from "../../assets/images/about/edge1.png";
import edge2 from "../../assets/images/about/edge2.png";
import visionImg from "../../assets/images/about/vission.jpg";
import missionImg from "../../assets/images/about/mission.jpg";
import BackgroundHeader from "../../components/BackgroundHeader";
import Social from "../../components/Social";

import ponmurugan from "../../assets/images/about/md.png";
import saravanakumaran from "../../assets/images/about/chairman.png";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="about_us_main_wrapper">
      <Social />
      <div className="about_banner_wrapper">
        <img src={banner} className="aboutimagedesk" lt="banner" />
        <img src={aboutT} className="aboutimagetab"alt="banner" />
        <img src={aboutm} className="aboutimagemobile" alt="banner" />
       
        
      </div>
      <div className="our_story_wrapper">
        <div className="sub-head">
          <BackgroundHeader
            heading={
              <p className="sub-head-title">
                <span style={{ color: "rgb(249, 147, 27)", fontSize: "6rem" }}>
                  Our
                </span>{" "}
                Story{" "}
              </p>
            }
            background={"Welcome"}
          />
        </div>
        <div className="about">
          <img src={ourStory} alt="about" />
          <p className="content">
            {" "}
            <b>M. Vanniarajan & Sons</b>, now known as Mayil Mark in Coimbatore,
            is a prominent manufacturer of emmer wheat brokens managed by three
            brothers. Supporting over 150 families through Ponmurugan Dhall
            Mills in Sulur, our company has a production capacity of over 60
            tons per day.
            <br />
            <br />
            <b>Mr. V. Chandrasekar</b> pioneered the production of samba ravai
            and established the company as a direct walk-in store, promoting
            direct trade and transparent pricing.{" "}
            <b>Mr. V.V. Balasubramanian</b> expanded market reach and enhanced
            production with advanced machinery and automated cleaning
            technologies. <b>Mr. V. Senthil Kumar</b> diversified the product
            line, set FMCG standards, and implemented Tetra Pak packaging.
            Additionally, our company invested in wind turbines to reduce
            operational costs.
          </p>
        </div>
        <div className="vision_mission_wrapper">
          <img src={edge2} alt="edge" className="right_edge" />
          <div className="visionmissionContainer">
            <div className="vision_wrapper">
              <div className="vision">
                <BackgroundHeader
                  heading={
                    <p>
                      <span style={{ color: "rgb(249, 147, 27)" }}>Our </span>
                      Vision{" "}
                    </p>
                  }
                  background={"Goal"}
                />
                <img src={vision} alt="vision" />
              </div>
              <img src={edge1} alt="edge" className="left_edge" />
              <div className="content">
                <p>
                  "To spearhead a transformative era in the food industry
                  through the development of innovative and health-conscious
                  products tailored to meet the preferences of contemporary
                  consumers, thereby reshaping the perception of nutritious
                  dining on a global scale"
                </p>
                {/* <img src={visionImg} alt="visionImg" className="visionImg" /> */}
              </div>
            </div>
            <div className="mission_wrapper">
              <div className="mission">
                <BackgroundHeader
                  heading={
                    <p>
                      <span style={{ color: "rgb(249, 147, 27)" }}>Our </span>
                      Mission{" "}
                    </p>
                  }
                  background={"Agenda"}
                />
                <img src={mission} alt="vision" />
              </div>
              <img src={edge1} alt="edge" className="left_edge" />
              <div className="content">
                <p>
                  "Our mission is to lead the food industry by offering the
                  healthiest food options and serving as a one-stop destination
                  for noodles, pastas, and more. We strive to be the premier
                  provider of holistic food solutions, catering to schools,
                  institutions, toiletries, FMCG products, Tetra packs, and
                  global markets, all while promoting well-being and meeting
                  evolving dietary preferences worldwide."
                </p>
                {/* <img src={missionImg} alt="misionImage" className="misionImg" /> */}
              </div>
            </div>
          </div>
          <div className="values_wrapper">
            <div className="sub-head-values">
              <BackgroundHeader
                heading={
                  <p>
                    <span style={{ color: "rgb(249, 147, 27)" }}>Our </span>
                    Values{" "}
                  </p>
                }
                background={"Standards"}
              />
            </div>
            {/* <h2>Values</h2> */}
            <div>
              <h3>Innovation: </h3>
              <p>
                We lead in crafting healthier food options for the new
                generation.
              </p>
            </div>
            <div>
              <h3>Quality:</h3>
              <p>
                Our dedication to excellence starts with sourcing the finest
                ingredients and maintaining strict quality controls.
              </p>
            </div>
            <div>
              <h3>Health and Wellness:</h3>
              <p>
                Our products promote balanced lifestyles and overall health.
              </p>
            </div>
            <div>
              <h3> Customer-Centricity:</h3>
              <p>
                We excel in meeting diverse customer needs with versatile
                products and exceptional service.
              </p>
            </div>
            <div>
              <h3>Sustainability:</h3>
              <p>
                We actively reduce our ecological impact for a healthier planet.
              </p>
            </div>
            <div>
              <h3>Collaboration:</h3>
              <p>We forge strong partnerships for mutual growth and success.</p>
            </div>{" "}
            <div>
              <h3>Integrity:</h3>
              <p>We uphold unwavering ethical standards in all operations.</p>
            </div>{" "}
          </div>
        </div>
      </div>
      <div className="our_team_wrapper">
        <img src={edge1} alt="edge" className="right_edge" />
        <img src={edge2} alt="edge" className="left_edge" />
        <div className="sub-head">
          <BackgroundHeader
            heading={
              <p className="sub-head-title">
                <span style={{ color: "rgb(249, 147, 27)" }}>Our</span> Team{" "}
              </p>
            }
            background={"workforce"}
          />
        </div>
        <div className="team">
          <div className="member">
            <img src={ponmurugan} alt={"ponmurugan"} className="pic" />
            <p className="name">Mr. Chandrasekar</p>
            <p className="role">Chairman</p>
          </div>
          <div className="member">
            <img src={ponmurugan} alt={"ponmurugan"} className="pic" />
            <p className="name">Mr. Senthil kumar</p>
            <p className="role">Chairman</p>
          </div>
          <div className="member">
            <img src={ponmurugan} alt={"ponmurugan"} className="pic" />
            <p className="name">Mr. Balasubramaniam</p>
            <p className="role">Chairman</p>
          </div>
        </div>
        <div className="team">
          <div className="member">
            <img src={saravanakumaran} alt={"ponmurugan"} className="pic" />
            <p className="name">Mr. Ponmurugan</p>
            <p className="role">Managing Director</p>
          </div>
          <div className="member">
            <img src={saravanakumaran} alt={"ponmurugan"} className="pic" />
            <p className="name">Mr. Saravana Kumaran</p>
            <p className="role">Managing Director</p>
          </div>
          <div className="member">
            <img src={saravanakumaran} alt={"ponmurugan"} className="pic" />
            <p className="name">Mr. Pon Hari Pranesh</p>
            <p className="role">Managing Director</p>
          </div>
          <div className="member">
            <img src={saravanakumaran} alt={"ponmurugan"} className="pic" />
            <p className="name">Mr. P.M Sathyan</p>
            <p className="role">Managing Director</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
