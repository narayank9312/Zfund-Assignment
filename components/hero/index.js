import React from "react";
import styles from "./hero.module.css";
import useMediaQuery from "./../../hooks/useMediaQuery";

const defaultRightImageSrc = "/test.png";
const whatsApp = "/whatsapp.svg";

export default function Hero({ mobile = false }) {
  const isMobile = useMediaQuery();
  return (
    <div
      className={styles.heroContainer}
      style={{ flexDirection: isMobile ? "column" : "row" }}
    >
      <div className={styles.heroParent}>
        <heading
          style={
            !mobile
              ? {
                  marginTop: "4rem",
                }
              : {
                  // marginTop: "4rem",
                  textAlign: "center",
                }
          }
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
                style={
                  !mobile
                    ? {
                        fontSize: "3rem",
                        marginTop: "1rem",
                        fontWeight: "bold",
                        color: "#052F5F",
                      }
                    : {
                        fontSize: "1.75rem",
                        marginTop: "1rem",
                        fontWeight: "bold",
                        color: "#052F5F",
                        textAlign: "center",
                      }
                }
              >
                Sahi. Asaan
              </span>
              <span
                style={
                  !mobile
                    ? {
                        fontSize: "1.5rem",
                        marginTop: "2rem",
                        fontWeight: "initial",
                        color: "#052F5F",
                      }
                    : {
                        fontSize: "0.9rem",
                        marginTop: "2rem",
                        textAlign: "center",
                        fontWeight: "initial",
                        color: "#052F5F",
                        textAlign: "center",
                      }
                }
              >
                With us you have a trusted ZFunds expert by your side each step
                of your investment journey.
              </span>

              <div className={styles.heroWhatsaAPP}>
                <img className={styles.whatsappImage}
                  style={
                    !mobile
                      ? {
                          display: "flex",
                          // flex: "1",
                          // marginTop: "1rem",
                          marginLeft: 20,
                          marginTop: "10px",
                          marginBottom: "10px",
                          maxWidth: "100%",
                        }
                      : {
                          display: "block",
                          height: "18px",
                          width: "25px",
                          marginLeft: "50px",
                          marginTop: "12px",
                          marginBottom: "10px",
                          maxWidth: "100%",
                        }
                  }
                  src={whatsApp}
                />

                <span
                  style={
                    !mobile
                      ? {
                          display: "flex",
                          flex: 2,

                          marginTop: "12px",
                          color: "white",
                          fontSize: "18px",
                          fontWeight: "initial",
                          marginLeft: 20,
                        }
                      : {
                          display: "flex",
                          flex: 2,

                          marginTop: "14px",
                          color: "white",
                          fontSize: "0.8rem",
                          fontWeight: "initial",
                          marginRight: "50px !important",
                        }
                  }
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
                  marginBottom: "40px"
                }}
              >
                Chat with an Expert now
              </span>
            </div>
          </div>
        </main>
      </div>
      {!mobile ? (
        <div className={styles.heroImage}>
          <div>
            <img style={{ maxHeight: "500px" }} src={defaultRightImageSrc} />
          </div>
        </div>
      ) : (
        <div className={styles.heroImageMob}>
          <div>
            <img style={{ maxHeight: "500px" }} src={defaultRightImageSrc} />
          </div>
        </div>
      )}
    </div>
  );
}
