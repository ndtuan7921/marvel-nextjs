"use client";
import React from "react";
import { ComicCard } from "../Card";
import Link from "next/link";
import { Stack } from "@mui/material";
import Heading from "../Heading";

interface ComicsListProps {
  data: any;
}

function ComicsList(props: ComicsListProps) {
  const { data } = props;
  return (
    <Stack
      direction="column"
      alignItems={"center"}
      spacing={5}
      sx={{ marginTop: "3rem" }}
      className="comics-list"
    >
      <Heading variant="h5" text={"Reading Comics"} />
      <Stack
        direction="row"
        justifyContent="center"
        spacing={2}
        flexWrap={"wrap"}
      >
        {data &&
          data.map((item: any) => {
            return (
              <Link
                href={`/comics/${item.id}`}
                key={item.id}
                className="comic-link"
              >
                <ComicCard {...item} />
              </Link>
            );
          })}
      </Stack>
    </Stack>
  );
}

export default ComicsList;
