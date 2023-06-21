import { getComicsById } from "@/services";
import React from "react";
import Image from "next/image";

async function ComicDetailPage(props: any) {
  const id = props.params.slug;
  const comicDetail = await getComicsById(id);

  const { title, modified, thumbnail, textObjects } = comicDetail;
  // console.log(textObjects);
  let description;
  if (textObjects.length > 0 && textObjects[0].hasOwnProperty("text")) {
    description = textObjects[0].text;
  }
  return (
    <>
      <h1>{title}</h1>
      <Image
        src={`${thumbnail.path}.${thumbnail.extension}`}
        alt={"comic-thumbnail"}
        width={300}
        height={500}
      />
      <hr />
      <p>{description}</p>
      <h3>
        Modified: <span>{modified}</span>
      </h3>
    </>
  );
}

export default ComicDetailPage;
