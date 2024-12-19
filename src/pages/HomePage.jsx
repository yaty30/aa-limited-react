import React, { useState, useEffect } from "react";
import { Grid2 as Grid, CssBaseline } from "@mui/material";

// Components
import Header from "../components/home/Header";
import Hero from "../components/home/Hero";
import SearchBar from "../components/home/Search";
import SchoolList from "../components/home/SchoolList";
import Footer from "../components/home/Footer";
import MyList from "../components/home/MyList";

// APIs
import { getData } from "../apis/apis";

// MobX
import { observer } from "mobx-react-lite";

const Home = () => {
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <CssBaseline />
      <MyList />
      <Grid container spacing={0}>
        {/* Header */}
        <Grid item size={12}>
          <Header />
        </Grid>

        {/* Hero Section */}
        <Grid item size={12}>
          <Hero />
        </Grid>

        {/* Search Bar */}
        <Grid item size={12}>
          <SearchBar />
        </Grid>

        {/* School List */}
        <Grid item size={12}>
          <SchoolList />
        </Grid>

        {/* Footer */}
        <Grid item size={12}>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
};

export default observer(Home);
