import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  useUser,
  SignedIn,
  SignedOut,
  SignInButton,
  useClerk,
} from "@clerk/clerk-react";
import { useTheme } from "./ThemeContext";

const Navbar = () => {
  const { user } = useUser();
  const { signOut } = useClerk();
  const [anchorEl, setAnchorEl] = useState(null);
  const { theme, toggleTheme } = useTheme();

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoSrc =
    theme === "light"
      ? "../../src/assets/Logo.png"
      : "../../src/assets/Logo2.png";

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: theme === "light" ? "white" : "#333",
        color: theme === "light" ? "black" : "white",
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <img
            src={logoSrc}
            alt="Recipe Finder"
            style={{ height: "40px", width: "auto" }}
          />
        </Box>
      

        <SignedIn>
          {user && (
            <>
              <Button
                onClick={toggleTheme}
                variant="contained"
                sx={{ marginRight: 2 }}
              >
                {theme === "light" ? "Dark Mode" : "Light Mode"}
              </Button>
              <Avatar
                src={user?.imageUrl}
                alt="Profile"
                onClick={handleProfileClick}
                sx={{ cursor: "pointer" }}
              />
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </>
          )}
        </SignedIn>
        <SignedOut>
          <SignInButton>
            <Button variant="outlined" color="primary">
              Login
            </Button>
          </SignInButton>
        </SignedOut>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
