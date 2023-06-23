import { getComicsById } from "@/services";
import React from "react";
import Image from "next/image";
import Heading from "@/components/Heading";
import Typography from "@/components/Typography";
import { Box } from "@mui/material";
import ComicDetail from "@/pages/ComicDetail";

async function ComicDetailPage(props: any) {
  const id = props.params.slug;
  const comicDetail = await getComicsById(id);
  console.log(comicDetail);
  const { textObjects } = comicDetail;

  let description;
  if (textObjects.length > 0 && textObjects[0].hasOwnProperty("text")) {
    description = textObjects[0].text;
  }

  return <ComicDetail description {...comicDetail} />;
}

export default ComicDetailPage;
