import React from "react";
import { Box } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { observer } from "mobx-react-lite";

// Styles
import colors from "../../styles/colors";

const MyListButton = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        zIndex: 99,
        bottom: 10,
        right: 10,
      }}
    >
      <Box
        aria-label="add"
        sx={{
          width: 60,
          height: 56,
          backgroundColor: colors.primary[50],
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: 3,
          borderRadius: "8px",
          fontSize: 0,
          transition: "ease-in-out 0.1s",
          "&:hover": {
            fontSize: 20,
            cursor: "pointer",
            width: 150,
          },
        }}
      >
        <BookmarkIcon sx={{ fontSize: "32px", color: colors.primary[700] }} />
        <b>My List</b>
      </Box>
    </Box>
  );
};

export default observer(MyListButton);
