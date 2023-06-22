"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { getComics } from "@/services";
import Title from "@/components/Title";
import MainLayout from "@/layouts/Main";
import withAuth from "@/hooks/withAuth";

async function ComicsPage() {
  const comics = await getComics();
  return (
    <>
      <h1>comics page</h1>
      <Title />
      {comics.map((comic: any) => {
        return (
          <Link href={`comics/${comic.id}`} key={comic.id}>
            <h4>{comic.title}</h4>
            <Image
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt={"comic-thumbnail"}
              width={300}
              height={500}
            />
            <hr />
          </Link>
        );
      })}
    </>
  );
}

export default withAuth(ComicsPage);
