import React from "react";
import { Box, Button, Grid2 as Grid, useMediaQuery } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { observer } from "mobx-react-lite";
import { useTheme } from "@mui/material/styles";
import colors from "../../styles/colors";
import Typography from "../ui/Typography";

const backgroundImage = "/assets/images/Banner Background Image.png";

const Hero = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  // Helper function to handle responsive styles
  const ismd = (mdStyle, otherStyle) => (isSmallScreen ? mdStyle : otherStyle);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "auto", md: "620px", lg: "720px" },
        backgroundImage: `url("${backgroundImage}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        zIndex: 0,
      }}
      className="hero-fade-in"
    >
      <Box sx={{ padding: "0 60px" }}>
        <Grid
          container
          spacing={0}
          sx={{
            position: "relative",
            zIndex: 1,
            height: "620px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid item size={{ xs: 12 }} className="hero-text-fade-in">
            <Box sx={{ maxWidth: 640 }}>
              {/* Welcome Message */}
              <Box sx={{ my: 1 }}>
                <Typography variant={ismd("label2", "subtitle")}>
                  Welcome to the AIO Study Platform
                </Typography>
              </Box>

              {/* Heading */}
              <Box sx={{ my: 1 }}>
                <Typography
                  variant={ismd("heading3", "heading1")}
                  color={colors.primary[700]}
                >
                  All-in-One Platform for Self-Learners
                </Typography>
              </Box>

              {/* Description */}
              <Box sx={{ my: 1 }}>
                <Typography variant={ismd("caption1", "body1")}>
                  Lorem ipsum dolor sit amet consectetur. Pellentesque velit id
                  sodales et at fermentum. Sed id egestas nec odio sit.
                </Typography>
              </Box>

              {/* Read More Button */}
              <Box sx={{ my: 2 }}>
                <Button
                  variant="contained"
                  size={ismd("small", "large")}
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    textTransform: "capitalize",
                    backgroundColor: colors.primary[700],
                    height: 56,
                    fontWeight: 600,
                    fontSize: 20,
                  }}
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
};

export default observer(Hero);
