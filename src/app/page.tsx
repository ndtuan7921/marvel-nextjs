import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Title from "@/components/Title";

export default function Home() {
  return (
    <>
      <h1>home page</h1>
      <Title />
      <hr />
      <div>
        <Link href={"/comics"}>COMICS</Link>
      </div>
      <div>
        <Link href={"/characters"}>CHARACTERS</Link>
      </div>
      <div>
        <Link href={"/search"}>SEARCH</Link>
      </div>
    </>
  );
}
