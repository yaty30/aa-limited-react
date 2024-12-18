import React, { useState } from "react";
import { Box, Grid2 as Grid } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import { observer } from "mobx-react-lite";
import SchoolCard from "../ui/SchoolCard";
import Typography from "../ui/Typography";
import colors from "../../styles/colors";

export default observer(() => {
  return (
    <Box
      sx={{
        display: "flex",
        flexGrow: 1,
        minHeight: "500px",
        background: "linear-gradient(180deg, #FEF3C7 0%, #FFFFFF 100%)",
        position: "relative",
        bottom: 90,
        alignItems: "stretch",
        padding: "80px",
      }}
    >
      <Grid container spacing={2} sx={{ width: "100%" }}>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              mb: 2
            }}
          >
            <Typography variant="heading2">Popular schools</Typography>
            <Box sx={{ ml: 2 }}>
              <Tooltip
                title="Here is the tooltip for additional information explanation"
                placement="right"
                arrow
              >
                <HelpIcon
                  sx={{ fontSize: "26px", color: colors.primary[700] }}
                />
              </Tooltip>
            </Box>
          </Box>
        </Grid>
        {["A", "B", "C", "D"].map((item, index) => (
          <Grid item size={12} key={index}>
            <SchoolCard />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
});
