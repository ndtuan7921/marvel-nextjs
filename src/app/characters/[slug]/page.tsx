"use client";
import { getCharactersById, getComicsByCharacterId } from "@/services";
import React from "react";
import Image from "next/image";
import Heading from "@/components/Heading";
import Typography from "@/components/Typography";
import { Box } from "@mui/material";
import { ListCard } from "@/components/List";
import Link from "next/link";
import { ComicCard } from "@/components/Card";

async function CharacterDetailPage(props: any) {
  const id = props.params.slug;

  const characterDetail = getCharactersById(id);
  const comics = getComicsByCharacterId(id);
  const [characterDetailData, comicsData] = await Promise.all([
    characterDetail,
    comics,
  ]);

  const { name, description, thumbnail } = characterDetailData;

  console.log(characterDetailData, "\n", comicsData);

  return (
    <>
      <Box sx={{ background: "#202020" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            columnGap: "2rem",
            justifyContent: "space-between",
            margin: "0 auto",
            maxWidth: "60%",
            position: "relative",
            zIndex: 1000,
          }}
        >
          <Box
            sx={{
              maxWidth: "650px",
            }}
          >
            <Image
              src={`${thumbnail.path}.${thumbnail.extension}`}
              alt={"comic-thumbnail"}
              width={430}
              height={480}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              rowGap: "1.875rem",
              color: "white",
            }}
          >
            <Heading variant={"h4"} text={name} color={"white"} />
            <Typography text={description} color={"white"} />
          </Box>
        </Box>
      </Box>

      <ListCard
        title={`More ${name}`}
        data={comicsData}
        renderItem={(comic) => (
          <Link href={`/comics/${comic.id}`} key={comic.id}>
            <ComicCard {...comic} />
          </Link>
        )}
      />
    </>
  );
}

export default CharacterDetailPage;
