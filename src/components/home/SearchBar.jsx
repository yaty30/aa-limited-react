import React, { useState } from "react";

import { observer } from "mobx-react-lite";
import { Box, Grid2 as Grid, Button } from "@mui/material";
import SchoolCard from "../ui/SchoolCard";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import colors from "../../styles/colors";

import { searchSchool } from "../../states/gloablStates";

export default observer(() => {
  const SearchArea = () => {
    return (
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
        <Grid item size={10}>
          <TextField
            sx={{ width: "100%", backgroundColor: colors.netural.white }}
            id="input-with-icon-textfield"
            placeholder="Search School Address"
            value={searchSchool.target}
            onChange={(e) => searchSchool.setTarget(e.target.value)}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: colors.primary[600] }} />
                  </InputAdornment>
                ),
              },
            }}
            variant="outlined"
          />
        </Grid>
        <Grid item size={2}>
          <Button
            variant="contained"
            size="large"
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
    );
  };
  const SearchBar = () => {
    return (
      <Box
        id="search-bar-section-container"
        sx={{
          backgroundColor: "transparent",
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
          <Box
            id="search-bar-backdrop"
            sx={{
              display: "flex",
              justifyContent: "center",
              border: "1px solid #FEF3C7",
              width: { md: "70%", lg: "100%" },
              borderRadius: 8,
              backdropFilter: "blur(24px)",
              position: "relative",
              padding: '32px 82px',
              zIndex: 11,
            }}
          >
            <SearchArea />
          </Box>
        </Box>
      </Box>
    );
  };

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
        <Box sx={{ position: "absolute" }}>
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
        >
          <img src="/assets/images/Background image.png" />
        </Box>
      </Box>
    </>
  );
});
