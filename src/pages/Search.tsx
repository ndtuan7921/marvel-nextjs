"use client";
import Heading from "@/components/Heading";
import { SearchField } from "@/components/Input";
import { Stack } from "@mui/material";
import React from "react";

function Search() {
  return (
    <Stack
      direction="column"
      alignItems={"stretch"}
      spacing={2}
      sx={{ maxWidth: "70%", margin: "0 auto" }}
    >
      <Heading variant={"h6"} text={"SEARCH PAGE"} />
      <SearchField />
    </Stack>
  );
}

export default Search;
