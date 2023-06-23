"use client";
import React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import Typography from "../Typography";

type ButtonBaseProps = Pick<
  MuiButtonProps,
  "variant" | "color" | "fullWidth" | "sx" | "className"
>;

interface ButtonProps extends ButtonBaseProps {
  text: string;
  onClick: any;
}

function Button(props: ButtonProps) {
  const { text = "Load more", sx, onClick, ...rest } = props;

  return (
    <MuiButton
      variant="contained"
      onClick={onClick}
      sx={{
        ...sx,
        width: "100%",
        background: "#E62429",
        "&:hover": { background: "#9F0013" },
      }}
      {...rest}
    >
      <Typography text={text} color={"white"} />
    </MuiButton>
  );
}

export default Button;
