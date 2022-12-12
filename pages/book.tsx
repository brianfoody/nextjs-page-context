import styles from "../styles/Home.module.css";

export async function getServerSideProps() {
  const anArrayOfNumbersFrom1To1000 = Array.from(
    { length: 1000 },
    (_, i) => i + 1
  );

  // Pass data to the page via props
  return { props: { data: anArrayOfNumbersFrom1To1000 } };
}

export default function Home({ data }: any) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to your book</h1>
      </main>
    </div>
  );
}
