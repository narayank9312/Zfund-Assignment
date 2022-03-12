import React, { useState } from "react";
import styles from "../testimonials/testimonial.module.css";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const slideData = [
  { image: "./customer1.png" },
  { image: "./customer2.png" },
  { image: "./customer3.png" },
];
function Testimonials() {
  const [current, setCurrent] = useState(0);
  const length = slideData.length;

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
        <div className={styles.testimonialsSlogans}>
          <p
            style={{
              fontSize: "1.8rem",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            "So far only the rich have had access to the right financial advice
          </p>
          <p style={{ fontSize: "1.1rem" }}>
            We are changing that by ensuring every investor has a dedicated
            experts to maximize your gains"
          </p>
        </div>
      </div>
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
              <p style={{fontSize: '2.3rem',color: "#052F5F",fontWeight: "bold",marginTop: "100px"}}>Join us as an Expert</p>
              <p style={{fontSize: "1.1rem" , color: "#052F5F",marginTop: "-30px"}}>
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
    </div>
  );
}

export default Testimonials;
