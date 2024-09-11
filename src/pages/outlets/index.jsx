import React, { useEffect } from "react";
import banner from "../../assets/images/outletsBanner.png";

import chennaiOutlet from "../../assets/images/outlets/chenai1.jpg";
import bangaloreOutlet from "../../assets/images/outlets/bangalore.jpg";
import theni from "../../assets/images/outlets/theni.jfif";
import dindugal from "../../assets/images/outlets/dindugal.jpg";
import karaikuudi from "../../assets/images/outlets/karaikuudi.jpg";
import erode from "../../assets/images/outlets/erode.png";
import pondy from "../../assets/images/outlets/pondy.jpg";
import palakkad from "../../assets/images/outlets/palakkad.jpg";
import canada from "../../assets/images/outlets/canada.jpg";
import abudhabi from "../../assets/images/outlets/abudhabi.jpg";
import dubai from "../../assets/images/outlets/dubai.jpg";
import qataar from "../../assets/images/outlets/qataar.jpg";
import edge from "../../assets/images/about/edge2.png";

import canadaOutlet from "../../assets/images/canadaOutlet.jpg";
import thiruthuraiOutlet from "../../assets/images/outlet.jpg";

import BackgroundHeader from "../../components/BackgroundHeader";
import Social from "../../components/Social";

