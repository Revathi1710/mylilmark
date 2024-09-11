import React, { useEffect, useRef } from "react";

import banner from "../../assets/images/products/productBanner.png";
import Mobilebanner from "../../assets/images/products/productBannermob.png";
import tabBanner from "../../assets/images/products/productBannertab.png";
import gramFlour from "../../assets/images/home/gram_flour.png";
import multiGrain from "../../assets/images/home/multi_grain1.png";
import ravai from "../../assets/images/home/ravai.png";
import rava from "../../assets/images/products/rava.png";
import halfBrokenWheat from "../../assets/images/products/Half_broken_cracked_wheat_rava.png";

import multigrainatta from "../../assets/images/products/multigrainAtta.png";
import ragi from "../../assets/images/products/RAGI-FLOUR.png";
// import wheatparotta from "../../assets/images/products/WHEAT-PAROTTA.png";
import urad from "../../assets/images/home/urad.png";
import atta from "../../assets/images/home/atta.png";
// import flourbg from "../../assets/images/products/flourbg.png ";
import vermicellibg from "../../assets/images/products/vermicelliBack.png";
import milletsbg from "../../assets/images/products/milletsbg.png";
import instantbg from "../../assets/images/products/instantbg.png";
import pulsesbg from "../../assets/images/products/pulsesbg.png";
import edge1 from "../../assets/images/about/edge1.png";
import edge2 from "../../assets/images/about/edge2.png";
import multiGrainVermi from "../../assets/images/products/vermicelli/MULTI-GRAIN.png";
import pearl from "../../assets/images/products/vermicelli/pearl.png";
import puthinaVermi from "../../assets/images/products/vermicelli/puthinaVermi.png";
import ragiVermi from "../../assets/images/products/vermicelli/ragiVermi.png";
import sambaWheat from "../../assets/images/products/vermicelli/SAMBHA-WHEAT.png";

import foxtail from "../../assets/images/products/vermicelli/foxtail.png";
import milletsVermicelli from "../../assets/images/products/vermicelli/Millets_Vermicelli.png";

import FoxtailMilletVermicelli from "../../assets/images/products/vermicelli/FoxtailMilletVermicelli.png";
import LittleMilletVermicelli from "../../assets/images/products/vermicelli/LittleMilletVermicelli.png";

import vermicelli from "../../assets/images/products/vermicelli/vermicelli.png";
import wheatGarlic from "../../assets/images/products/vermicelli/WHEAT-GARLIC.png";
import whaetTomato from "../../assets/images/products/vermicelli/WHEAT-TOMATO.png";
import barnyardRice from "../../assets/images/products/millets/barnyardRice.png";

import foxtileMillet from "../../assets/images/products/millets/foxtileMillet.png";
import kodoMillet from "../../assets/images/products/millets/kodoMillet.png";
import littleMillet from "../../assets/images/products/millets/littleMillet.png";
import pearlMillet from "../../assets/images/products/millets/pearlMillet.png";
import pearlMilletRice from "../../assets/images/products/millets/pearlMilletRice.png";
import fingerMillet from "../../assets/images/products/millets/fingerMillet.png";
import fingerMilletFlour from "../../assets/images/products/millets/Finger_Millet_Flour.png";

