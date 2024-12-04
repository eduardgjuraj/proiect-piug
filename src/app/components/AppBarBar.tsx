"use client";

import * as React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Container,
  TextField,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Switch,
} from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { usePathname } from "next/navigation";

interface ResponsiveAppBarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const pages = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Wishlist", path: "/wishlist" },
  { name: "Contact", path: "/contact" },
  { name: "Account", path: "/account" },
];

function ResponsiveAppBar({ isDarkMode, toggleTheme }: ResponsiveAppBarProps) {
  const pathname = usePathname(); // Get the current pathname
  const [openDialog, setOpenDialog] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState(""); // Search query

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search query:", searchQuery);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: isDarkMode ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.8)",
        color: isDarkMode ? "white" : "black",
        boxShadow: 1,
        borderRadius: "1px",
        backdropFilter: "blur(8px)",
        height: "56px",
        marginTop: "10px",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0 8px",
            minHeight: "56px",
          }}
        >
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button
              sx={{ color: isDarkMode ? "white" : "black", fontWeight: "bold" }}
              href="/"
            >
              EG
            </Button>
          </Box>

          {/* Navigation Buttons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                href={page.path}
                sx={{
                  color:
                    pathname === page.path
                      ? "#ff4081"
                      : isDarkMode
                      ? "white"
                      : "black",
                  fontWeight: pathname === page.path ? "bold" : "normal",
                  textTransform: "none",
                  "&:hover": {
                    color: "#ff4081",
                  },
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* Search Bar */}
          <Box sx={{ flexGrow: 0 }}>
            <form onSubmit={handleSearchSubmit}>
              <TextField
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search..."
                variant="outlined"
                size="small"
                sx={{
                  backgroundColor: isDarkMode ? "#444" : "white",
                  borderRadius: "4px",
                  marginLeft: "8px",
                  width: "200px",
                  transition: "width 0.3s ease",
                  "&:focus-within": {
                    width: "250px",
                  },
                }}
              />
            </form>
          </Box>

          {/* Theme Switch */}
          <Box>
            <Typography
              variant="body2"
              sx={{ color: isDarkMode ? "white" : "black", marginRight: 1 }}
            >
              {isDarkMode ? "Dark" : "Light"} Mode
            </Typography>
            <Switch checked={isDarkMode} onChange={toggleTheme} />
          </Box>

          {/* Help Icon Button */}
          <IconButton
            sx={{ color: isDarkMode ? "white" : "black" }}
            onClick={handleOpenDialog}
          >
            <HelpOutlineIcon />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Dialog (Custom Alert) */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Help</DialogTitle>
        <DialogContent>
          <Typography variant="body1" component="div">
            Here is some helpful information about the site and how to use it.
            <br />
            <b>Home </b> → This is the main page! <br />
            <b>Products</b> → Here is where you buy products! <br />
            <b>Contact</b> → Here you can contact us! <br />
            <b>Account</b> → Here you can change details about your account!{" "}
            <br />
            <b>Wishlist</b> → Here are the items on your wishlist! <br />
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ color: isDarkMode ? "white" : "black" }}
            onClick={handleCloseDialog}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </AppBar>
  );
}

export default ResponsiveAppBar;
