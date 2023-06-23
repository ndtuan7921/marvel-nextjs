"use client";
import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from "@mui/material";

type TypographyBaseProps = Pick<
  MuiTypographyProps,
  "variant" | "color" | "sx" | "className"
>;

export interface TypographyProps extends TypographyBaseProps {
  text: string | undefined;
}

function Typography(props: TypographyProps) {
  const {
    text = "default text",
    variant,
    color = "#000000",
    sx,
    ...rest
  } = props;

  return (
    <MuiTypography color={color} variant={variant} sx={{ ...sx }} {...rest}>
      {text}
    </MuiTypography>
  );
}

export default Typography;