import appalam from "../../assets/images/products/Instant Mix/appalam.png";
import bajiBonda from "../../assets/images/products/Instant Mix/bajiBonda.png";
import BasmathiBriyaniMix from "../../assets/images/products/Instant Mix/BasmathiBriyaniMix.png";
import dosaMix from "../../assets/images/products/Instant Mix/Dosa Mix.png";
import jeeragaSambaBriyani from "../../assets/images/products/Instant Mix/Jeeraga Samba Briyani Mix.png";
import kolluSoup from "../../assets/images/products/Instant Mix/Kollu Soup.png";
import milletsMix from "../../assets/images/products/Instant Mix/Millets Mix.png";
import moringaLeaf from "../../assets/images/products/Instant Mix/moringaLeaf.png";
import murukku from "../../assets/images/products/Instant Mix/murukku.png";
import puttuPodi from "../../assets/images/products/Instant Mix/puttuPodi.png";
import RiceVenpongalMix from "../../assets/images/products/Instant Mix/Rice Venpongal Mix.png";
import sambaTamarindMix from "../../assets/images/products/Instant Mix/Samba Tamarind Mix.png";
import SambaWheatSoyaBiriyani from "../../assets/images/products/Instant Mix/Samba Wheat Soya Biriyani.png";
import sambaRiceBriyaniMix from "../../assets/images/products/Instant Mix/sambaRiceBriyaniMix.png";
import sambaWheatVen from "../../assets/images/products/Instant Mix/sambaWheatVen.png";
import friedGram from "../../assets/images/products/Pulses/friedGram.png";
import IdliRava from "../../assets/images/products/Instant Mix/IdliRava.png";
import VadaFlour from "../../assets/images/products/Instant Mix/VadaFlour.png";
import idlyPodi from "../../assets/images/products/Instant Mix/ellu_idly_podi.png";
import moringaIdly from "../../assets/images/products/Instant Mix/moringa_idly.png";
import kozhukattai_flour from "../../assets/images/products/Instant Mix/kozhukattai_flour.png";

import gramDhall from "../../assets/images/products/Pulses/gramDhall.png";
import moongDhall from "../../assets/images/products/Pulses/moongDhall.png";
import toorDhall from "../../assets/images/products/Pulses/toorDhall.png";
import whiteMochai from "../../assets/images/products/Pulses/whiteMochai.png";
import blackEyeBeans from "../../assets/images/products/Pulses/Black_Eye_Beans.png";
import horseGram from "../../assets/images/products/Pulses/Horse_Gram.png";
import uridDal from "../../assets/images/products/Pulses/Urid_Dal.png";
import BrownChickPeas from "../../assets/images/products/Pulses/Brown_Chick_Peas.png";
import redMasoor from "../../assets/images/products/Pulses/Red_Massoor_Dhall.png";
import WholeGreenPeas from "../../assets/images/products/Pulses/Whole_Green_Peas.png";
import UridDalChilka from "../../assets/images/products/Pulses/16.png";
import MungBean from "../../assets/images/products/Pulses/Mung_Bean.png";

import basmathiRice from "../../assets/images/products/rice/basmathiRice.png";
import mattaRice from "../../assets/images/products/rice/mattaRice.png";
import ponniRice from "../../assets/images/products/rice/ponniRice.png";
import ponniRiceBoiled from "../../assets/images/products/rice/ponniRiceBoiled.png";
import redRice from "../../assets/images/products/rice/redRice.png";
import blackKavuniRice from "../../assets/images/products/rice/black_kavuni_rice.png";
import bambooRice from "../../assets/images/products/rice/Bamboo_Rice.png";
import handPoundRice from "../../assets/images/products/rice/Hand_Pound_Rice.png";
import karunkuruvai from "../../assets/images/products/rice/Karunkuruvai_Rice.png";
import sambaParaboiled from "../../assets/images/products/rice/Mappillai_Samba_Parboiled.png";
import ThooyamalliRice from "../../assets/images/products/rice/Thooyamalli_Rice.png";
import SonaMasuriRice from "../../assets/images/products/rice/1.png";
import KichiliSambaRice from "../../assets/images/products/rice/Kichili_Samba_Rice.png";
import Kaatuyaanam from "../../assets/images/products/rice/Kaatuyaanam.png";

import cardamom from "../../assets/images/products/spices/cardamom.png";
import redChilliLong from "../../assets/images/products/spices/redChilliLong.png";
import redChilliRound from "../../assets/images/products/spices/redChilliRound.png";
import tamarind from "../../assets/images/products/spices/tamarind.png";
import CorianderSeed from "../../assets/images/products/spices/Coriander_Seed.png";
import meethiSeeds from "../../assets/images/products/spices/Methi_Seeds.png";
import MustardSeed from "../../assets/images/products/spices/Mustard_Seed.png";
import cuminSeeds from "../../assets/images/products/spices/cumin_seeds.png";
import ChickPeas from "../../assets/images/products/spices/Chick_Peas.png";

