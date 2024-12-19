import React, { useState } from "react";

import { observer } from "mobx-react-lite";
import { Box } from "@mui/material";
import colors from "../../styles/colors";
import SearchBar from "../ui/SearchBar";

export default observer(() => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          width: "100%",
          justifyContent: "center",
          background: colors.primary[100],
          position: "relative",
          bottom: 90,
        }}
      >
        <Box sx={{ position: "absolute", zIndex: 10 }} className="search-bar-fade-in">
          <SearchBar />
        </Box>
        <Box
          sx={{
            height: "100px",
            width: "100%",
            display: "flex",
            flexDirection: "row-reverse",
            padding: "10px",
          }}
          className="start-background-fade-in"
        >
          <img src="/assets/images/Background image.png" />
        </Box>
      </Box>
    </>
  );
});
