"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { getComics } from "@/services";
import Title from "@/components/Title";
import MainLayout from "@/layouts/Main";
import withAuth from "@/hooks/withAuth";
import { ListCard } from "@/components/List";
import { ComicCard } from "@/components/Card";

async function ComicsPage() {
  const comics = await getComics();
  console.log(comics);
  return (
    <>
      {comics ? (
        <ListCard
          title={"Read Comics For Free"}
          data={comics}
          renderItem={(comic) => (
            <Link href={`/comics/${comic.id}`} key={comic.id}>
              <ComicCard {...comic} />
            </Link>
          )}
        />
      ) : (
        <h1>COMICS PAGE</h1>
      )}
    </>
  );
}

// export default withAuth(ComicsPage);

export default ComicsPage;
