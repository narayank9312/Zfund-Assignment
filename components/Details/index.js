import React from 'react'
import Information from './Information'
import useMediaQuery from "../../hooks/useMediaQuery";

function Details() {
  const isMobile = useMediaQuery();

  return (
  <div>
  <Information mobile={isMobile} />
      <Information
        mobile={isMobile}
        rightImage="/image2.png"
        containerStyle={{ background: "" }}
        highlighedTextStyle={{ color: "black" }}
        textStyle={{ color: "grey" }}
        darkTick={true}
        heading={{
          text: "How do we make",
          highlitedText: "Investing Asaan?",
        }}
        points={[
          {
            heading: "SIP Packs",
            point: "Recommended funds to help you reach your goals faster",
          },
          {
            heading: "Easy investing for first time investors",
            point: "Paperless KYC and SIP registration",
          },
        ]}
      />
  </div>
  )
}

export default Details