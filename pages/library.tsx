import Link from "next/link";

import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  console.log("fetching data");
  const anArrayOfNumbersFrom1To1000 = Array.from(
    { length: 1000 },
    (_, i) => i + 1
  );

  return { props: { data: anArrayOfNumbersFrom1To1000 } };
}

export default function Home({ data }: any) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {data.map((d: number) => (
          <Link href={`/book`} shallow={true} scroll={false} key={d}>
            <div className={styles.card}>
              <h2>Examples {d}</h2>
              <p>Here is your book.</p>
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
}