import sorgumSolam from "../../assets/images/products/cereal/sorgumSolam.png";
import jaggery from "../../assets/images/products/miscillaneous/jaggery.png";
import GarlicVadagam from "../../assets/images/products/miscillaneous/Garlic_Vadagam.png";
import riceStickVadagam from "../../assets/images/products/miscillaneous/Rice_Stick_Vadagam.png";
import PotatoLaysVadagam from "../../assets/images/products/miscillaneous/Potato_Lays_Vadagam.png";
import RiceMurukkuVadagam from "../../assets/images/products/miscillaneous/Rice_Murukku_Vadagam.png";
import TomatoRiceVadagam from "../../assets/images/products/miscillaneous/Tomato_Rice_Vadagam.png";
import SundaVathal from "../../assets/images/products/miscillaneous/Sunda_Vathal.png";
import jeeragaVadagam from "../../assets/images/products/miscillaneous/jeeraga_vadagam.png";

import flourbg from "../../assets/images/products/flour.png";
import ravabg from "../../assets/images/products/ravabg.png";
import spicesBg from "../../assets/images/products/spicesBg.png";
import miscereabg from "../../assets/images/products/miscereaBg.png";
import BackgroundHeader from "../../components/BackgroundHeader";
import Social from "../../components/Social";

const Products = () => {
  const biryaniRef = useRef(null);
  const flourRef = useRef(null);
  const vermicelliRef = useRef(null);
  const snacksRef = useRef(null);
  const instantRef = useRef(null);
  const milletsRef = useRef(null);
  const riceRef = useRef(null);
  const spiceRef = useRef(null);
  const cerealRef = useRef(null);
  const misceRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      const yOffset = -100;
      const y =
        ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="products_main_wrapper">
      <Social />
      <div className="product_banner_wrapper">
        <img src={banner} className="aboutimagedesk" alt="banner" />
        <img src={Mobilebanner}  className="aboutimagetab"alt="banner" />
        <img src={tabBanner} className="aboutimagemobile" alt="banner" />
      </div>

      <div className="products_wrapper">
        <div style={{ paddingBottom: "20px" }} className="sub-head">
          <BackgroundHeader
            heading={
              <p className="sub-head-title">
                <span style={{ color: "rgb(249, 147, 27)" }}>Our </span>{" "}
                Assortments
                {""}
              </p>
            }
            background={"Products"}
          />
        </div>
        <ul className="products_list">
          <li onClick={() => scrollToSection(biryaniRef)}>Rava</li>
          <li onClick={() => scrollToSection(flourRef)}>Flour</li>
          <li onClick={() => scrollToSection(vermicelliRef)}>Vermicelli</li>
          <li onClick={() => scrollToSection(snacksRef)}>Millets</li>
          <li onClick={() => scrollToSection(instantRef)}>Instant Mix</li>
          <li onClick={() => scrollToSection(milletsRef)}>Pulses</li>
          <li onClick={() => scrollToSection(riceRef)}>Rice</li>
          <li onClick={() => scrollToSection(spiceRef)}>Spices</li>
          <li onClick={() => scrollToSection(misceRef)}>Other Products</li>
        </ul>
      </div>
      <div className="rava" ref={biryaniRef}>
        <h2>
          <span style={{ color: "rgb(249, 147, 27)" }}>Rava </span>
        </h2>
        <img src={edge2} alt="edge" className="right_edge" />
        <ul>
          <img src={ravabg} alt="flourbg" className="bg" />
          <li>
            <img src={ravai} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Double</span> Roasted{" "}
              <span style={{ color: "rgb(249, 147, 27)" }}>Rava</span>
            </p>
          </li>
          <li>
            <img src={rava} alt="product" style={{ width: "165px" }}  className="highpic"/>
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Deluxe Samba</span>{" "}
              Wheat Brokens
            </p>
          </li>
          <li>
            <img src={halfBrokenWheat} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>
                Half Broken Cracked{" "}
              </span>{" "}
              Wheat Rava
            </p>
          </li>
        </ul>
      </div>
      <div className="flour" ref={flourRef}>
        <h2>
          <span style={{ color: "rgb(249, 147, 27)" }}>Flour </span>
        </h2>
        <img src={edge2} alt="edge" className="left_edge" />
        <ul>
          <img src={flourbg} alt="flourbg" className="bg" />
          <li>
            <img src={atta} alt="product" />
            <p>
              {" "}
              <span style={{ color: "rgb(249, 147, 27)" }}>Whole</span> Wheat
              Atta
            </p>
          </li>
          <li>
            <img src={multigrainatta} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Multi Grain</span>{" "}
              Atta
            </p>
          </li>
          {/* <li>
            <img src={ragi} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Finger Millet</span>{" "}
              Flour
            </p>
          </li> */}
          <li>
            <img src={gramFlour} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Gram</span> Flour
            </p>
          </li>
          {/* <li>
            <img src={wheatparotta} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Wheat</span> Parotta
            </p>
          </li> */}
        </ul>
      </div>
      <div className="vermicelli" ref={vermicelliRef}>
        <h2>
          <span style={{ color: "rgb(249, 147, 27)" }}>Vermicelli </span>{" "}
        </h2>
        <img src={edge2} alt="edge" className="right_edge" />
        <ul>
          <img src={vermicellibg} alt="flourbg" className="bg" />
          <li>
            <img src={multiGrainVermi} alt="product" />
            <p>
              {" "}
              <span style={{ color: "rgb(249, 147, 27)" }}>
                Multi Grain
              </span>{" "}
              Vermicelli
            </p>
          </li>
          <li>
            <img src={pearl} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Pearl Millet</span>{" "}
              Vermicelli
            </p>
          </li>
          <li>
            <img src={puthinaVermi} alt="product" />
            <p>
              {" "}
              <span style={{ color: "rgb(249, 147, 27)" }}>Puthina</span>{" "}
              Vermicelli
            </p>
          </li>
          <li>
            <img src={ragiVermi} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Ragi</span>{" "}
              Vermicelli
            </p>
          </li>
          <li>
            <img src={sambaWheat} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>
                Samba Whole Wheat
              </span>{" "}
              Vermicelli
            </p>
          </li>
          <li>
            <img src={vermicelli} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Vermicelli </span>{" "}
            </p>
          </li>
          <li>
            <img src={whaetTomato} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Wheat Tomato</span>{" "}
              Vermicelli
            </p>
          </li>
          <li>
            <img src={wheatGarlic} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Wheat Garlic</span>{" "}
              Vermicelli
            </p>
          </li>
          {/* <li>
            <img src={foxtail} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Foxtail Millet Vermicelli </span>{" "}
            </p>
          </li> */}
          <li>
            <img src={milletsVermicelli} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>
                Millets Vermicelli{" "}
              </span>{" "}
            </p>
          </li>
          <li>
            <img src={FoxtailMilletVermicelli} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>
                Foxtail Millet Vermicelli{" "}
              </span>{" "}
            </p>
          </li>
          <li>
            <img src={LittleMilletVermicelli} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Little Millet </span>{" "}
              Vermicelli
            </p>
          </li>
        </ul>
      </div>
      <div className="millets" ref={snacksRef}>
        <h2>
          <span style={{ color: "rgb(249, 147, 27)" }}>Millets </span>
        </h2>
        <img src={edge2} alt="edge" className="left_edge" />
        <ul>
          <img src={milletsbg} alt="flourbg" className="bg milletsbg" />
          <li>
            <img src={barnyardRice} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Barnyard</span> Rice
            </p>
          </li>
          <li>
            <img src={fingerMillet} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Finger</span> Millet
            </p>
          </li>
          <li>
            <img src={fingerMilletFlour} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Finger</span> Millet
              Flour
            </p>
          </li>

          <li>
            <img src={foxtileMillet} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Foxtail</span> Millet
            </p>
          </li>
          <li>
            <img src={kodoMillet} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Kodo</span> Millet
            </p>
          </li>
          <li>
            <img src={littleMillet} alt="product" style={{ width: "250px" }}  className="highpic1"/>
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Little </span> Millet
            </p>
          </li>
          <li>
            <img src={pearlMillet} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Pearl </span> Millet
            </p>
          </li>
          <li>
            <img src={pearlMilletRice} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Pearl</span> Millet{" "}
              <span style={{ color: "rgb(249, 147, 27)" }}>Rice</span>
            </p>
          </li>
        </ul>
      </div>
      <div className="instant_mix" ref={instantRef}>
        <h2>
          <span style={{ color: "rgb(249, 147, 27)" }}>Instant Mix</span>{" "}
        </h2>
        <img src={edge2} alt="edge" className="right_edge" />
        <ul>
          <img src={instantbg} alt="flourbg" className="bg instantbg" />
          <li>
            <img src={bajiBonda} alt="product" />
            <p>
              {" "}
              <span style={{ color: "rgb(249, 147, 27)" }}>Baji Bonda</span> Mix
            </p>
          </li>
          <li>
            <img src={BasmathiBriyaniMix} alt="product" />
            <p>
              {" "}
              <span style={{ color: "rgb(249, 147, 27)" }}>
                Basmathi Rice{" "}
              </span>{" "}
              Biriyani Mix
            </p>
          </li>
          <li>
            <img src={dosaMix} alt="product" />
            <p>
              {" "}
              <span style={{ color: "rgb(249, 147, 27)" }}>
                MultiGrain
              </span>{" "}
              Dosa Mix
            </p>
          </li>
          <li>
            <img src={jeeragaSambaBriyani} alt="product" />
            <p>
              {" "}
              <span style={{ color: "rgb(249, 147, 27)" }}>
                Jeeraga Samba
              </span>{" "}
              Rice Briyani Mix
            </p>
          </li>
          <li>
            <img src={kolluSoup} alt="product" />
            <p>
              {" "}
              <span style={{ color: "rgb(249, 147, 27)" }}>Kollu </span> Soup
            </p>
          </li>
          <li>
            <img src={milletsMix} alt="product" />
            <p>
              {" "}
              <span style={{ color: "rgb(249, 147, 27)" }}>Millet </span>{" "}
              Breakfast Porridge
            </p>
          </li>
          <li>
            <img src={moringaLeaf} alt="product" />
            <p>
              {" "}
              <span style={{ color: "rgb(249, 147, 27)" }}>
                Moringa Leaf{" "}
              </span>{" "}
              Soup powder
            </p>
          </li>
          <li>
            <img src={murukku} alt="product" />
            <p>
              {" "}
              <span style={{ color: "rgb(249, 147, 27)" }}>Murukku</span> Maavu
            </p>
          </li>
          <li>
            <img src={puttuPodi} alt="product" />
            <p>
              {" "}
              <span
                style={{
                  color: "rgb(249, 147, 27)",
                }}
              >
                Multi Grain Samba{" "}
              </span>{" "}
              Puttu Podi
            </p>
          </li>
          <li>
            <img src={RiceVenpongalMix} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>
                Rice Venpongal{" "}
              </span>{" "}
              Mix
            </p>
          </li>
          <li>
            <img src={sambaTamarindMix} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>
                Samba Wheat Tamarind{" "}
              </span>{" "}
              Meal Mix
            </p>
          </li>
          <li>
            <img src={SambaWheatSoyaBiriyani} alt="product" />
            <p>
              {" "}
              <span style={{ color: "rgb(249, 147, 27)" }}>
                Samba Wheat Soya Veg{" "}
              </span>{" "}
              Biriyani Mix
            </p>
          </li>
          <li>
            <img src={sambaRiceBriyaniMix} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Samba Rice </span>{" "}
              Biriyani Mix
            </p>
          </li>
          <li>
            <img src={sambaWheatVen} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Samba Wheat </span>{" "}
              Venpongal Mix
            </p>
          </li>
          <li>
            <img src={IdliRava} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Idl </span> Rava
            </p>
          </li>
          <li>
            <img src={VadaFlour} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Vada </span> Flour
            </p>
          </li>
          <li>
            <img src={idlyPodi} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Ellu Idly </span>{" "}
              Podi
            </p>
          </li>
          <li>
            <img src={moringaIdly} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Moringa Idly </span>{" "}
              Dosa{" "}
              <span style={{ color: "rgb(249, 147, 27)" }}>
                {" "}
                Chutney Powder{" "}
              </span>
            </p>
          </li>

          <li>
            <img src={kozhukattai_flour} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>kozhukattai </span>
              Flour
            </p>
          </li>
        </ul>
      </div>

      <div className="pulses" ref={milletsRef}>
        <h2>
          <span style={{ color: "rgb(249, 147, 27)" }}> Pulses </span>
        </h2>
        <img src={edge2} alt="edge" className="left_edge" />
        <ul>
          <img src={pulsesbg} alt="flourbg" className="bg instantbg" />
          <li>
            <img src={friedGram} alt="product" />
            <p>
              {" "}
              <span style={{ color: "rgb(249, 147, 27)" }}>Fried</span> Gram
            </p>
          </li>
          <li>
            <img src={gramDhall} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Gram</span> Dhall
            </p>
          </li>
          <li>
            <img src={moongDhall} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Mung</span> Dal
            </p>
          </li>
          <li>
            <img src={toorDhall} alt="product" />
            <p>
              {" "}
              <span style={{ color: "rgb(249, 147, 27)" }}>Toor </span> Dal
            </p>
          </li>
          <li>
            <img src={whiteMochai} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>White </span> Mochai
            </p>
          </li>
          <li>
            <img src={blackEyeBeans} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Black </span> Eye
              Beans
            </p>
          </li>
          <li>
            <img src={horseGram} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Horse </span> Gram
            </p>
          </li>
          <li>
            <img src={uridDal} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Urid </span> Dal
            </p>
          </li>
          <li>
            <img src={redMasoor} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Red </span> Massoor
              Dhall
            </p>
          </li>
          <li>
            <img src={sorgumSolam} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Sorghum </span> Solam
            </p>
          </li>

          <li>
            <img src={BrownChickPeas} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Brown </span> Chick
              Peas
            </p>
          </li>
          <li>
            <img src={ChickPeas} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Chick </span> Peas
            </p>
          </li>
          <li>
            <img src={WholeGreenPeas} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Whole </span>Green
              Peas
            </p>
          </li>
          <li>
            <img src={UridDalChilka} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Urid </span> Dal
              Chilka
            </p>
          </li>
          <li>
            <img src={MungBean} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Mung </span> Bean
            </p>
          </li>
        </ul>
      </div>
      <div className="rice" ref={riceRef}>
        <h2>
          <span style={{ color: "rgb(249, 147, 27)" }}>Rice</span>
        </h2>
        <img src={edge2} alt="edge" className="right_edge" />
        <ul>
          <img src={vermicellibg} alt="flourbg" className="bg" />
          <li>
            <img src={basmathiRice} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Basmathi</span> Rice{" "}
            </p>
          </li>
          <li>
            <img src={mattaRice} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Matta</span> Rice{" "}
            </p>
          </li>
          <li>
            <img src={ponniRice} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Ponni</span> Rice{" "}
            </p>
          </li>
          <li>
            <img src={ponniRiceBoiled} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Ponni</span> Rice{" "}
              <span style={{ color: "rgb(249, 147, 27)" }}>Boiled</span>
            </p>
          </li>
          <li>
            <img src={redRice} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Red</span> Rice{" "}
            </p>
          </li>
          <li>
            <img src={blackKavuniRice} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Black Kavuni</span>{" "}
              Rice{" "}
            </p>
          </li>
          <li>
            <img src={bambooRice} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Bamboo</span> Rice{" "}
            </p>
          </li>{" "}
          <li>
            <img src={handPoundRice} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Hand Pound</span>{" "}
              Rice{" "}
            </p>
          </li>{" "}
          <li>
            <img src={karunkuruvai} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Karunkuruvai</span>{" "}
              Rice{" "}
            </p>
          </li>{" "}
          <li>
            <img src={sambaParaboiled} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Mappillai</span>{" "}
              Samba Parboiled{" "}
            </p>
          </li>{" "}
          <li>
            <img src={ThooyamalliRice} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Thooyamalli</span>{" "}
              Rice{" "}
            </p>
          </li>
          <li>
            <img src={SonaMasuriRice} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Sona Masuri </span>{" "}
              Rice{" "}
            </p>
          </li>
          <li>
            <img src={KichiliSambaRice} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Kichili Samba </span>{" "}
              Rice{" "}
            </p>
          </li>
          <li>
            <img src={Kaatuyaanam} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Kaatuyaanam</span>{" "}
              Rice{" "}
            </p>
          </li>
        </ul>
      </div>
      <div className="spices" ref={spiceRef}>
        <h2>
          <span style={{ color: "rgb(249, 147, 27)" }}>Spices </span>
        </h2>
        <img src={edge2} alt="edge" className="left_edge" />
        <ul>
          <img src={spicesBg} alt="flourbg" className="bg instantbg" />
          <li>
            <img src={cardamom} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Cardamom</span>{" "}
            </p>
          </li>
          <li>
            <img src={redChilliLong} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Red Chilli</span>{" "}
              Long{" "}
            </p>
          </li>
          <li>
            <img src={redChilliRound} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Red Chilli</span>{" "}
              Round{" "}
            </p>
          </li>
          <li>
            <img src={tamarind} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Tamarind</span>{" "}
            </p>
          </li>
          <li>
            <img src={CorianderSeed} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Coriander </span>
              Seeds{" "}
            </p>
          </li>{" "}
          <li>
            <img src={meethiSeeds} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Methi</span> Seeds
            </p>
          </li>{" "}
          <li>
            <img src={MustardSeed} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Mustard </span> Seeds
            </p>
          </li>
          <li>
            <img src={cuminSeeds} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Cumin </span> Seeds
            </p>
          </li>
        </ul>
      </div>
      {/* <div className="cereal" ref={cerealRef}>
        <h2>
          <span style={{ color: "rgb(249, 147, 27)" }}>Cereal </span>
        </h2>
        <img src={edge2} alt="edge" className="right_edge" />

        <ul>
          <img src={miscereabg} alt="flourbg" className="bg instantbg" />
          <li>
            <img src={sorgumSolam} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Sorghum</span> Cholam{" "}
            </p>
          </li>
        </ul>
      </div> */}
      <div className="miscellaneous" ref={misceRef}>
        <h2>
          <span style={{ color: "rgb(249, 147, 27)" }}>Other Products</span>
        </h2>
        <img src={edge2} alt="edge" className="left_edge" />
        <ul>
          <li>
            <img src={jaggery} alt="product" />
            <p>
              <span style={{ color: "rgb(249, 147, 27)" }}>Jaggery</span>{" "}
            </p>
          </li>

          <li>
            <img src={appalam} alt="product" />
            <p>
              {" "}
              <span style={{ color: "rgb(249, 147, 27)" }}>Appalam </span>
            </p>
          </li>
          <li>
            <img src={GarlicVadagam} alt="product" />
            <p>
              {" "}
              <span style={{ color: "rgb(249, 147, 27)" }}>Garlic </span>Vadagam
            </p>
          </li>
          <li>
            <img src={riceStickVadagam} alt="product" />
            <p>
              {" "}
              <span style={{ color: "rgb(249, 147, 27)" }}>
                Rice Stick{" "}
              </span>{" "}
              Vadagam
            </p>
          </li>
          <li>
            <img src={PotatoLaysVadagam} alt="product" />
            <p>
              {" "}
              <span style={{ color: "rgb(249, 147, 27)" }}>
                Potato Lays
              </span>{" "}
              Vadagam
            </p>
          </li>
          <li>
            <img src={RiceMurukkuVadagam} alt="product" />
            <p>
              {" "}
              <span style={{ color: "rgb(249, 147, 27)" }}>
                Rice Murukku{" "}
              </span>{" "}
              Vadagam
            </p>
          </li>
          <li>
            <img src={TomatoRiceVadagam} alt="product" />
            <p>
              {" "}
              <span style={{ color: "rgb(249, 147, 27)" }}>
                Tomato Rice{" "}
              </span>{" "}
              Vadagam
            </p>
          </li>
          <li>
            <img src={SundaVathal} alt="product" />
            <p>
              {" "}
              <span style={{ color: "rgb(249, 147, 27)" }}>Sunda Vathal </span>
            </p>
          </li>
          <li>
            <img src={jeeragaVadagam} alt="product" />
            <p>
              {" "}
              <span style={{ color: "rgb(249, 147, 27)" }}>Jeeraga </span>
              Vadagam
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Products;
