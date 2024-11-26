"use client";
import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Container } from '@mui/material';
import AppBarBar from '../components/AppBarBar';
import Footer from '../components/Footer';

export default function Account() {
  const [username, setUsername] = useState('JohnDoe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [isEditing, setIsEditing] = useState(false);
  const [password, setPassword] = useState('password');

  const handleSubmit = () => {
    // Handle the form submission (like updating profile or logging out)
    alert('Account information updated!');
    setIsEditing(false); // Disable editing after submission
  };

  const handleLogout = () => {
    // Handle logout functionality 
    alert('Logged out successfully!');
  };

  

  return (
    <div>
      <AppBarBar />
      <Container sx={{ pt: 12 }}>
        <Box sx={{ maxWidth: 600, margin: '0 auto' }}>
          <Typography variant="h4" sx={{ mb: 3, textAlign: 'center' }}>
            My Account
          </Typography>
          
          {/* Username Input */}
          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            disabled={!isEditing}
            sx={{ mb: 2 }}
          />

          {/* Email Input */}
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            disabled={!isEditing}
            sx={{ mb: 2 }}
          />

          { /* Password */}
          <TextField
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            disabled={!isEditing}
            sx={{ mb: 2}}
            type="password"
            />

          {/* Edit/Save button */}
          <Box sx={{ textAlign: 'center', mb: 2 }}>
            {isEditing ? (
              <Button variant="contained" color="primary" onClick={handleSubmit}>
                Save Changes
              </Button>
            ) : (
              <Button variant="outlined" onClick={() => setIsEditing(true)}>
                Edit Profile
              </Button>
            )}
          </Box>

          {/* Logout button */}
          <Box sx={{ textAlign: 'center' }}>
            <Button variant="outlined" color="secondary" onClick={handleLogout}>
              Log Out
            </Button>
          </Box>
        </Box>
      </Container>
      <Footer />
    </div>
  );
}
