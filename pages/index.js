import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/pages/Price.module.css";



export default function Home() {
  return (
    <>
      <Head>
        <title>Single price component</title>
        <meta name="description" content="Single price component app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<main>
  <div className={styles.container}>
    <div className={styles.textCard}>
    <h1 className={styles.headline}>Join our community</h1>
    <h2 className={styles.subHeadline}>30 day hassle-free money back guarantee</h2>
    <div className={styles.description}>
      <p>Gain access to our full library of tutoruals along with expert code reviews. </p>
      <p>Perfect for any developers who are seriouss about honing their skills</p>
    </div>
      <div className={styles.flexContainer}>
        <div className={styles.colloumns}>
      <div className={styles.leftCol}>
        <div className={styles.subscription}>
          <h1>Monthly Subscription </h1>
         <div className={styles.subsciptionPrice}>
          <div className={styles.priceText}>
            $29
          </div>
          <div className={styles.month}>
            per month
          </div>
         </div>
         <div className={styles.priceDes}>
          <p>Full access for less than 1$ a day</p>
          </div>
         <button className={styles.button}>Sign Up</button>

        </div>
      </div>
      <div className={styles.rightCol}>
        <h1>Why Us</h1>
        <p>Tutorials by industry expertts Peer & expert code review Coding exercises</p>
        <p>Access to our Github repos Community forum Flashcard decks.</p>
        <p>New video every week</p>
      </div>
      </div>
      </div>
    </div>
  </div>
</main>
     
    </>
  );
}
