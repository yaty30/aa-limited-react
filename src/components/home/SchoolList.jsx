import React from "react";

// Material-UI Components
import {
  Box,
  Button,
  Tooltip,
  CircularProgress,
  Grid2 as Grid,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

// Material-UI Icons
import HelpIcon from "@mui/icons-material/Help";
import AddIcon from "@mui/icons-material/Add";

// MobX
import { observer } from "mobx-react-lite";

// Custom Components
import SchoolCard from "../ui/SchoolCard";
import Typography from "../ui/Typography";

// Styles and State
import colors from "../../styles/colors";
import { schools } from "../../states/school";
import { states } from "../../states/gloablStates";

const SchoolList = () => {
  // Determine if the "More" button should be disabled
  const moreDisable = schools.searchTarget
    ? schools.currentListLength >= schools.searchedListLength()
    : schools.currentListLength >= schools.list.length;

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  // Helper function to handle responsive styles
  const ismd = (mdStyle, otherStyle) => (isSmallScreen ? mdStyle : otherStyle);

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
      <Grid
        container
        spacing={2}
        sx={{ width: "100%" }}
        className="school-list"
      >
        {/* Title Section */}
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
            <Typography variant={ismd("heading3", "heading1")}>
              Popular schools
            </Typography>
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

        {/* Loading State */}
        {states.getDataLoading ? (
          <Grid item size={12} display="flex" justifyContent="center">
            <CircularProgress sx={{ color: colors.primary[700] }} />
          </Grid>
        ) : (
          <>
            {/* School Cards */}
            {schools.getList().map((item, index) => (
              <Grid item size={12} key={index}>
                <SchoolCard data={item} />
              </Grid>
            ))}

            {/* "More" Button or End of List Message */}
            <Grid item size={12}>
              <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                {moreDisable ? (
                  <Button disabled sx={{ mt: 1 }}>
                    - End of list -
                  </Button>
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
};

export default observer(SchoolList);
