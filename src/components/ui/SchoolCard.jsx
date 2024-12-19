import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "./Typography";
import { observer } from "mobx-react-lite";
import colors from "../../styles/colors";
import { Divider, Grid2 as Grid } from "@mui/material";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default observer(() => {
  const [saved, setSaved] = useState(false);
  return (
    <Card
      elevation={0}
      sx={{
        border: `1px solid ${colors.netural[100]}`,
        position: "relative",
        borderRadius: "8px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "56px",
          position: "absolute",
        }}
      >
        {/* Bookmark Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: colors.netural[50],
            color: colors.primary[600],
            fontSize: 0,
            width: 60,
            height: 56,
            position: "absolute",
            top: 0,
            right: 0,
            boxShadow: "none",
            borderRadius: "0 9px 0 8px",
            "&:hover": {
              boxShadow: "none",
            },
          }}
          onClick={() => setSaved(!saved)}
        >
          {saved ? (
            <BookmarkIcon sx={{ fontSize: 24 }} />
          ) : (
            <BookmarkBorderOutlinedIcon sx={{ fontSize: 24 }} />
          )}
        </Button>
      </Box>

      {/* Content Section */}
      <CardContent>
        <Typography variant="subtitle" color={colors.secondary[700]}>
          Facility Name
        </Typography>

        <Box
          sx={{
            mt: 3,
            padding: "16px 0",
          }}
        >
          <Grid container spacing={2} display="flex" alignItems="center">
            {/* Address Section */}
            <Grid item size={{ xs: 12, md: 12, lg: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "66px",
                    width: "66px",
                    borderRadius: "4px",
                    backgroundColor: colors.primary[50],
                    mr: 1,
                  }}
                >
                  <MapOutlinedIcon sx={{ fontSize: 32 }} />
                </Box>
                <Typography variant="caption1">Address Text Here</Typography>
              </Box>
            </Grid>

            {/* Last Updated Section */}
            <Grid item size={{ xs: 8, md: 4, lg: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  height: { xs: 44, md: 66 },
                  backgroundColor: colors.netural[50],
                  borderRadius: 2,
                  padding: "8px 16px",
                }}
              >
                <Box
                  sx={{
                    width: "44px",
                    height: "44px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <CheckOutlinedIcon sx={{ color: "#22C55E" }} />
                </Box>
                <Box sx={{ ml: 2 }}>
                  <Box sx={{ display: { xs: "none", sm: "block" } }}>
                    <Typography variant="caption2">Last Updated</Typography>
                  </Box>
                  <Typography variant="caption1">
                    <b>0000-00-00</b>
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Higher Education Section */}
            <Grid item size={{ xs: 12, md: "grow" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  height: 45,
                  backgroundColor: colors.netural[50],
                  borderRadius: 12,
                  padding: "8px 16px",
                  maxWidth: "276px",
                }}
              >
                <span
                  style={{ marginRight: "6px", color: colors.primary[600] }}
                >
                  ●
                </span>
                <Typography variant="caption2" color={colors.primary[600]}>
                  Higher Education Institutions
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
});
