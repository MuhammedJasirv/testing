import React, { useState } from "react";
import Link from "next/link";
import about1 from "/public/images/about/about_image_9.webp";
import about2 from "/public/images/about/about_image_11.webp";
import about3 from "/public/images/about/about_image_10.webp";
import ModalVideo from "react-modal-video";
import Image from "next/image";

const About = (props) => {
  const [isOpen, setOpen] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="about_section section_space">
      <div className="container">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-lg-6">
            <div className="about_image_1">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "8856 / 3928", // or roughly 4.6 if needed
                  overflow: "hidden",
                }}
              >
                <Image
                  src={'https://cdn.mos.cms.futurecdn.net/PKHPHDsfUqomzoCi8VwegK.jpg'}
                  alt="Techco - About"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <Image
                src={about2}
                data-parallax='{"y" : 80, "smoothness": 6}'
                alt="Techco - About"
              />
              <Image
                src={about3}
                data-parallax='{"y" : -80, "smoothness": 6}'
                alt="Techco - About"
              />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about_content">
              <div className="heading_block">
                {/* <div className="heading_focus_text">
                                    We are 😃
                                    <span className="badge bg-secondary text-white">Techco</span>
                                </div> */}
                <h2 className="heading_text">
                  A Complete Digital Experience For Growth & Engagement
                </h2>
                <p className="heading_description mb-0">
                  At Nexus Ventures LLC, we deliver smart solutions for
                  learners, marketers, and creators. From education to promotion
                  to Platform — we’ve got you covered.
                </p>
              </div>
              <ul className="icon_list unordered_list_block mb-5">
                <li>
                  <span className="icon_list_icon">
                    <i className="fa-solid fa-circle fa-fw"></i>
                  </span>
                  <span className="icon_list_text">Education</span>
                </li>
                <li>
                  <span className="icon_list_icon">
                    <i className="fa-solid fa-circle fa-fw"></i>
                  </span>
                  <span className="icon_list_text">Marketing.</span>
                </li>
                <li>
                  <span className="icon_list_icon">
                    <i className="fa-solid fa-circle fa-fw"></i>
                  </span>
                  <span className="icon_list_text">Video Platform.</span>
                </li>
              </ul>
              <ul className="btns_group unordered_list p-0 justify-content-start">
                <li>
                  <Link onClick={ClickHandler} href="/" className="btn">
                    <span className="btn_label" data-text="Get Started">
                      Get Started
                    </span>
                    <span className="btn_icon">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                  </Link>
                </li>
                <li>
                  <button className="video_btn" onClick={() => setOpen(true)}>
                    <span className="btn_icon">
                      <i className="fa-solid fa-play"></i>
                    </span>
                    <span className="btn_label">How We Works</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        // videoId="7e90gBu4pas"
        onClose={() => setOpen(false)}
      />
    </section>
  );
};

export default About;
