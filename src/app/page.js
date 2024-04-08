import styles from "./page.module.css";
import Top from "@/components/top/Top";
import PageBanner from "@/components/main/PageBanner";
import Product from "@/components/main/Product";
import Bottom from "@/components/bottom/Bottom";

export default function Home() {
  return (
    <main className={styles.main}>
      <Top />
      <PageBanner />
      <Product />
      <Bottom />
    </main>
  );
}
