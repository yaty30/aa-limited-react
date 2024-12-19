import React, { useState } from "react";
import { AppBar, Box, Toolbar, Button, Container } from "@mui/material";

// Icons
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LoginIcon from "@mui/icons-material/Login";

// Components
import LanguageMenu from "./LanguageMenu";
import ResponsiveMenu from "./ResponsiveMenu";

// Styles
import { header } from "../../styles/Common";
import colors from "../../styles/colors";

// States
import { observer } from "mobx-react-lite";
import { routes } from "../../states/routes";

const pages = ["Contact Us", "Login"];
const items = ["Home", "About us", "Schools", "Media Highlights", "Help"];

const LinkStyles = {
  normal: {
    mx: 3,
    textTransform: "capitalize",
    fontWeight: 600,
    fontSize: 20,
    color: colors.netural[800],
    borderRadius: 0,
    borderBottom: "2px solid transparent",
    "&:hover": {
      color: colors.primary[700],
      borderBottomColor: colors.primary[600],
      backgroundColor: "transparent",
      height: "auto",
    },
  },
  current: {
    mx: 3,
    textTransform: "capitalize",
    fontWeight: 600,
    fontSize: 20,
    borderRadius: 0,
    borderBottom: "2px solid",
    color: colors.primary[700],
    borderBottomColor: colors.primary[600],
    backgroundColor: "transparent",
    height: "auto",
  },
};

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  // Menu Handlers
  const handleCloseNavMenu = () => setAnchorElNav(null);

  // Page Menu Component
  const PageMenu = () => (
    <Box
      sx={{
        backgroundColor: colors.primary[50],
        width: "100%",
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {items.map((item, index) => (
        <Button
          key={item}
          variant="text"
          onClick={() => routes.setCurrentPage(index)}
          sx={
            index === routes.currentPage
              ? LinkStyles.current
              : LinkStyles.normal
          }
        >
          {item}
        </Button>
      ))}
    </Box>
  );

  return (
    <Box className="header-fade-in">
      {/* AppBar Section */}
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
            {/* Logo for md+ screens */}
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <img src="/assets/images/Logo.png" style={header.logo.md} />
            </Box>

            {/* Responsive Menu for xs screens */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "block", md: "none" },
                position: "absolute",
              }}
            >
              <ResponsiveMenu pages={items} />
            </Box>

            {/* Centered Logo for xs screens */}
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                justifyContent: "center",
              }}
            >
              <img src="/assets/images/Logo.png" style={header.logo.xs} />
            </Box>

            {/* Navigation for md+ screens */}
            <Box
              sx={{
                flexGrow: 1,
                justifyContent: "flex-end",
                alignItems: "center",
                display: { xs: "none", md: "flex" },
              }}
            >
              {/* Language Menu */}
              <Box sx={{ my: 2, mx: 2 }}>
                <LanguageMenu arrow="down" />
              </Box>

              {/* Contact Us and Login Buttons */}
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

      {/* Page Menu for md+ screens */}
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <PageMenu />
      </Box>
    </Box>
  );
};

// Wrap the component with observer
export default observer(Header);
