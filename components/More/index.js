import React from "react";
import ReactMarkdown from "react-markdown";
import template from "./data.json";
import Collapsible from "react-collapsible";
import styles from "./more.module.css";
import useMediaQuery from "../../hooks/useMediaQuery";

function CollapsableItem({ item }) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Collapsible
        key={item.heading}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        trigger={<CollapsableHeading heading={item.heading} open={open} />}
      >
        <ReactMarkdown className={styles.Details}>{item.details}</ReactMarkdown>
        {item.after ? <ReactMarkdown className={styles.Heading}>{item.after}</ReactMarkdown> : undefined}
      </Collapsible>
      <div style={{ width: "100%", height: 3, background: "black" }} />
    </>
  );
}

const CollapsableHeading = ({ heading, open }) => {
  const rotation = `rotate(${open ? 360 : 90}deg)`;
  return (
    <div className={styles.HeadingContainer}>
      <p>{heading}</p>

      <div
        style={{
          width: 30,
          marginLeft: "auto",
          transform: rotation,
          transition: "transform 0.3s",
        }}
      >
        <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path>
        </svg>
      </div>
    </div>
  );
};

export default function More() {
  const isMobile = useMediaQuery();
  return (
    <div
      style={{ display: "flex", alignItems: "center", flexWrap: "wrap", flexDirection: isMobile ? "column" : "row", padding: 20 }}
    >
      <div style={{ flex: 1, display: "flex", padding: 50 }}>
        <ReactMarkdown className={styles.Heading}>{template.heading}</ReactMarkdown>
      </div>
      <div style={{ flex: 1 }}>
        {template.expandableItems.map((item) => {
          return <CollapsableItem key={item.heading} item={item} />;
        })}
      </div>
    </div>
  );
}
