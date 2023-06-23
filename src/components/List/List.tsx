"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import { List as MuiList } from "@mui/material";
import ListItem from "./ListItem";

export default function List() {
  return (
    <Box sx={{ width: "100%", maxWidth: "100%" }}>
      <MuiList component="nav">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </MuiList>
    </Box>
  );
}
