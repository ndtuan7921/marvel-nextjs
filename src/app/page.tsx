import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Title from "@/components/Title";
import MainLayout from "@/layouts/Main";

export default function Home() {
  return (
    <MainLayout>
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
    </MainLayout>
  );
}
