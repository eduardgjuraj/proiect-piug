"use client";

import React from 'react';
import { Box, Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import AppBarBar from '../components/AppBarBar'; 
import Footer from '../components/Footer'
import UpDown from '../components/UpDown';

const mockProducts = [
  {
    id: 1,
    name: 'Camera',
    description: 'Black Fujifilm Dslr Camera',
    price: '$299.99',
    image: "/images/pexels-photo-90946.jpeg", // Correct image path
  },
  {
    id: 2,
    name: 'Apple Combo',
    description: 'Apple Combo featuring all items from Apple c:',
    price: '$4999.99',
    image: "/images/apple-iphone-smartphone-desk.jpg", // Example of fallback image
  },
  {
    id: 3,
    name: 'Fill product',
    description: "Filler",
    price: '$11.11',
    image: "/images/default-image.jpg", // Fallback image
  },
  {
    id: 4,
    name: 'Fill Product',
    description: 'Filler',
    price: '$11.11',
    image: "/images/default-image.jpg", // Fallback image
  },
  {
    id: 5,
    name: 'Fill Product',
    description: 'Filler',
    price: '$11.11',
    image: "/images/default-image.jpg", // Fallback image
  },
  {
    id: 6,
    name: 'Fill Product',
    description: 'Filler',
    price: '$11.11',
    image: "/images/default-image.jpg", // Fallback image
  },
  {
    id: 7,
    name: 'Fill Product',
    description: 'Filler',
    price: '$11.11',
    image: "/images/default-image.jpg", // Fallback image
  },
];

export default function Products() {
  return (
    <div>
      <AppBarBar />
      <Box sx={{ flexGrow: 1, p: 12 }}>
        <Typography variant="h4" sx={{ mb: 3, textAlign: 'center' }}>
          Products
        </Typography>
        <Grid container spacing={3}>
          {mockProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card>
                {/* Use a fallback image if no image is provided */}
                <CardMedia
                  component="img"
                  height="250"
                  image={product.image || "/images/default-image.jpg"} // Check for image path and fallback
                  alt={product.name}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {product.description}
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    {product.price}
                  </Typography>
                </CardContent>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ m: 2 }}
                  onClick={() => alert(`Added ${product.name} to cart!`)}
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
    </div>
  );
}
