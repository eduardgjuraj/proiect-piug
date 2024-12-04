"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  CssBaseline,
} from "@mui/material";
import AppBarBar from "../components/AppBarBar";
import Footer from "../components/Footer";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "../components/Theme";

export default function Account() {
  const [username, setUsername] = useState("JohnDoe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [password, setPassword] = useState("password");
  const [isEditing, setIsEditing] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // Dark theme toggle state

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleSubmit = () => {
    alert("Account information updated!");
    setIsEditing(false);
  };

  const handleLogout = () => {
    alert("Logged out successfully!");
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <AppBarBar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Container sx={{ pt: 12 }}>
        <Box
          sx={{
            maxWidth: 600,
            margin: "0 auto",
            backgroundColor: isDarkMode ? "#424242" : "#ffffff",
            color: isDarkMode ? "#f5f5f5" : "#000000",
            p: 4,
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              mb: 3,
              textAlign: "center",
              color: isDarkMode ? "#f5f5f5" : "#123132",
            }}
          >
            My Account
          </Typography>

          {/* Username Input */}
          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            disabled={!isEditing}
            sx={{
              mb: 2,
              input: { color: isDarkMode ? "#f5f5f5" : "#000000" },
              "& .MuiInputLabel-root": {
                color: isDarkMode ? "#bbbbbb" : "#000000",
              },
            }}
          />

          {/* Email Input */}
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            disabled={!isEditing}
            sx={{
              mb: 2,
              input: { color: isDarkMode ? "#f5f5f5" : "#000000" },
              "& .MuiInputLabel-root": {
                color: isDarkMode ? "#bbbbbb" : "#000000",
              },
            }}
          />

          {/* Password */}
          <TextField
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            disabled={!isEditing}
            sx={{
              mb: 2,
              input: { color: isDarkMode ? "#f5f5f5" : "#000000" },
              "& .MuiInputLabel-root": {
                color: isDarkMode ? "#bbbbbb" : "#000000",
              },
            }}
            type="password"
          />

          {/* Edit/Save button */}
          <Box sx={{ textAlign: "center", mb: 2 }}>
            {isEditing ? (
              <Button
                variant="contained"
                sx={{
                  color: isDarkMode ? "#000000" : "#f6f9f6",
                  bgcolor: isDarkMode ? "#bbbbbb" : "#112312",
                  "&:hover": {
                    backgroundColor: isDarkMode ? "#888888" : "#345345",
                  },
                }}
                onClick={handleSubmit}
              >
                Save Changes
              </Button>
            ) : (
              <Button
                variant="outlined"
                sx={{
                  color: isDarkMode ? "#bbbbbb" : "#123132",
                  borderColor: isDarkMode ? "#bbbbbb" : "#123132",
                }}
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </Button>
            )}
          </Box>

          {/* Logout button */}
          <Box sx={{ textAlign: "center" }}>
            <Button
              variant="outlined"
              sx={{
                color: isDarkMode ? "#bbbbbb" : "#123132",
                borderColor: isDarkMode ? "#bbbbbb" : "#123132",
              }}
              onClick={handleLogout}
            >
              Log Out
            </Button>
          </Box>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
