import Link from "next/link";
import React from "react";
import { publish_key, hashed_key } from "../../../env.config";
import Image from "next/image";
import { getCharacters } from "@/services";

async function CharactersPage() {
  const characters = await getCharacters();
  console.log(characters);
  return (
    <>
      <h1>characters page</h1>
      {characters.map((character: any) => {
        return (
          <Link href={`characters/${character.id}`} key={character.id}>
            <h2>{character.name}</h2>
            <h3>{character.description}</h3>
            <Image
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
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

export default CharactersPage;
