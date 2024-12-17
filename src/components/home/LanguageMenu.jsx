import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { observer } from "mobx-react-lite";

import LanguageIcon from "@mui/icons-material/Language";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

// state
import { language } from "../../states/gloablStates";

// styles
import colors from "./colors";

export default observer(({ arrow }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleChange = (lang) => {
    language.setCurrentLang(lang);
    handleClose();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
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
          .filter((lang) => lang.id !== language.currentLang) // Exclude currentLang
          .map((lang) => (
            <MenuItem
              value={lang.id}
              key={lang.name}
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
});
