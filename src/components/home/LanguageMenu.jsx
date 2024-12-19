import React, { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { observer } from "mobx-react-lite";

// State
import { language } from "../../states/gloablStates";

// Styles
import colors from "../../styles/colors";

const LanguageMenu = ({ arrow }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // Handlers
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (lang) => {
    language.setCurrentLang(lang);
    // Uncomment the following line if `i18n` is integrated
    // i18n.changeLanguage(language.getCurrentLanguage());
    handleClose();
  };

  return (
    <div>
      {/* Language Menu Button */}
      <Button
        id="lang-menu-button"
        aria-haspopup="true"
        aria-controls={open ? "language-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        startIcon={<LanguageIcon sx={{ color: colors.primary[600] }} />}
        endIcon={
          arrow === "up" ? (
            <ArrowDropUpIcon sx={{ color: colors.netural[800] }} />
          ) : (
            <ArrowDropDownIcon sx={{ color: colors.netural[800] }} />
          )
        }
        variant="outlined"
        size="medium"
        sx={{
          borderRadius: 2,
          color: colors.primary[900],
          borderColor: colors.netural[300],
          width: { xs: "100%", md: 100 },
        }}
      >
        {language.getCurrentLanguage()}
      </Button>

      {/* Language Selection Menu */}
      <Menu
        id="lang-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "language-button",
        }}
        sx={{
          "& .MuiMenu-paper": {
            mt: 1,
            width: 100,
            borderRadius: 2,
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            border: `1px solid ${colors.netural[300]}`,
          },
        }}
      >
        {language.languages
          .filter((lang) => lang.id !== language.currentLang) // Exclude the current language
          .map((lang) => (
            <MenuItem
              key={lang.id}
              onClick={() => handleChange(lang.id)}
              sx={{
                display: "flex",
                justifyContent: "center",
                color: colors.primary[900],
              }}
            >
              {lang.name}
            </MenuItem>
          ))}
      </Menu>
    </div>
  );
};

export default observer(LanguageMenu);
