"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { getCharacters } from "@/services";
import MainLayout from "@/layouts/Main";
import { ListCard } from "@/components/List";
import { CharacterCard } from "@/components/Card";

async function CharactersPage() {
  const characters = await getCharacters();
  console.log(characters);
  return (
    <>
      {characters ? (
        <ListCard
          title={"Marvel Characters List"}
          data={characters}
          renderItem={(character) => (
            <Link href={`/characters/${character.id}`} key={character.id}>
              <CharacterCard {...character} />
            </Link>
          )}
        />
      ) : (
        <h1>CHARACTERS PAGE</h1>
      )}
    </>
  );
}

export default CharactersPage;
