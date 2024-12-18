import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from "@mui/material";

// icons
import MenuIcon from "@mui/icons-material/Menu";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LoginIcon from "@mui/icons-material/Login";

// components
import LanguageMenu from "./LanguageMenu";
import ResponsiveMenu from "./ResponsiveMenu";

// styles
import { header } from "../../styles/Common";
import colors from "./colors";

// states
import { observer } from "mobx-react-lite";
import { states } from "../../states/gloablStates";
import { routes } from "../../states/routes";

const pages = ["Contact Us", "Login"];
const items = ["Home", "About us", "Schools", "Media Highlights", "Help"];

export default observer(() => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const PageMenu = () => {
    return (
      <Box
        sx={{
          backgroundColor: colors.primary[50],
          height: "56px",
          width: "100%",
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {items.map((item, index) => (
          <Button
            variant="text"
            key={item}
            onClick={() => {
              routes.setCurrentPage(`/${item}`);
            }}
            sx={{
              mx: 3,
              textTransform: "capitalize",
              fontWeight: 600,
              fontSize: 20,
              color: colors.netural[800],
            }}
          >
            {item}
          </Button>
        ))}
      </Box>
    );
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          color: "black",
        }}
        elevation={0}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Responsive, window size: md */}
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <img src="/assets/images/Logo.png" style={header.logo.md} />
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "block", md: "none" },
                position: "absolute",
              }}
            >
              {/* Responsive, window size: xs */}
              <ResponsiveMenu pages={items} />
            </Box>

            {/* Responsive, window size: xs */}
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                justifyContent: "center",
              }}
            >
              <img src="/assets/images/Logo.png" style={header.logo.xs} />
            </Box>

            {/* Responsive, window size: md */}
            <Box
              sx={{
                flexGrow: 1,
                justifyContent: "flex-end",
                alignItems: "center",
                display: { xs: "none", md: "flex" },
              }}
            >
              <Box sx={{ my: 2, color: "white", display: "block", mx: 2 }}>
                <LanguageMenu arrow="down" />
              </Box>

              {pages.map((page, index) => (
                <Button
                  key={index}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    mx: 2,
                    fontWeight: "bold",
                    color:
                      index === 0 ? colors.primary[900] : colors.netural.white,
                    backgroundColor:
                      index === 1 ? colors.primary[700] : "transparent",
                    textTransform: "capitalize",
                  }}
                  startIcon={index === 0 && <LocalPhoneIcon />}
                  endIcon={index === 1 && <LoginIcon />}
                  variant={index === 0 ? "text" : "contained"}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <PageMenu />
      </Box>
    </>
  );
});
