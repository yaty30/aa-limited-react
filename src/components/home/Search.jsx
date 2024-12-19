import React from "react";

// MobX
import { observer } from "mobx-react-lite";

// Material-UI Components
import { Box } from "@mui/material";

// Styles and Custom Components
import colors from "../../styles/colors";
import SearchBar from "../ui/SearchBar";

const SearchSection = () => {
  return (
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
      {/* Search Bar */}
      <Box
        sx={{
          position: "absolute",
          zIndex: 10,
        }}
        className="search-bar-fade-in"
      >
        <SearchBar />
      </Box>

      {/* Background Image */}
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
        <img src="/assets/images/Background image.png" alt="Background" />
      </Box>
    </Box>
  );
};

export default observer(SearchSection);
