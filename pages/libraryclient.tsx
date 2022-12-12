"use client";
import Link from "next/link";
import React from "react";

import styles from "../styles/Home.module.css";

export default function Home() {
  const [data, setData] = React.useState<number[]>([]);
  React.useEffect(() => {
    const anArrayOfNumbersFrom1To1000 = Array.from(
      { length: 1000 },
      (_, i) => i + 1
    );

    setData(anArrayOfNumbersFrom1To1000);
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {data.map((d: number) => (
          <Link href={`/bookclient`} shallow={true} scroll={false} key={d}>
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
