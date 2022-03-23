import React from "react";
import styles from "./funds.module.css";
import useMediaQuery from "../../hooks/useMediaQuery";
const cardsDetails = [
  {
    img: "/youtube.png",
  },
  {
    img: "/Blogs.png",
  },
  {
    img: "/QnA.png",
  },
];
function Funds() {
  const isMobile = useMediaQuery();
  
  return (
    <div className={styles.fundsContainer}>
      <hr className={styles.fundsSeprateLine}></hr>
      <div className={styles.fundsParent}>
        <div className={styles.fundsTypogarphy}>
          <span
            style={!isMobile ? {
              flex: "1",
              flexDirection: "column",
              fontSize: "2.5rem",
              textAlign: "center",
              marginBottom: "10px",
              color: "#052F5F",
            }: {
              flex: "1",
              flexDirection: "column",
              fontSize: "1.5rem",
              textAlign: "center",
              marginBottom: "10px",
              color: "#052F5F",
            }}
          >
            <b>Know Your Funds</b> - in the language you understand
          </span>
          <span
            style={!isMobile ? {
              flex: "2",
              flexDirection: "column",
              fontSize: "1.4rem",
              textAlign: "center",
              marginBottom: "10px",
              color: "#052F5F",
            } :{
              flex: "2",
              flexDirection: "column",
              fontSize: "1rem",
              textAlign: "center",
              marginBottom: "10px",
              color: "#052F5F",
              lineHeight :"1.5rem"
            }}
          >
            We don &quot; t use jargons, ratios or numbers to explain you
            anything. We do this in 6 languages
          </span>
        </div>
        <div
        className={styles.imageSocial}
        
        >
          {cardsDetails.map((details, index) => (
            <div
            className={styles.socialIcon}
             
              key={index}
            >
              <img
                style={!isMobile ? { Width: "100%", margin: "2rem",height: '100%' } :{ Width: "100%" ,height: '100%'}}
                src={details.img}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Funds;
