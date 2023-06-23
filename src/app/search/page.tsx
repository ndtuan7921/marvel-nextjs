"use client";
import { SearchField } from "@/components/Input";
import MainLayout from "@/layouts/Main";
import { Stack } from "@mui/material";
import React from "react";

function SearchPage() {
  return (
    <MainLayout>
      <Stack
        direction="column"
        alignItems={"stretch"}
        spacing={2}
        sx={{ maxWidth: "70%", margin: "0 auto" }}
      >
        <SearchField />
      </Stack>
      {/* <SearchField /> */}
    </MainLayout>
  );
}

export default SearchPage;
