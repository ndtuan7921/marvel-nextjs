"use client";
import { getComicsById } from "@/services";
import React from "react";
import Image from "next/image";
import Heading from "@/components/Heading";
import Typography from "@/components/Typography";
import { Box } from "@mui/material";

async function ComicDetailPage(props: any) {
  const id = props.params.slug;
  const comicDetail = await getComicsById(id);
  console.log(comicDetail);
  const { title, modified, thumbnail, textObjects } = comicDetail;

  let description;
  if (textObjects.length > 0 && textObjects[0].hasOwnProperty("text")) {
    description = textObjects[0].text;
  }

  return (
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
          <Heading variant={"h4"} text={title} color={"white"} />
          <Box>
            <Typography
              text={"Published"}
              variant="h6"
              sx={{ marginBottom: "5px" }}
              color={"white"}
            />
            <Typography text={modified} variant="subtitle1" color={"white"} />
          </Box>
          <Typography text={description} color={"white"} />
        </Box>
      </Box>
    </Box>
  );
}

export default ComicDetailPage;
