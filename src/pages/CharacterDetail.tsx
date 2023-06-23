"use client";
import Heading from "@/components/Heading";
import Typography from "@/components/Typography";
import { Box } from "@mui/material";
import React from "react";
import Image from "next/image";
import ComicsList from "@/components/hotfix/ComicsList";

function CharacterDetail(props: any) {
  const { id, name, description, thumbnail, comics } = props;
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
            <Typography text={id} color={"white"} className="character-id" />
          </Box>
        </Box>
      </Box>
      <ComicsList data={comics} />
    </>
  );
}

export default CharacterDetail;
