import React, { useState, useEffect } from "react";

import { Grid2 as Grid, CssBaseline } from "@mui/material";

// components
import Header from "../components/home/Header";
import Hero from "../components/home/Hero";

import { observer } from "mobx-react-lite";
import SearchBar from "../components/home/SearchBar";
import SchoolList from "../components/home/SchoolList";

export default observer(() => {
  return (
    <>
      <Grid container spacing={0}>
        <Grid item size={12}>
          <Header />
        </Grid>
        <Grid item size={12}>
          <Hero />
        </Grid>
        <Grid item size={12}>
          <SearchBar />
        </Grid>
        <Grid item size={12}>
          <SchoolList />
        </Grid>
      </Grid>
    </>
  );
});
