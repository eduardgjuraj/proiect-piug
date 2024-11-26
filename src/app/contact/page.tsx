"use client";

import React, { useState } from "react";
import {TextField, Button, Typography, Container, Grid, Paper } from "@mui/material";
import AppBarBar from "../components/AppBarBar";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [openDialog, setOpenDialog] = useState(false); // Dialog visibility state

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
    <div>
      <AppBarBar />
      <Container maxWidth="md" sx={{ py: 12 }}>
        <Typography variant="h4" sx={{ mb: 4, textAlign: "center" }}>
          Contact Us - EG Shop
        </Typography>
        <Paper sx={{ p: 4, boxShadow: 3 }}>
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
                />
              </Grid>

              {/* Submit Button */}
              <Grid item xs={12}>
                <Button variant="contained" color="primary" fullWidth type="submit">
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>

       {/* Custom Dialog */}
       <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Message Sent</DialogTitle>
        <DialogContent>
          <Typography variant="body1">Your message has been successfully sent. We will get back to you soon.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Footer />
    </div>
  );
};

export default Contact;
