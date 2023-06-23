"use client";
import React from "react";
import { CharacterCard } from "../Card";
import Link from "next/link";
import Heading from "../Heading";
import { Stack } from "@mui/material";

interface CharacterListProps {
  data: any;
}

function CharactersList(props: CharacterListProps) {
  const { data } = props;
  return (
    <Stack
      direction="column"
      alignItems={"center"}
      spacing={5}
      sx={{ marginTop: "3rem" }}
      className="characters-list"
    >
      <Heading variant="h5" text={"Characters"} />
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
                href={`/characters/${item.id}`}
                key={item.id}
                className="character-link"
              >
                <CharacterCard {...item} />
              </Link>
            );
          })}
      </Stack>
    </Stack>
  );
}

export default CharactersList;
