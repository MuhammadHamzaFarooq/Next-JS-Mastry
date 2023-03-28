import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Learn Dynamic Routing In NextJs 13.2</h1>
      <div>
        <p>
          <Link
            href={"/users"}
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: "black",
            }}
          >
            Users
          </Link>
        </p>
      </div>
    </main>
  );
}
