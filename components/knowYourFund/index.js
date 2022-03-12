import React from "react";
import styles from "./funds.module.css";
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
  return (
    <div className={styles.fundsContainer}>
      <hr className={styles.fundsSeprateLine}></hr>
      <div className={styles.fundsParent}>
        <div className={styles.fundsTypogarphy}>
          <span
            style={{ flex: "1" , flexDirection:"column" , fontSize: "2.5rem" , textAlign:"center" , marginBottom: "10px" , color: "#052F5F"}}
          >
            <b>Know Your Funds</b> - in the language you understand
          </span>
          <span
             style={{  flex: "2",  flexDirection:"column" , fontSize: "1.4rem" , textAlign: "center" , marginBottom: "10px", color: "#052F5F"}}
          >
            We don &quot; t use jargons, ratios or numbers to explain you anything. We
            do this in 6 languages
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            maxWidth: "100%",
          }}
        >
          {cardsDetails.map((details, index) => (
            <div
              style={{
                display: "flex",
                width: "30%",
                maxWidth: "33%",
                marginRight: "2rem"
              }}
              key={index}
            >
              <img 
              style={{maxWidth: "100%" ,margin: "2rem", }}
              src={details.img} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Funds;
