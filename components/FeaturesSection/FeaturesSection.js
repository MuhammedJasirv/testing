import React from "react";
import PartnerSection from "../PartnerSection";
import CountUp from "react-countup";
import sIcon1 from "/public/images/icons/icon_head.svg";
import sIcon2 from "/public/images/icons/icon_check.svg";
import sIcon3 from "/public/images/icons/icon_like.svg";
import sIcon4 from "/public/images/icons/icon_dart_board.svg";
import fimg from "/public/images/about/about_image_1.webp";
import Image from "next/image";

const FunFact = [
  {
    title: "25",
    subTitle: "Years of experience",
    symbol: "+",
    icon: sIcon1,
  },
  {
    title: "280",
    subTitle: "Success Stories",
    symbol: "+",
    icon: sIcon2,
  },
  {
    title: "5.6",
    subTitle: "Companies Trust Us",
    symbol: "K+",
    icon: sIcon3,
  },
  {
    title: "100",
    subTitle: "Results Guaranteed",
    symbol: "%",
    icon: sIcon4,
  },
];

const FeaturesSection = (props) => {
  return (
    <section
      className="client_logo_section section_space"
      style={{ backgroundImage: `url(${"/images/shapes/bg_pattern_1.svg"})` }}
    >
      <div className="container">
        {/*  */}

        <div className="row funfact_wrapper">
          <div className="col-lg-8">
            <div className="row">
              {FunFact.map((funfact, fitem) => (
                <div className="col-md-6" key={fitem}>
                  <div className="funfact_block">
                    <div className="funfact_icon">
                      <Image src={funfact.icon} alt="Techco - SVG Icon Head" />
                    </div>
                    <div className="funfact_content">
                      <div className="counter_value">
                        <span className="odometer" data-count="25">
                          <CountUp end={funfact.title} enableScrollSpy />
                        </span>
                        <span>{funfact.symbol}</span>
                      </div>
                      <h3 className="funfact_title mb-0">{funfact.subTitle}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="our_world_employees">
              <div
                className="image_wrap"
                style={{
                  width: "100%",
                  maxWidth: "500px", // or any smaller limit like 600px
                  height:'618px',
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={
                    "https://cs4.pikabu.ru/post_img/2016/01/04/5/145188744480777441.jpg"
                  }
                  alt="Techco - Employees Guoup"
                  fill
                    style={{ objectFit: "cover" }}
                />
              </div>
              <div className="content_wrap">
                <h3 className="title_text mb-0">
                  <b className="d-block">12000+</b> students in 30 countries
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
