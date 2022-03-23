import React, { useState } from "react";
import styles from "../testimonials/testimonial.module.css";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import useMediaQuery from "../../hooks/useMediaQuery";

const slideData = [
  { image: "./customer1.png", text: "3000+ Verified Experts" },
  { image: "./customer2.png", text: "500+ crs invested on expert " },
  { image: "./customer3.png", text: " 10L people benefited" },
];
const mobileSlideData = [
  {
    image: "./c1.png",
    text: "3000+ Verified Experts",
    content:
      "I am very happy with the review of my portfolio. Mr.Akshit answered all my questions and helped me make a healthy portfolio with a great SWP plan",
    name: "-Tapan K Rana",
  },
  {
    image: "./c2.png",
    text: "500+ crs invested on expert ",
    content:
      "Amazing app and company for mutual fund investments in India. Personalized Expert Advice available for your best benefit. Love it",
    name: "-Jayant Lakhotia",
  },
  {
    image: "./c3.png",
    text: " 10L people benefited",
    content:
      "Nice app. Easy to view your portfolio and invest more. User friendly and easy to contact your advisor on one click",
    name: "-Priyanka Gupta",
  },
];
function Testimonials() {
  const [current, setCurrent] = useState(0);
  const length = slideData.length;
  const isMobile = useMediaQuery();

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(slideData) || slideData.length <= 0) {
    return null;
  }

  return (
    <div className={styles.testimonialsContainer}>
      <div className={styles.testimonialsParent}>
        {!isMobile ? (
          <div className={styles.testimonialsCeo}>
            <img src="./ceo.png" className={styles.testimonialsImageCeo} />
            <p
              style={{
                fontSize: "1.1rem",
                marginTop: "1rem",
                textAlign: "center",
                marginBottom: "10px",
              }}
            >
              Manish Kothari - CEO
            </p>
          </div>
        ) : (
          ""
        )}
        <div className={styles.testimonialsSlogans}>
          <p
            className={styles.soFar}
            style={
              !isMobile
                ? {
                    fontSize: "1.8rem",
                    fontWeight: "bold",
                    marginBottom: "10px",
                  }
                : {
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    marginBottom: "10px",
                    marginLeft: "2%",
                  }
            }
          >
            &quot; So far only the rich have had access to the right financial
            advice
          </p>
          <p
            className={styles.soFar}
            style={
              !isMobile
                ? { fontSize: "1.1rem" }
                : { fontSize: "1rem", marginLeft: "2%" }
            }
          >
            We are changing that by ensuring every investor has a dedicated
            experts to maximize your gains &quot;
          </p>
        </div>
      </div>
      {!isMobile ? (
        <div className={styles.testimonialsthoghts}>
          <div className={styles.testimonialsRecords}>
            <p
              style={{
                fontSize: "1.8rem",
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: "10px",
              }}
            >
              3000+ Verified Experts
            </p>
            <p
              style={{
                fontSize: "1.8rem",
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: "10px",
              }}
            >
              500+ crs invested on expert advice
            </p>
            <p
              style={{
                fontSize: "1.8rem",
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: "10px",
              }}
            >
              10L people benefited
            </p>
          </div>
          <div className={styles.testimonialsRecordsImage}>
            <div style={{ display: "flex" }}>
              {" "}
              <FaArrowAltCircleLeft
                className={styles.leftArrow}
                onClick={prevSlide}
              />
              <FaArrowAltCircleRight
                className={styles.rightArrow}
                onClick={nextSlide}
              />
              {slideData.map((slide, index) => {
                console.log(
                  "checking--------",
                  current,
                  index,
                  index === current
                );
                return (
                  <div key={index}>
                    {index === current && (
                      <img
                        src={slide.image}
                        alt="testimonial image"
                        style={{
                          width: "100%",
                          height: "30vh",
                          borderRadius: "10px",
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
            <div className={styles.testimonialsExperts}>
              <div
              // style={{margin:"3rem"}}
              >
                <img style={{ maxWidth: "60%" }} src="./expert.png" />
              </div>
              <div
              // style={{marginTop: '1rem'}}
              >
                <p
                  style={{
                    fontSize: "2.3rem",
                    color: "#052F5F",
                    fontWeight: "bold",
                    marginTop: "100px",
                  }}
                >
                  Join us as an Expert
                </p>
                <p
                  style={{
                    fontSize: "1.1rem",
                    color: "#052F5F",
                    marginTop: "-30px",
                  }}
                >
                  Change how India Invests, join us on a mission to make
                  Investments Sahi and Asaan across India
                </p>
                <div className={styles.heroWhatsaAPP}>
                  <span
                    style={{
                      display: "flex",
                      // flex: 2,
                      textAlign: "center",
                      marginTop: "10px",
                      color: "white",
                      fontSize: "18px",
                      fontWeight: "initial",
                      marginLeft: 70,
                    }}
                  >
                    Get Started
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className={styles.testimonialsthoghts}>
            <div className={styles.testimonialsRecords}></div>
            <div className={styles.testimonialsRecordsImage}>
              <div className={styles.cardsscroll}>
                <div
                  className={styles.testimonialsCardParent}
                  style={{ display: "flex" }}
                >
                  {" "}
                  {mobileSlideData.map((slide, index) => {
                    console.log(
                      "checking--------",
                      current,
                      index,
                      index === current
                    );
                    return (
                      <div className={styles.testimonialsCard} key={index}>
                        <>
                          <p
                            className={styles.soFarText}
                            style={{
                              fontSize: "1.3rem",
                              fontWeight: "bold",
                              textAlign: "center",
                              marginBottom: "10px",
                              color: "#fff",
                            }}
                          >
                            {slide.text}
                          </p>
                          <div className={styles.testimonialsCardDetails}>
                            <p
                              className={styles.soFarm}
                              style={{
                                color: "#052f5f",
                                fontSize: "1rem",
                                margin: "1rem",
                              }}
                            >
                              &quot; {slide.content} &quot;
                            </p>
                            <div
                              className={styles.soFar}
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                marginTop: "15%",
                              }}
                            >
                              <img
                                src={slide.image}
                                alt="testimonial image"
                                style={{
                                  width: "100px",
                                  height: "70px",
                                  borderRadius: "100%",
                                  maxWidth: "100px",
                                  maxHeight: "100px",
                                  marginRight: "1rem",
                                }}
                              />
                              <p className={styles.soFarmn}>{slide.name}</p>
                            </div>
                          </div>
                        </>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bannerExpert}>
            <div className={styles.testimonialsExperts}>
              <div
              // style={{marginTop: '1rem'}}
              >
                <p
                  style={{
                    fontSize: "1.5rem",
                    color: "#052F5F",
                    fontWeight: "bold",
                    marginTop: "10px",
                    textAlign: "center"
                  }}
                >
                  Join us as an Expert
                </p>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "#052F5F",
                    marginTop: "20px",
                    textAlign: "center"

                  }}
                >
                  Change how India Invests, join us on a mission to make
                  Investments Sahi and Asaan across India
                </p>
                <div className={styles.heroWhatsaAPP}>
                  <span
                              className={styles.soFarStarted}

                    style={{
                      display: "flex",
                      // flex: 2,
                      textAlign: "center",
                      marginTop: "10px",
                      color: "white",
                      fontSize: "18px",
                      fontWeight: "initial",
                      marginLeft: "5rem",
                    }}
                  >
                    Get Started
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Testimonials;
