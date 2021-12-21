import Head from "next/head";
import styles from  'styles/Layout.module.css'
import Footer from "Components/Footer";
import Header from "Components/Header";
import ShowCase from "Components/ShowCase";
import { useRouter } from "next/router";
export default function Layout({ title, keywords, description, children }) {
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
        <Header />
       { router.pathname === '/' && <ShowCase /> }
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Dj Evnets | Find the hottest parties",
  description: "Find the latest DJ and other musical events",
  keywords: "Dj Music Events",
};
