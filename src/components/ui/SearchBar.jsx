import React, { useState } from "react";

import { observer } from "mobx-react-lite";
import { Box, Grid2 as Grid, Button, IconButton } from "@mui/material";
import SchoolCard from "../ui/SchoolCard";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import colors from "../../styles/colors";
import CancelIcon from "@mui/icons-material/Cancel";

import { searchSchool } from "../../states/gloablStates";
import { schools } from "../../states/school";

export default observer(() => {
  const [target, setTarget] = useState("");

  const handleSearch = () => {
    schools.setSearchTarget(target);
  };

  const handleClear = () => {
    setTarget("");
    schools.setSearchTarget("");
  };
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
            border: "1px solid #F59E0B",
            width: { md: "70%", lg: "100%" },
            borderRadius: 8,
            backdropFilter: "blur(24px)",
            // borderImageSource:
            //   "linear-gradient(110.43deg, #FEF3C7 26.89%, #F59E0B 79.56%)",
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
            <Grid item size={10}>
              <TextField
                sx={{ width: "100%", backgroundColor: colors.netural.white }}
                id="input-with-icon-textfield"
                placeholder="Search School Address"
                value={target}
                onChange={(e) => {
                  const val = e.target.value;
                  if (val) {
                    setTarget(e.target.value);
                  } else {
                    setTarget("");
                    schools.setSearchTarget("");
                  }
                }}
                onKeyDown={(e) => {
                  e.key == "Enter" && handleSearch();
                }}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon sx={{ color: colors.primary[600] }} />
                      </InputAdornment>
                    ),
                    endAdornment: schools.searchTarget && (
                      <InputAdornment position="start">
                        <IconButton size="small" onClick={handleClear}>
                          <CancelIcon sx={{ color: colors.netural[300] }} />
                        </IconButton>
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
});
