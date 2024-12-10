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
import UpDown from "../components/UpDown";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "../components/Theme";
import { useThemeContext } from "../components/ThemeProviderWrapper";
import { useCart } from "../components/CartContext";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

const mockProducts = [
  {
    id: 1,
    name: "Camera",
    description: "Black Fujifilm Dslr Camera",
    price: 299.99, // Change to number for easier calculation
    image: "/images/pexels-photo-90946.jpeg",
  },
  {
    id: 2,
    name: "Apple Combo",
    description: "Apple Combo featuring all items from Apple c:",
    price: 4999.99,
    image: "/images/apple-iphone-smartphone-desk.jpg",
  },
  {
    id: 3,
    name: "Processor",
    description: "AMD Ryzen Processor",
    price: 250.0,
    image: "/images/ryzen_processor.avif",
  },
  {
    id: 4,
    name: "Headphones",
    description: "Wireless Headphones",
    price: 99.99,
    image: "/images/headphones.webp",
  },
  {
    id: 5,
    name: "Mouse",
    description: "Ergonomic Mouse",
    price: 49.99,
    image: "/images/mouse.jpeg",
  },
  {
    id: 6,
    name: "Keyboard",
    description: "Mechanical Keyboard",
    price: 89.99,
    image: "/images/keyboard.webp",
  },
];



export default function Products() {
  const { isDarkMode, toggleTheme } = useThemeContext();

  const { addToCart } = useCart();
  const handleAddToCart = (product: Product) => {
    addToCart(product); // This updates both the context and localStorage
    alert(`${product.name} has been added to the cart!`);
  };

  return (
    <>
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
            Products
          </Typography>
          <Grid container spacing={3}>
            {mockProducts.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Card
                  sx={{
                    backgroundColor: isDarkMode ? "#424242" : "#ffffff",
                    color: isDarkMode ? "#f5f5f5" : "#000000",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="250"
                    image={product.image || "/images/default-image.jpg"} // Fallback image
                    alt={product.name}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {product.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 1 }}
                    >
                      {product.description}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: "bold",
                        color: isDarkMode ? "#bbbbbb" : "#000000",
                      }}
                    >
                      ${product.price.toFixed(2)} {/* Ensure consistent price formatting */}
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
                    onClick={() => handleAddToCart(product)} // Add to cart
                  >
                    Add to Cart
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        <UpDown />
        <Footer />
      </ThemeProvider>
    </>
  );
}
