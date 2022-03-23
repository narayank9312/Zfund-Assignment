import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Details from "../components/Details";
import useMediaQuery from "../hooks/useMediaQuery";
import Funds from "../components/knowYourFund";
import Testimonials from "../components/testimonials";
import More from "../components/More";
export default function Home() {
  const isMobile = useMediaQuery();
  return (
    <>
      <Navbar />
      <Hero mobile={isMobile} />
      <Details />
      <Funds />
      <Testimonials />
      <More />
      <div className={styles.container}>
        
        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={styles.logo}>
              <Image src="/logo.png" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>
      </div>
      
     
    </>
  );
}
