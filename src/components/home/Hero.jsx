import React from "react";
import { Box, Button, Grid2 as Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { observer } from "mobx-react-lite";
import colors from "./colors";

import Typography from "../ui/Typography";

const backgroundImage = "/assets/images/Banner Background Image.png";

export default observer(() => {
  return (
    <Box>
      <img
        src={backgroundImage}
        width="100%"
        style={{
          position: "absolute",
          zIndex: 0,
          height: { xs: "auto", md: "620px" },
        }}
      />
      {/* Content Box */}
      <Box sx={{ padding: "0 60px" }}>
        <Grid
          container
          spacing={0}
          sx={{
            position: "relative",
            zIndex: 1,
            //   backgroundColor: "lightblue",
            height: "620px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid item size={{ xs: 12 }}>
            <Box sx={{ maxWidth: 640 }}>
              <Box sx={{ my: 1 }}>
                <Typography variant="subtitle">
                  Welcome to the AIO Study Platform
                </Typography>
              </Box>
              <Box sx={{ my: 1 }}>
                <Typography variant="heading1" color={colors.primary[700]}>
                  All-in-One Platform for Self-Learners
                </Typography>
              </Box>
              <Box sx={{ my: 1 }}>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet consectetur. Pellentesque velit id
                  sodales et at fermentum. Sed id egestas nec odio sit.
                </Typography>
              </Box>

              <Box sx={{ my: 2 }}>
                <Button
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
                  sx={{ textTransform: "capitalize" }}
                >
                  Read More
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
});
