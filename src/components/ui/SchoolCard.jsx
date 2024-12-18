import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "./Typography";
import { observer } from "mobx-react-lite";
import colors from "../../styles/colors";
import { Divider } from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default observer(() => {
  return (
    <Card elevation={0} sx={{ border: `1px solid ${colors.netural[100]}` }}>
      <CardContent>
        <Typography variant="subtitle" color={colors.secondary[700]}>
          Facility Name
        </Typography>

        <Box sx={{ width: "100%", backgroundColor: "lightcoral" }}>
          Address Text Here
        </Box>
      </CardContent>
    </Card>
  );
});
