import React from "react";
import styles from "./hero.module.css";
import useMediaQuery from './../../hooks/useMediaQuery';

const defaultRightImageSrc = "/test.png";
const whatsApp = "/whatsapp.svg";

export default function Hero({ mobile = false }) {
  const isMobile = useMediaQuery();
  return (
    <div className={styles.heroContainer} style={{flexDirection: isMobile ? 'column-reverse' : 'row' }}>
      <div className={styles.heroParent}>
        <heading
          style={{
            marginTop: "4rem",
          }}
        >
          <span
            className={
              !mobile
                ? styles.heroParentTypography
                : styles.heroParentTypographyMob
            }
          >
            Make Your Investments
          </span>
        </heading>
        <main className={styles.heroParentMain}>
          <div className={styles.heroParentContent}>
            <div className={styles.heroPatentinternal}>
              <span
                style={{
                  fontSize: !mobile ? "3rem" : "3rem",
                  marginTop: "1rem",
                  fontWeight: "bold",
                  color: "#052F5F",
                }}
              >
                Sahi. Asaan
              </span>
              <span
                style={{
                  fontSize: !mobile ? "1.5rem" : "1rem",
                  marginTop: "2rem",
                  fontWeight: "initial",
                  color: "#052F5F",
                  fontSize: "1.1rem",
                }}
              >
                With us you have a trusted ZFunds expert by your side each step
                of your investment journey.
              </span>

              <div
              className={
                styles.heroWhatsaAPP
              }
              >
                <img
                  style={{
                    display: "flex",
                    // flex: "1",
                    // marginTop: "1rem",
                    marginLeft: 20,
                    marginTop: "10px",
                    marginBottom: "10px",
                    maxWidth: "100%",
                  }}
                  src={whatsApp}
                />

                <span
                  style={{
                    display: "flex",
                    flex: 2,

                    marginTop: "12px",
                    color: "white",
                    fontSize: "18px",
                    fontWeight: "initial",
                    marginLeft: 20,
                  }}
                >
                  WhatsApp Expert
                </span>
              </div>
              <span
                style={{
                  fontSize: "18px",
                  marginTop: 10,
                  fontWeight: "initial",
                  fontSize: "14px",
                  marginLeft: "40px",
                }}
              >
                Chat with an Expert now
              </span>
            </div>
          </div>
        </main>
      </div>
      {!mobile ? (
        <div
         className={styles.heroImage}
        >
          <div>
            <img style={{ maxHeight: "500px" }} src={defaultRightImageSrc} />
          </div>
        </div>
      ) : (
        <div
        className={styles.heroImageMob}
       >
         <div>
           <img style={{ maxHeight: "500px" }} src={defaultRightImageSrc} />
         </div>
       </div>
      )}
    </div>
  );
}
