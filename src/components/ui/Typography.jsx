import React from "react";

import { Typography as MuiTypography } from "@mui/material";
import { observer } from "mobx-react-lite";

import "../../styles/Fonts.css";
import colors from "../home/colors";

const typographyStyles = {
  display1: {
    fontSize: "68px",
    lineHeight: "110%",
    fontWeight: 800,
    letterSpace: 0,
    fontFamily: '"Inter", serif',
  },
  heading1: {
    fontSize: "48px",
    lineHeight: "120%",
    letterSpace: 0,
    fontFamily: "'Noto Serif HK', serif",
    fontWeight: 900,
  },
  heading2: {
    fontSize: "42px",
    lineHeight: "120%",
    letterSpace: 0,
    fontFamily: "'Noto Serif HK', serif",
    fontWeight: 900,
  },
  heading3: {
    fontSize: "36px",
    lineHeight: "130%",
    letterSpace: 0,
    fontFamily: "'Noto Serif HK', serif",
    fontWeight: 700,
  },
  subtitle: {
    fontSize: "24px",
    lineHeight: "130%",
    letterSpace: 0,
    fontFamily: '"Inter", serif',
    fontWeight: 600,
  },
  body1: {
    fontSize: "22px",
    lineHeight: "150%",
    letterSpace: 0,
    fontFamily: '"Inter", serif',
  },
  body2: {
    fontSize: "18px",
    lineHeight: "150%",
    letterSpace: 0,
    fontFamily: '"Inter", serif',
  },
  label1: {
    fontSize: "20px",
    lineHeight: "130%",
    letterSpace: 0,
    fontWeight: 600,
    fontFamily: '"Inter", serif',
  },
  label2: {
    fontSize: "16px",
    lineHeight: "130%",
    letterSpace: 0,
    fontFamily: '"Inter", serif',
  },
  caption1: {
    fontSize: "16px",
    lineHeight: "150%",
    letterSpace: 0,
    fontFamily: '"Inter", serif',
  },
  caption2: {
    fontSize: "14px",
    lineHeight: "150%",
    letterSpace: 0,
    fontFamily: '"Inter", serif',
  },
};

export default observer(({ variant, children, color }) => {
  const style = "";
  return (
    <>
      <MuiTypography
        style={{
          ...typographyStyles[variant],
          color: color ? color : colors.netural.black,
        }}
      >
        {children}
      </MuiTypography>
    </>
  );
});
