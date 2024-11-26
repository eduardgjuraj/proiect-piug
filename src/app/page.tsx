"use client";

import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Container, Paper } from '@mui/material';
import AppBarBar from './components/AppBarBar';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import Footer from './components/Footer';
import UpDown from './components/UpDown';

// Sample Product Data
const products = [
  {
    id: 1,
    name: 'Camera',
    description: 'Black Fujifilm Dslr Camera',
    price: '$29.99',
    image: '/images/pexels-photo-90946.jpeg',
  },
  {
    id: 2,
    name: 'The Apple Set',
    description: 'Apple Set containing the triple combo c:',
    price: '$9999.99',
    image: '/images/apple-iphone-smartphone-desk.jpg',
  },
  {
    id: 3,
    name: 'Filler 1',
    description: 'Filler 1',
    price: '',
    image: '/images/default-image.jpg',
  },
  {
    id: 4,
    name: 'Filler 2',
    description: 'Filler 2',
    price: '',
    image: '/images/default-image.jpg',
  },
];

export default function Home() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Wait for all images to load before displaying the carousel
  useEffect(() => {
    const images = products.map((product) => product.image);
    const loadImages = images.map((imgSrc) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = imgSrc;
        img.onload = resolve;
      });
    });

    Promise.all(loadImages).then(() => {
      setIsImageLoaded(true);
    });
  }, []);

  return (
    <div>
      <AppBarBar />
      <Container sx={{ pt: 12 }}>

        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
            Welcome to EG Store
          </Typography>
          <Typography variant="h6" sx={{ color: '#555', mt: 2 }}>
            Discover amazing products at unbeatable prices. Shop now and get the best deals!
          </Typography>
        </Box>

        {/* Featured Products - Carousel */}
        <Typography variant="h4" sx={{ textAlign: 'center', mb: 4, color: '#1976d2' }}>
          Featured Products
        </Typography>

        {/* Conditionally render carousel only after images are loaded */}
        {isImageLoaded ? (
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              600: {
                slidesPerView: 2,
              },
              900: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    width="100%"
                    height="200"
                    style={{ objectFit: 'cover' }}
                  />
                  <Typography variant="h6" sx={{ mt: 2 }}>
                    {product.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#555' }}>
                    {product.description}
                  </Typography>
                  <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                    Add to Cart
                  </Button>
                </Paper>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Typography variant="h6" sx={{ textAlign: 'center' }}>
            Loading images...
          </Typography>
        )}
      </Container>
      <UpDown />
      <Footer />
    </div>
  );
}
