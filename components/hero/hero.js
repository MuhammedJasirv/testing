import React from "react";
import Link from "next/link";
import heroImg from "/public/images/hero/it_solution_hero_image_1.webp";
import icon from "/public/images/icons/icon_stars_trustpilot.svg";
import avatar1 from "/public/images/avatar/avatar_1.webp";
import avatar2 from "/public/images/avatar/avatar_2.webp";
import avatar3 from "/public/images/avatar/avatar_3.webp";
import Image from "next/image";

const Hero = () => {
  const UserImg=[
    "https://smartykids.ru/wp-content/uploads/2023/05/teens-high-school-study-abroad-e1586177174717-2048x1178.jpg",
    'https://i.pinimg.com/originals/c1/b2/8e/c1b28e892453dc4e5918201a0a08caa6.jpg',
    'https://2.bp.blogspot.com/-3PaCiKGPPRw/VVInwHQQtSI/AAAAAAAAAq4/I2PKTH1XSJk/s1600/normal.jpg'
  ]
  return (
    <section className="it_solution_hero_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-7" >
            <div
              className="it_solution_hero_content"
              style={{
                backgroundImage: `url(${"/images/shapes/it_solution_hero_bg_1.svg"})`,
              }}
            >
              <div className="heading_focus_text mb-0 d-inline-flex align-items-center">👋 Hi We </div>
              <h1>Learn, Grow, and Stream – All in One App</h1>
              <p>
               A next-generation platform that seamlessly integrates education, digital marketing solutions, and a premium video streaming experience — empowering learners, educators, and businesses to thrive in the digital age.
              </p>
              <ul className="btns_group unordered_list p-0 justify-content-start">
                <li>
                  <Link className="btn" href="/">
                    <span className="btn_label" data-text="Get Started">
                      Get Started
                    </span>
                    <span className="btn_icon">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                  </Link>
                </li>
                <li>
                  <div className="review_short_info">
                    <div className="d-flex">
                      <Image src={icon} alt="Techco - Trustpilot Review" />
                      <span>4.8</span>
                    </div>
                    <div className="review_counter">
                      From <b>200+</b> reviews
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-5">
            <ul className="it_solution_hero_images unordered_list">
              {/* Main Image Block */}
              <li>
                <div
                  style={{
                    width: "100%",
                    maxWidth: "500px",
                    aspectRatio: "1 / 1",
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "10px",
                  }}
                >
                  <Image
                    src="https://smartykids.ru/wp-content/uploads/2023/05/teens-high-school-study-abroad-e1586177174717-2048x1178.jpg"
                    alt="Techco - IT Solution - Hero"
                    fill
                    style={{ objectFit: "cover", borderRadius: "10px" }}
                  />
                </div>
              </li>

              {/* Client Avatars + Counter */}
              <li>
                <div className="worldwide_clients">
                  <div className="counter_value">150+</div>
                  <p>Worldwide Country has lots of clients</p>

                  {/* Avatar Group */}
                  <ul
                    className="avatar_group unordered_list"
                    style={{
                      display: "flex",
                      gap: "8px",
                      alignItems: "center",
                    }}
                  >
                    {UserImg.map((i, index) => (
                      <li key={index}>
                        <div
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            overflow: "hidden",
                            position: "relative",
                            zIndex:'2'
                          }}
                        >
                          <Image
                            src={i}
                            alt={`Techco - Avatar ${index + 1}`}
                            fill
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                      </li>
                    ))}

                    {/* Client Count Text */}
                    <li style={{ fontWeight: "bold", fontSize: "14px",zIndex:'3' }}>
                      5k+
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <ul className="categories unordered_list_block ">

                  <li>
                    <Link href="/" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span>Education</span>
                      <i className="fa-solid fa-plus"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <i className="fa-solid fa-plus"></i>
                      <span>Marketing</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span>Video platform </span>
                      <i className="fa-solid fa-plus"></i>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <div
                  className="business_growth_content"
                  style={{
                    borderRadius: "10px",
                     borderRadius: "10px",
                    backgroundImage: `url(${"https://strategyjournal.ru/wp-content/uploads/2023/04/man-using-digital-tablet-psd-mockup-smart-technology-rawpixel-2.jpg"})`,
                  }}
                >
                  <div className="business_growth">
                    <div className="progress_content">
                      <svg
                        role="progressbar"
                        width="260"
                        height="260"
                        viewBox="0 0 100 100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        aria-valuenow="88"
                      >
                        <circle
                          cx="50%"
                          cy="50%"
                          r="42"
                          shapeRendering="geometricPrecision"
                          fill="none"
                          stroke="#f1f1f1"
                          strokeWidth="5"
                        ></circle>
                        <circle
                          cx="50%"
                          cy="50%"
                          r="42"
                          shapeRendering="geometricPrecision"
                          className="business_growth-circle-58"
                          fill="none"
                          strokeWidth="10"
                          strokeDashoffset="31.680000000000007"
                          strokeDasharray="264"
                          strokeLinecap="round"
                          style={{
                            transform: "rotate(-90deg)",
                            transformOrigin: "50% 50%",
                          }}
                          stroke="#fff"
                          data-angel="88"
                        ></circle>
                        <text
                          className="business_growth-text-58"
                          x="50%"
                          y="50%"
                          fill="#fff"
                          textAnchor="middle"
                          dy="0.35em"
                          fontSize="1.6rem"
                          fontWeight="400"
                        >
                          <tspan className="business_growth-percent-58">
                            88
                          </tspan>
                          <tspan className="business_growth-unit-58">%</tspan>
                        </text>
                      </svg>
                      <p>get 88% of the best services and growth business</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
