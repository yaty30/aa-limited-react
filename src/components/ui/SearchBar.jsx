import React, { useState } from "react";

// MobX
import { observer } from "mobx-react-lite";

// Material-UI Components
import {
  Box,
  Grid2 as Grid,
  Button,
  IconButton,
  TextField,
  InputAdornment,
} from "@mui/material";

// Material-UI Icons
import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";

// Custom Components and Styles
import colors from "../../styles/colors";

// Global States
import { schools } from "../../states/school";

const SearchBar = () => {
  const [target, setTarget] = useState("");

  // Handle search when the "Search" button or Enter key is pressed
  const handleSearch = () => {
    schools.setSearchTarget(target);
  };

  // Clear the search input and reset the search state
  const handleClear = () => {
    setTarget("");
    schools.setSearchTarget("");
  };

  return (
    <Box
      id="search-bar-section-container"
      sx={{
        position: "relative",
        top: -70,
        zIndex: 10,
      }}
    >
      <Box
        id="search-bar-container"
        sx={{
          display: { xs: "none", sm: "none", md: "flex" },
          justifyContent: "center",
          width: "100%",
        }}
      >
        {/* Search Bar Backdrop */}
        <Box
          id="search-bar-backdrop"
          sx={{
            display: "flex",
            justifyContent: "center",
            border: "1px solid #F59E0B",
            width: { md: "70%", lg: "100%" },
            borderRadius: 8,

            // the backdrop-filter: blur cannot be applied because the fade-in transition requires opacity to control the effect.
            // however, using opacity interferes with the backdrop-filter, causing it to stop functioning.
            // refer to: src/styles/Animations.css -> .search-bar-fade-in
            // backdropFilter: "blur(24px)",

            backgroundColor: "rgba(255, 255, 255, 0.8)",
            position: "relative",
            padding: "32px 82px",
            zIndex: 11,
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              width: { sm: "100%", md: "1100px" },
              position: "relative",
              zIndex: 1,
            }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {/* Search Input Field */}
            <Grid item size={10}>
              <TextField
                sx={{
                  width: "100%",
                  backgroundColor: colors.netural.white,
                }}
                id="input-with-icon-textfield"
                placeholder="Search School Address"
                value={target}
                onChange={(e) => {
                  const val = e.target.value;
                  if (val) {
                    setTarget(e.target.value);
                  } else {
                    handleClear();
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearch();
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: colors.primary[600] }} />
                    </InputAdornment>
                  ),
                  endAdornment: target && (
                    <InputAdornment position="start">
                      <IconButton size="small" onClick={handleClear}>
                        <CancelIcon sx={{ color: colors.netural[300] }} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
              />
            </Grid>

            {/* Search Button */}
            <Grid item size={2}>
              <Button
                variant="contained"
                size="large"
                onClick={handleSearch}
                sx={{
                  backgroundColor: colors.primary[700],
                  height: 56,
                  width: "100%",
                  fontWeight: 600,
                  textTransform: "capitalize",
                }}
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default observer(SearchBar);
