import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import BookmarkIcon from "@mui/icons-material/Bookmark";

import { observer } from "mobx-react-lite";
import colors from "../../styles/colors";

export default observer(() => {
  return (
    <Box
      sx={{
        "& > :not(style)": { m: 1 },
        position: "fixed",
        zIndex: 99,
        bottom: 10,
        right: 10,
      }}
    >
      <Box
        color="primary"
        aria-label="add"
        sx={{
          width: 60,
          height: 56,
          backgroundColor: colors.primary[50],
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: 3,
          fontSize: 0,
          fontKerning: 2,
          borderRadius: "8px",
          transition: "ease-in-out 0.1s",
          "&:hover": {
            cursor: "pointer",
            fontSize: 20,
            width: 150,
          },
        }}
      >
        <BookmarkIcon sx={{ fontSize: "32px", color: colors.primary[700] }} />
        <b>My List</b>
      </Box>
    </Box>
  );
});
