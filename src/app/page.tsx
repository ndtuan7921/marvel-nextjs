import MainLayout from "@/layouts/Main";
import { ListCard } from "@/components/List";
import { getCharacters, getComics } from "@/services";
import Link from "next/link";
import { CharacterCard, ComicCard } from "@/components/Card";
import { useEffect } from "react";
import ComicsList from "@/components/hotfix/ComicsList";
import CharactersList from "@/components/hotfix/CharactersList";

export default async function Home() {
  const comics = getComics();
  const characters = getCharacters();

  const [comicsData, charactersData] = await Promise.all([comics, characters]);

  console.log(comicsData, "\n", charactersData);
  return (
    <MainLayout>
      <h1>HOME PAGE</h1>
      <ComicsList data={comicsData} />
      <CharactersList data={charactersData} />
      {/* {charactersData && comicsData && (
        <>
          <ListCard
            title={"Read Comics For Free"}
            data={comicsData}
            renderItem={(comic) => (
              <Link href={`/comics/${comic.id}`} key={comic.id}>
                <ComicCard {...comic} />
              </Link>
            )}
          />
          <ListCard
            title={"Marvel Characters List"}
            data={charactersData}
            renderItem={(character) => (
              <Link href={`/characters/${character.id}`} key={character.id}>
                <CharacterCard {...character} />
              </Link>
            )}
          />
        </>
      )} */}
    </MainLayout>
  );
}