const Outlets = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="outlets_main_wrapper">
      <Social />
      <div className="outlets_banner_wrapper">
        <img src={banner} alt="banner" />
      </div>
      <div className="header_div">
        <div className="sub-head" style={{ marginTop: "10px" }}>
          <BackgroundHeader
            heading={
              <p className="sub-head-title">
                <span style={{ color: "rgb(249, 147, 27)" }}>Outlets</span>{" "}
              </p>
            }
            background={"Storefronts"}
          />
        </div>
        <p className="content">
          {" "}
          Our Ponmurugan Dhall Mills, located at No. 118, Trichy Main Road,
          Kannampalayam P.O, Sulur Via, Coimbatore-641405, Tamil Nadu, India,
          spans 35,000 sq.ft. and meets international standards.Furthermore, we
          have established additional plants in Chennai, Bangalore, and Canada.
          <br />
          <br />
          Our fully automated unit adheres to food safety and quality norms,
          with a lab conducting batchwise tests every 30 minutes under expert
          supervision. Employees are trained in hygiene, forbidden from bringing
          outside materials into the factory, and provided with gloves and
          clothing. <br />
          <br />
          We offer staff free hostel accommodations and ample meals, fostering
          mutual care. Our unique production process involves each item being
          expertly managed by a team of highly skilled technicians.
        </p>
      </div>
      <div className="outlet outlet-1">
        <img src={edge} alt="edge" className="left_edge" />
        <div>
          <h1>
            1. <span style={{ color: "rgb(249, 147, 27)" }}>Chennai</span>{" "}
          </h1>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248756.1313124957!2d80.04419786389734!3d13.047473316027858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1718903919408!5m2!1sen!2sin"
            width="600"
            height="300"
            style={{ style: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="outlet-img">
          <img src={chennaiOutlet} alt="chennaiOutlet" />
        </div>
      </div>

      <div className="outlet outlet-2">
        <div className="outlet-img">
          <img src={bangaloreOutlet} alt="bangaloreOutlet" />
        </div>
        <div>
          <h1>
            2. <span style={{ color: "rgb(249, 147, 27)" }}>Bangalore</span>{" "}
          </h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.90089963883!2d77.46612560633159!3d12.95394561380628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1718904142694!5m2!1sen!2sin"
            width="600"
            height="300"
            style={{ style: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="outlet outlet-1">
        <img src={edge} alt="edge" className="left_edge" />
        <div>
          <h1>
            3. <span style={{ color: "rgb(249, 147, 27)" }}>Theni</span>{" "}
          </h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62864.17214527446!2d77.42217158053936!3d10.015969412965042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b071353e94a7877%3A0x962bf8fd53981722!2sTheni%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1718904167379!5m2!1sen!2sin"
            width="600"
            height="300"
            style={{ style: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="outlet-img">
          <img src={theni} alt="" />
        </div>
      </div>

      <div className="outlet outlet-2">
        <div className="outlet-img">
          <img src={dindugal} alt="" />
        </div>
        <div>
          <h1>
            4. <span style={{ color: "rgb(249, 147, 27)" }}>Dindugal</span>{" "}
          </h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15698.974173090774!2d77.9591581433062!3d10.362379036195385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00aa57a54881e3%3A0x765a14068982e6e7!2sDindigul%2C%20Tamil%20Nadu%20624001!5e0!3m2!1sen!2sin!4v1718904252897!5m2!1sen!2sin"
            width="600"
            height="300"
            style={{ style: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="outlet outlet-1">
        <img src={edge} alt="edge" className="left_edge" />
        <div>
          <h1>
            5. <span style={{ color: "rgb(249, 147, 27)" }}>Karaikudi</span>{" "}
          </h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31426.881726713655!2d78.76115448797927!3d10.069541862507803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b005d8b08de4f3b%3A0x1f24fc0ab84584f8!2sKaraikudi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1718904293108!5m2!1sen!2sin"
            width="600"
            height="300"
            style={{ style: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="outlet-img">
          <img src={karaikuudi} alt="chennaiOutlet" />
        </div>
      </div>
      <div className="outlet outlet-2">
        <div className="outlet-img">
          <img src={erode} alt="bangaloreOutlet" />
        </div>
        <div>
          <h1>
            6. <span style={{ color: "rgb(249, 147, 27)" }}>Erode</span>{" "}
          </h1>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62589.38990474542!2d77.67419703581277!3d11.346623292611627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f46762f4671%3A0xd97da6e3d9c7f75e!2sErode%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1718904328376!5m2!1sen!2sin"
            width="600"
            height="300"
            style={{ style: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="outlet outlet-1">
        <img src={edge} alt="edge" className="left_edge" />
        <div>
          <h1>
            7. <span style={{ color: "rgb(249, 147, 27)" }}>Pondicherry</span>{" "}
          </h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62456.81866434522!2d79.77232813835684!3d11.936292302579888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5361ab8e49cfcf%3A0xcc6bd326d2f0b04e!2sPuducherry!5e0!3m2!1sen!2sin!4v1718904383567!5m2!1sen!2sin"
            width="600"
            height="300"
            style={{ style: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="outlet-img">
          <img src={pondy} alt="" />
        </div>
      </div>
      <div className="outlet outlet-2">
        <div className="outlet-img">
          <img src={palakkad} alt="" />
        </div>
        <div>
          <h1>
            8. <span style={{ color: "rgb(249, 147, 27)" }}>Palakkad</span>{" "}
          </h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62708.83233527213!2d76.61270738352054!3d10.788164376348913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba86dfa087d31ad%3A0xf542d6eb7a870a56!2sPalakkad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1718904412728!5m2!1sen!2sin"
            width="600"
            height="300"
            style={{ style: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="outlet outlet-1">
        <img src={edge} alt="edge" className="left_edge" />
        <div>
          <h1>
            9. <span style={{ color: "rgb(249, 147, 27)" }}>Canada</span>{" "}
          </h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43039126.26384524!2d-135.54890800726338!3d48.821973298866006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0d03d337cc6ad9%3A0x9968b72aa2438fa5!2sCanada!5e0!3m2!1sen!2sin!4v1718904444060!5m2!1sen!2sin"
            width="600"
            height="300"
            style={{ style: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="outlet-img">
          <img src={canada} alt="chennaiOutlet" />
        </div>
      </div>
      <div className="outlet outlet-2">
        <div className="outlet-img">
          <img src={abudhabi} alt="bangaloreOutlet" />
        </div>
        <div>
          <h1>
            10. <span style={{ color: "rgb(249, 147, 27)" }}>Abudhabi</span>{" "}
          </h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d465132.9733149033!2d54.228959503612664!3d24.386473905984648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e440f723ef2b9%3A0xc7cc2e9341971108!2sAbu%20Dhabi%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1718904470476!5m2!1sen!2sin"
            width="600"
            height="300"
            style={{ style: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="outlet outlet-1">
        <img src={edge} alt="edge" className="left_edge" />
        <div>
          <h1>
            11. <span style={{ color: "rgb(249, 147, 27)" }}>Dubai</span>{" "}
          </h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462563.0327273587!2d54.89782744162193!3d25.07565839271337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1718904520725!5m2!1sen!2sin"
            width="600"
            height="300"
            style={{ style: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="outlet-img">
          <img src={dubai} alt="" />
        </div>
      </div>
      <div className="outlet outlet-2">
        <div className="outlet-img">
          <img src={qataar} alt="" />
        </div>
        <div>
          <h1>
            12. <span style={{ color: "rgb(249, 147, 27)" }}>Qatar</span>{" "}
          </h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1846265.1887575164!2d50.26447185536695!3d25.338227429804906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534ffdce87f%3A0x1cfa88cf812b4032!2sQatar!5e0!3m2!1sen!2sin!4v1718904548393!5m2!1sen!2sin"
            width="600"
            height="300"
            style={{ style: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Outlets;
