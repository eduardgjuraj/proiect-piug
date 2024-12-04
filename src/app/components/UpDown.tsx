import React from "react";
import { Button, Box } from "@mui/material";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";

const ScrollUpDown = () => {
  const scrollUp = () => {
    window.scrollBy({
      top: -1000, // Scroll 200px up
      behavior: "smooth", // Smooth scroll effect
    });
  };

  const scrollDown = () => {
    window.scrollBy({
      top: 500, // Scroll 200px down
      behavior: "smooth", // Smooth scroll effect
    });
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 20,
        right: 20,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        zIndex: 9999, // Ensure buttons are above other elements
        "@media (max-width: 600px)": {
          bottom: 10, // Adjust for smaller screens
          right: 10, // Keep buttons inside smaller screens
        },
      }}
    >
      {/* Scroll Up Button */}
      <Button
        variant="text" // No background or border
        onClick={scrollUp}
        sx={{
          backgroundColor: "transparent", // Make background transparent
          border: "2px solid transparent", // Make border transparent
          borderRadius: "50%",
          padding: 1, // Increase padding to make button bigger
          width: 56,
          height: 56,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "transform 0.3s ease, border-color 0.3s ease",
          color: "#122132", // Set the color for text/icon
          "&:hover": {
            transform: "scale(1.1)", // Slightly increase size on hover
            color: "secondary.main", // Change color on hover
            borderColor: "secondary.main", // Highlight border on hover
          },
        }}
      >
        <ArrowUpward sx={{ fontSize: 30 }} />
      </Button>

      {/* Scroll Down Button */}
      <Button
        variant="text" // No background or border
        onClick={scrollDown}
        sx={{
          backgroundColor: "transparent", // Make background transparent
          border: "2px solid transparent", // Make border transparent
          borderRadius: "50%",
          padding: 1, // Increase padding to make button bigger
          width: 56,
          height: 56,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "transform 0.3s ease, border-color 0.3s ease",
          color: "#123123", // Set the color for text/icon
          "&:hover": {
            transform: "scale(1.1)", // Slightly increase size on hover
            color: "secondary.main", // Change color on hover
            borderColor: "secondary.main", // Highlight border on hover
          },
        }}
      >
        <ArrowDownward sx={{ fontSize: 30 }} />
      </Button>
    </Box>
  );
};

export default ScrollUpDown;
