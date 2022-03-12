import React from "react";
import Image from "next/image";
import styles from "./navbar.module.css";
const NavbarActions = () => {
  const linkOnClick = (href) => {
    return () => {
      window.location = href;
    };
  };
  const linkButtons = [
    { title: "experts", onClick: linkOnClick("/experts") },
    { title: "how we work", onClick: linkOnClick("/how-we-work") },
  ];
  const mainButton = [{ title: "Portfolio Login", onClick: linkOnClick("/portfolio-login") }];
  return (
    <div
    className={styles.navbarActionContainer}
    //  style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", flex: 2 }}
     >
      {linkButtons.map(({ title, onClick }) => {
        return (
          <button key={title} className={styles.linkButton} onClick={onClick}>
            {title}
          </button>
        );
      })}
      {mainButton.map(({ title, onClick }) => {
        return (
          <button key={title} className={styles.mainButton} onClick={onClick}>
            {title}
          </button>
        );
      })}
    </div>
  );
};

export default function NavbarDesktop() {
  return (
    <div 
    className={styles.navbarDesktopContainer}
    >
      <div className={styles.navbarDesktopLogo}
      >
        <Image src={"/logo.png"} height={50} width={100} />
      </div>
      <NavbarActions />
    </div>
  );
}
