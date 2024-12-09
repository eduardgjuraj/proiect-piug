"use client";

import React from "react";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CssBaseline,
} from "@mui/material";
import AppBarBar from "../components/AppBarBar";
import Footer from "../components/Footer";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "../components/Theme";
import Script from "next/script"



const wishlistItems = [
  {
    id: 1,
    name: "Camera",
    description: "Black Fujifilm DSLR Camera",
    price: "$29.99",
    image: "/images/pexels-photo-90946.jpeg",
  },
  {
    id: 2,
    name: "Apple Set",
    description: "The Apple set contains the triple pack!",
    price: "$9999.99",
    image: "/images/apple-iphone-smartphone-desk.jpg",
  },
  {
    id: 3,
    name: "Keyboard",
    description: "This is a super ultra responsive keyboard :D",
    price: "$9999.99",
    image: "/images/keyboard.webp",
  },
  // Add more items as needed keyboard.webp
];

export default function Wishlist() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
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
        <Box sx={{ flexGrow: 1, p: 12 }}>
          <Typography
            variant="h4"
            sx={{
              mb: 3,
              textAlign: "center",
              color: isDarkMode ? "#f5f5f5" : "#123133",
            }}
          >
            Your Wishlist
          </Typography>
          <Grid container spacing={3}>
            {wishlistItems.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <Card
                  sx={{
                    backgroundColor: isDarkMode ? "#424242" : "#ffffff",
                    color: isDarkMode ? "#f5f5f5" : "#000000",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="250"
                    image={item.image}
                    alt={item.name}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 1 }}
                    >
                      {item.description}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: "bold",
                        color: isDarkMode ? "#bbbbbb" : "#000000",
                      }}
                    >
                      {item.price}
                    </Typography>
                  </CardContent>
                  <Button
                    variant="contained"
                    sx={{
                      m: 2,
                      color: isDarkMode ? "#000000" : "#f6f9f6",
                      bgcolor: isDarkMode ? "#bbbbbb" : "#123133",
                      "&:hover": {
                        backgroundColor: isDarkMode ? "#888888" : "#345345",
                      },
                    }}
                    onClick={() => alert(`Added ${item.name} to cart!`)}
                  >
                    Add to Cart
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Footer />
      </ThemeProvider>
    </>
  );
}
