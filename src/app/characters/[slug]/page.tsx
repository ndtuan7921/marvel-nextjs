import { getCharactersById } from "@/services";
import React from "react";
import Image from "next/image";

async function CharacterDetailPage(props: any) {
  const id = props.params.slug;
  const characterDetail = await getCharactersById(id);
  console.log(characterDetail);
  const { name, description, thumbnail } = characterDetail;
  return (
    <>
      <h1>{name}</h1>
      <Image
        src={`${thumbnail.path}.${thumbnail.extension}`}
        alt={"comic-thumbnail"}
        width={300}
        height={500}
      />
      <hr />
      <p>{description}</p>
    </>
  );
}

export default CharacterDetailPage;
