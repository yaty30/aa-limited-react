import React, { useState, useEffect } from "react";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { observer } from "mobx-react-lite";
import LanguageMenu from "./LanguageMenu";
import { language } from "../../states/gloablStates";

const DrawerComponent = ({ pages }) => {
  const [open, setOpen] = useState(false);

  // Toggle Drawer Open/Close
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // Close Drawer when language changes
  useEffect(() => {
    setOpen(false);
  }, [language.currentLang]);

  // Render List Items
  const renderListItems = () =>
    pages.map((text, index) => (
      <ListItem key={text} disablePadding>
        <ListItemButton onClick={toggleDrawer(false)}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </ListItem>
    ));

  // Drawer List Component
  const DrawerList = (
    <Box
      sx={{
        width: 250,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      role="presentation"
    >
      {/* Navigation Links */}
      <List>{renderListItems()}</List>

      {/* Language Menu */}
      <Box sx={{ p: 2 }}>
        <LanguageMenu arrow="up" />
      </Box>
    </Box>
  );

  return (
    <>
      {/* Menu Button */}
      <IconButton
        size="large"
        aria-label="open drawer"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={toggleDrawer(true)}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>

      {/* Drawer */}
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
};

export default observer(DrawerComponent);
