import React from "react";

// Material-UI Components
import { Typography as MuiTypography } from "@mui/material";

// MobX
import { observer } from "mobx-react-lite";

// Styles
import "../../styles/Fonts.css";
import colors from "../../styles/colors";

// Typography styles configuration
const typographyStyles = {
  display1: {
    fontSize: "68px",
    lineHeight: "110%",
    fontWeight: 800,
    letterSpacing: 0,
    fontFamily: '"Inter", serif',
  },
  heading1: {
    fontSize: "48px",
    lineHeight: "120%",
    letterSpacing: 0,
    fontFamily: "'Noto Serif HK', serif",
    fontWeight: 900,
  },
  heading2: {
    fontSize: "42px",
    lineHeight: "120%",
    letterSpacing: 0,
    fontFamily: "'Noto Serif HK', serif",
    fontWeight: 900,
  },
  heading3: {
    fontSize: "36px",
    lineHeight: "130%",
    letterSpacing: 0,
    fontFamily: "'Noto Serif HK', serif",
    fontWeight: 700,
  },
  subtitle: {
    fontSize: "24px",
    lineHeight: "130%",
    letterSpacing: 0,
    fontFamily: '"Inter", serif',
    fontWeight: 600,
  },
  body1: {
    fontSize: "22px",
    lineHeight: "150%",
    letterSpacing: 0,
    fontFamily: '"Inter", serif',
  },
  body2: {
    fontSize: "18px",
    lineHeight: "150%",
    letterSpacing: 0,
    fontFamily: '"Inter", serif',
  },
  label1: {
    fontSize: "20px",
    lineHeight: "130%",
    letterSpacing: 0,
    fontWeight: 600,
    fontFamily: '"Inter", serif',
  },
  label2: {
    fontSize: "16px",
    lineHeight: "130%",
    letterSpacing: 0,
    fontFamily: '"Inter", serif',
  },
  caption1: {
    fontSize: "16px",
    lineHeight: "150%",
    letterSpacing: 0,
    fontFamily: '"Inter", serif',
  },
  caption2: {
    fontSize: "14px",
    lineHeight: "150%",
    letterSpacing: 0,
    fontFamily: '"Inter", serif',
  },
};

const Typography = ({ variant, children, color }) => {
  // Pick the styles for the given variant
  const style = typographyStyles[variant] || typographyStyles.body1;

  return (
    <MuiTypography
      style={{
        ...style,
        color: color ? color : colors.netural.black, // Default to black if no color is provided
      }}
    >
      {children}
    </MuiTypography>
  );
};

export default observer(Typography);
