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
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { usePathname, useRouter } from "next/navigation";
import SearchBar from "./SearchBar";


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
  const pathname = usePathname();
  const [openDialog, setOpenDialog] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const router = useRouter();

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
  if (searchQuery.trim()) {
    // Redirect to a search results page with the query as a parameter
    router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
  } else {
    alert("Please enter a search term.");
  }
  };

  const toggleDrawer = (open: boolean) => () => {
    setIsDrawerOpen(open);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: isDarkMode ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.8)",
          color: isDarkMode ? "white" : "black",
          boxShadow: 1,
          borderRadius: "1px",
          backdropFilter: "blur(8px)",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0 8px",
            }}
          >
            {/* Logo */}
            <Button
              sx={{
                color: isDarkMode ? "white" : "black",
                fontWeight: "bold",
                textTransform: "none",
              }}
              href="/"
            >
              EG
            </Button>

            {/* Navigation Buttons or Menu Icon */}
            {isSmallScreen ? (
              <IconButton
                sx={{ color: isDarkMode ? "white" : "black" }}
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            ) : (
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
            )}

            {/* Search Bar */}
            {!isSmallScreen && (
              <Box>
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
                      width: "200px",
                    }}
                  />
                </form>
              </Box>
            )}

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
      </AppBar>

      {/* Drawer for Small Screens */}
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, p: 2 }} role="presentation">
          {/* Search Bar */}
          <Box sx={{ mb: 2 }}>
            <form onSubmit={handleSearchSubmit}>
              <TextField
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search..."
                variant="outlined"
                size="small"
                fullWidth
                sx={{
                  backgroundColor: isDarkMode ? "#444" : "white",
                  borderRadius: "4px",
                }}
              />
            </form>
          </Box>

          {/* Menu Items */}
          <List>
            {pages.map((page) => (
              <ListItem key={page.name} disablePadding>
                <ListItemButton href={page.path}>
                  <ListItemText
                    primary={page.name}
                    sx={{
                      color:
                        pathname === page.path
                          ? "#ff4081"
                          : isDarkMode
                          ? "white"
                          : "black",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Dialog */}
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
    </>
  );
}

export default ResponsiveAppBar;
