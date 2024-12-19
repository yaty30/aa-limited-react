import React, { useState } from "react";
import { Box, Grid2 as Grid } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import AddIcon from "@mui/icons-material/Add";
import CircularProgress from "@mui/material/CircularProgress";

import { observer } from "mobx-react-lite";
import SchoolCard from "../ui/SchoolCard";
import Typography from "../ui/Typography";
import colors from "../../styles/colors";
import { getData } from "../../apis/apis";
import { schools } from "../../states/school";
import { states } from "../../states/gloablStates";

export default observer(() => {
  const moreDisable = schools.currentListLength >= schools.list.length;
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
        padding: {
          xs: "40px",
          sm: "80px",
        },
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
              mb: 2,
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
        {states.getDataLoading ? (
          <Grid item size={12} display="flex" justifyContent="center">
            <CircularProgress sx={{ color: colors.primary[700] }} />
          </Grid>
        ) : (
          <>
            {schools.getList().map((item, index) => (
              <>
                <Grid item size={12} key={index}>
                  <SchoolCard data={item} />
                </Grid>
              </>
            ))}
            <Grid item size={12}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                {moreDisable ? (
                  <Button disabled sx={{mt: 1}}> - End of list - </Button>
                ) : (
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<AddIcon />}
                    sx={{
                      backgroundColor: colors.netural.white,
                      color: colors.primary[700],
                      fontWeight: 600,
                      border: `1px solid ${colors.primary[700]}`,
                      boxShadow: "none",
                    }}
                    disabled={moreDisable}
                    onClick={() => {
                      schools.setCurrentListLength();
                    }}
                  >
                    More
                  </Button>
                )}
              </Box>
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
});
