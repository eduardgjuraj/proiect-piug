"use client";

import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  Paper,
  CssBaseline,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import AppBarBar from "../components/AppBarBar";
import Footer from "../components/Footer";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "../components/Theme";
import Script from "next/script"


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [openDialog, setOpenDialog] = useState(false); // Dialog visibility state
  const [isDarkMode, setIsDarkMode] = useState(false); // Theme toggle state

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open the dialog on form submission
    setOpenDialog(true);
    // Here you can handle sending the form data to the backend if needed
  };

  const handleCloseDialog = () => {
    setOpenDialog(false); // Close the dialog
    setFormData({ name: "", email: "", message: "" }); // Optionally, reset form data
  };

  return (
    <>
      {/* Google Analytics Script */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-ML4L1C2P4M"
        strategy="afterInteractive"
      />
      <Script id="ga4-setup" strategy="afterInteractive">
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-ML4L1C2P4M', {
    page_path: window.location.pathname,
  });
`}
      </Script>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <AppBarBar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <Container maxWidth="md" sx={{ py: 12 }}>
          <Typography
            variant="h4"
            sx={{
              mb: 4,
              textAlign: "center",
              color: isDarkMode ? "#f5f5f5" : "#123133",
            }}
          >
            Contact Us - EG Shop
          </Typography>
          <Paper
            sx={{
              p: 4,
              boxShadow: 3,
              backgroundColor: isDarkMode ? "#424242" : "#ffffff",
              color: isDarkMode ? "#f5f5f5" : "#000000",
            }}
          >
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                {/* Name Field */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    variant="outlined"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    InputLabelProps={{
                      style: { color: isDarkMode ? "#bbbbbb" : "#000000" },
                    }}
                    sx={{
                      input: { color: isDarkMode ? "#f5f5f5" : "#000000" },
                    }}
                  />
                </Grid>

                {/* Email Field */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Your Email"
                    variant="outlined"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    required
                    InputLabelProps={{
                      style: { color: isDarkMode ? "#bbbbbb" : "#000000" },
                    }}
                    sx={{
                      input: { color: isDarkMode ? "#f5f5f5" : "#000000" },
                    }}
                  />
                </Grid>

                {/* Message Field */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Your Message"
                    variant="outlined"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    required
                    InputLabelProps={{
                      style: { color: isDarkMode ? "#bbbbbb" : "#000000" },
                    }}
                    sx={{
                      textarea: { color: isDarkMode ? "#f5f5f5" : "#000000" },
                    }}
                  />
                </Grid>

                {/* Submit Button */}
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    sx={{
                      color: isDarkMode ? "#000000" : "#f6f9f6",
                      bgcolor: isDarkMode ? "#bbbbbb" : "#123133",
                      "&:hover": {
                        backgroundColor: isDarkMode ? "#888888" : "#345345",
                      },
                    }}
                    fullWidth
                    type="submit"
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Container>

        {/* Custom Dialog */}
        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          PaperProps={{
            style: {
              backgroundColor: isDarkMode ? "#424242" : "#ffffff",
              color: isDarkMode ? "#f5f5f5" : "#000000",
            },
          }}
        >
          <DialogTitle>Message Sent</DialogTitle>
          <DialogContent>
            <Typography variant="body1">
              Your message has been successfully sent. We will get back to you
              soon.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleCloseDialog}
              sx={{
                color: isDarkMode ? "#f5f5f5" : "#123133",
              }}
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Contact;
