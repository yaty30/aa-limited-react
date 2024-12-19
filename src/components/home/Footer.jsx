import React, { useState } from "react";
import { Grid2 as Grid, Box, Button, ButtonGroup } from "@mui/material";
import { observer } from "mobx-react-lite";
import colors from "../../styles/colors";
import Typography from "../ui/Typography";

const TextLink = () => {
  const links = ["Important Notes", "Sitemap", "Accessibility"];
  return (
    <ButtonGroup variant="text" aria-label="Basic button group">
      {links.map((link, index) => (
        <Button
          size="large"
          key={index}
          sx={{
            textTransform: "capitalize",
            height: 0,
            fontWeight: 600,
            color: colors.primary[900],
          }}
        >
          {link}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default observer(() => {
  return (
    <Box sx={{ mb: 4, borderTop: `1px solid ${colors.netural[100]}`, pt: 3 }}>
      <Grid
        container
        spacing={4}
        display="flex"
        justifyContent="center"
        alignItems="center"
        className="footer-fade-in"
      >
        <Grid
          item
          size={{ xs: 3, sm: 2, md: 1 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <img src="/assets/images/wcag2.1AA.png" width="100%" />
        </Grid>
        <Grid
          item
          size={{ xs: 3, sm: 2, md: 1 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <img src="/assets/images/web_for_all.png" width="100%" />
        </Grid>

        <Grid
          item
          size={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <TextLink />
        </Grid>
        <Grid item size={12} sx={{ textAlign: "center" }}>
          <Typography variant="caption2">
            Copyright © AIO Study Platform
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
});
