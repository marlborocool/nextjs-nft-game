import Drawer from "@mui/material/Drawer";
import React, { useState } from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import Link from "next/link";

export default function QuestSidebar() {
  const [state, setState] = useState({ right: false });

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = () => (
    <div
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer("left", false)}
      onKeyDown={toggleDrawer("left", false)}
      className="quest-sidebar"
    >
      <div className="quest-header sidebar-border-top">
        <List>
          <ListItem disablePadding>
            <ListItemButton className="mobile-navbar">
              <Link href="/content">About</Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton className="mobile-navbar">
              Game
            </ListItemButton>
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <Link href="/roadmap">Roadmap</Link>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <Link href="/content2">Tokenomics</Link>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <Link href="/team">Team</Link>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <Link href="/omnichain">Omnichain</Link>
              </ListItemButton>
            </List>
          </Collapse>
          <ListItem disablePadding>
            <ListItemButton className="mobile-navbar">
              <Link href="/mint">Mint</Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton className="mobile-navbar">
              <Link href="/calculator">Calculator</Link>
            </ListItemButton>
          </ListItem>
        </List>
      </div>
    </div>
  );

  return (
    <React.Fragment>
      <IconButton
        {...{
          edge: "start",
          color: "inherit",
          "aria-label": "menu",
          "aria-haspopup": "true",
        }}
        onClick={toggleDrawer("left", true)}
        className="hamburger-button"
      >
        <MenuIcon fontSize='large' />
      </IconButton>

      <Drawer
        anchor="left"
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list()}
      </Drawer>
    </React.Fragment>
  );
}

