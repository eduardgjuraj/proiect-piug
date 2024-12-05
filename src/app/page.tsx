"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Paper,
  CssBaseline,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import AppBarBar from "./components/AppBarBar";
import Footer from "./components/Footer";
import UpDown from "./components/UpDown";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./components/Theme";
import "swiper/css";
import "swiper/css/autoplay";
import Script from "next/script";

// Sample Product Data
const products = [
  {
    id: 1,
    name: "Camera",
    description: "Black Fujifilm Dslr Camera",
    price: "$29.99",
    image: "/images/pexels-photo-90946.jpeg",
  },
  {
    id: 2,
    name: "The Apple Set",
    description: "Apple Set containing the triple combo c:",
    price: "$9999.99",
    image: "/images/apple-iphone-smartphone-desk.jpg",
  },
  {
    id: 3,
    name: "Keyboard",
    description: "Super Cheap Keyboard",
    price: "$100.00",
    image: "/images/keyboard.webp",
  },
  {
    id: 4,
    name: "Headphones",
    description: "Lates headphones from the Z Company",
    price: "$599.00",
    image: "/images/headphones.webp",
  },
];

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Toggle Theme
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

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
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-ML4L1C2P4M"
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ML4L1C2P4M', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <CssBaseline />
      <AppBarBar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Container sx={{ pt: 12 }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: isDarkMode ? "#ffffff" : "#363738",
            }}
          >
            Welcome to EG Store
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: isDarkMode ? "#aaaaaa" : "#555", mt: 2 }}
          >
            Discover amazing products at unbeatable prices. Shop now and get the
            best deals!
          </Typography>
        </Box>

        {/* Featured Products - Carousel */}
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            mb: 4,
            color: isDarkMode ? "#ffffff" : "#363738",
          }}
        >
          Featured Products
        </Typography>

        {/* Conditionally render carousel only after images are loaded */}
        {isImageLoaded ? (
          <Swiper
            modules={[Autoplay]}
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
                <Paper
                  elevation={3}
                  sx={{
                    p: 2,
                    textAlign: "center",
                    backgroundColor: isDarkMode ? "#424242" : "#ffffff",
                    color: isDarkMode ? "#ffffff" : "#000000",
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    width="100%"
                    height="200"
                    style={{ objectFit: "cover" }}
                  />
                  <Typography
                    variant="h6"
                    sx={{ mt: 2, color: isDarkMode ? "#ffffff" : "#000000" }}
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: isDarkMode ? "#aaaaaa" : "#555" }}
                  >
                    {product.description}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      mt: 2,
                      backgroundColor: isDarkMode ? "#555555" : "#363738",
                      color: "white",
                      "&:hover": {
                        backgroundColor: isDarkMode ? "#777777" : "#505152",
                      },
                    }}
                  >
                    Add to Cart
                  </Button>
                </Paper>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              color: isDarkMode ? "#aaaaaa" : "#000",
            }}
          >
            Loading images...
          </Typography>
        )}
      </Container>
      <UpDown />
      <Footer />
    </ThemeProvider>
  );
}
