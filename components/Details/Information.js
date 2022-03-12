import React from "react";
import styles from "./details.module.css";
const defaultHeading = {
  text: "How do we ensure",
  highlitedText: "Sahi Advice?",
};
const defaultPoints = [
  {
    heading: "Dedicated Research team",
    point:
      "Some of the most talented people with a proven track record to help you choose the right fund",
  },
  {
    heading: "Certified & Experienced Experts",
    point:
      "Our advisors are certified, verified and have gone through intensive training",
  },
];
const defaultRightImageSrc = "/image1.png";
const defaultContainerStyle = {
  background: "transparent linear-gradient(263deg, #052F5F 0%, #010913 100%)",
};

const defaultHighlighTextStyle = {
  color: "white",
};

const defaultTextStyle = {
  color: "grey",
};

export default function Information({
  heading = defaultHeading,
  rightImage = defaultRightImageSrc,
  points = defaultPoints,
  containerStyle = defaultContainerStyle,
  darkTick = false,
  imageStyle = {},
  mobile = false,
  textStyle = defaultTextStyle,
  highlighedTextStyle = defaultHighlighTextStyle,
  imgAlt = "",
}) {
  return (
    <div
      className={styles.informationContainer}
      style={{
        ...containerStyle,
      }}
    >
      <div className={styles.informationParent}>
        <heading>
          <span
            style={{
              fontSize: !mobile ? "2.5rem" : "1.8rem",
              margin: "0",
              ...textStyle,
            }}
          >
            {heading.text + " "}
          </span>
          <span
            style={{
              fontSize: !mobile ? "2.5rem" : "1.8rem",
              margin: "0",
              ...highlighedTextStyle,
            }}
          >
            {heading.highlitedText}
          </span>
        </heading>
        <main
          style={{
            marginTop: "5%",
            display: "flex",
            height: "100%",
            flexDirection: "column",
          }}
        >
          {points.map((point, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: "4%",
                marginTop: "4%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={darkTick ? "tickblack.png" : "tick.png"}
                alt="something"
                style={{ marginRight: 20, height: 55, width: 55 }}
              />
              <div
                style={{
                  display: "flex",
                  flex: 1,
                  flexDirection: "column",
                  marginRight: 20,
                }}
              >
                <span
                  style={{
                    fontSize: !mobile ? "2rem" : "1.5rem",
                    margin: "0",
                    fontWeight: "bold",
                    ...highlighedTextStyle,
                  }}
                >
                  {point.heading}
                </span>
                <span
                  style={{
                    fontSize: !mobile ? "1.5rem" : "1rem",
                    marginTop: 10,
                    fontWeight: "initial",
                    ...highlighedTextStyle,
                  }}
                >
                  {point.point}
                </span>
              </div>
            </div>
          ))}
        </main>
      </div>
      {!mobile ? (
        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <img style={{ maxHeight: "450px" }} src={rightImage} alt={imgAlt} />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
