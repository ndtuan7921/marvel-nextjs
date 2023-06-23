import { getCharactersById, getComicsByCharacterId } from "@/services";
import React from "react";
import Image from "next/image";
import Heading from "@/components/Heading";
import Typography from "@/components/Typography";
import { Box } from "@mui/material";
import CharacterDetail from "@/pages/CharacterDetail";

async function CharacterDetailPage(props: any) {
  const id = props.params.slug;

  const characterDetail = getCharactersById(id);
  const comics = getComicsByCharacterId(id);
  const [characterDetailData, comicsData] = await Promise.all([
    characterDetail,
    comics,
  ]);

  const { name, description, thumbnail } = characterDetailData;

  // console.log(characterDetailData, "\n", comicsData);

  return (
    <>
      <CharacterDetail {...characterDetailData} comics={comicsData} />
      {/* <ListCard
        title={`More ${name}`}
        data={comicsData}
        renderItem={(comic) => (
          <Link href={`/comics/${comic.id}`} key={comic.id}>
            <ComicCard {...comic} />
          </Link>
        )}
      /> */}
    </>
  );
}

export default CharacterDetailPage;
