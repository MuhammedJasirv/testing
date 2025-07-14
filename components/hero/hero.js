import React from "react";
import Link from "next/link";
import icon from "/public/images/icons/icon_stars_trustpilot.svg";
import Image from "next/image";

const Hero = () => {
  const UserImg = [
    "https://smartykids.ru/wp-content/uploads/2023/05/teens-high-school-study-abroad-e1586177174717-2048x1178.jpg",
    "https://i.pinimg.com/originals/c1/b2/8e/c1b28e892453dc4e5918201a0a08caa6.jpg",
    "https://2.bp.blogspot.com/-3PaCiKGPPRw/VVInwHQQtSI/AAAAAAAAAq4/I2PKTH1XSJk/s1600/normal.jpg",
  ];

  return (
    <section className="it_solution_hero_section">
      <div className="container">
        <div className="row align-items-start">
          {/* Left Side */}
          <div className="col-lg-6">
            <div
              className="it_solution_hero_content"
              style={{
                backgroundImage: `url(${"/images/shapes/it_solution_hero_bg_1.svg"})`,
              }}
            >
              <div className="heading_focus_text mb-0 d-inline-flex align-items-center">
                👋 Hi We
              </div>
              <h1>Learn, Grow</h1>
              <p>
                A next-generation platform that seamlessly integrates education,
                digital marketing solutions, and a premium video streaming
                experience — empowering learners, educators, and businesses to
                thrive in the digital age.
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

          {/* Right Side */}
          <div className="col-lg-6 d-flex justify-content-center align-items-start">
            <div
              className="mt-3"
              style={{
                width: "70%",
                height: "auto",
                maxWidth: "100%",
                borderRadius: "0px 30px 0px ",
                overflow: "hidden",
                boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
              }}
            >
              <Image
                src="https://www.yourtango.com/sites/default/files/image_blog/2024-10/college-student.png"
                alt="Cover image"
                width={300}
                height={200}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
