import * as React from "react";
import { AppBar, Toolbar, Box, Button, IconButton, Container } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import Link from "next/link";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import TextField from "@mui/material/TextField"; // Search bar
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const pages = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Wishlist", path: "/wishlist" },
  { name: "Contact", path: "/contact" },
  { name: "Account", path: "/account" },
];

function ResponsiveAppBar() {

  const [openDialog, setOpenDialog] = React.useState(false);
  const [openDrawer, setOpenDrawer] = React.useState(false); // Drawer state for mobile
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
        bgcolor: "rgba(0, 0, 0, 0.8)", // Dark transparent background
        boxShadow: 0, // No shadow
        borderRadius: "8px", // Rounded corners
        backdropFilter: "blur(8px)", // Blur effect
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", padding: "0 16px" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AdbIcon sx={{ mr: 2, color: "white" }} />
            <Link href="#" passHref>
              <Button sx={{ color: "white", fontWeight: "bold" }}>EG</Button>
            </Link>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            {pages.map((page) => (
              <Link key={page.name} href={page.path} passHref>
                <Button
                  sx={{
                    color: "white",
                    textTransform: "none", // Disable text transformation
                    "&:hover": {
                      color: "#ff4081", // On hover color
                    },
                  }}
                >
                  {page.name}
                </Button>
              </Link>
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
                  backgroundColor: "white",
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

           {/* Help Icon Button */}
           <IconButton color="inherit" onClick={handleOpenDialog}>
            <HelpOutlineIcon />
          </IconButton>

        </Toolbar>
      </Container>

       {/* Dialog (Custom Alert) */}
       <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Help</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            <Typography> Here is some helpful information about the site and how to use it.</Typography>
            <Typography> <b>Home </b> → This is the main page!</Typography>
            <Typography> <b>Products</b> → Here is where you buy products!</Typography>
            <Typography> <b>Contact</b> → Here you can contact us!</Typography>
            <Typography> <b>Account</b> → Here you can change details about your account!</Typography>
            <Typography> <b>Wishlist</b> → Here are the items on your wishlist!</Typography>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

    </AppBar>
  );
}

export default ResponsiveAppBar;
