"use client";

import React from "react";
import { Box, Grid, Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import AppBarBar from "../components/AppBarBar"; 
import Footer from "../components/Footer";

// Sample wishlist items (could be fetched from a database or stored in state)
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
  // Add more items as needed
];

export default function Wishlist() {
  return (
    <div>
      <AppBarBar />
      <Box sx={{ flexGrow: 1, p: 12 }}>
        <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>
          Your Wishlist
        </Typography>
        <Grid container spacing={3}>
          {wishlistItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card>
                <CardMedia component="img" height="250" image={item.image} alt={item.name} />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {item.description}
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    {item.price}
                  </Typography>
                </CardContent>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ m: 2 }}
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
    </div>
  );
}
