import React, { useState } from "react";
import { Drawer, Box, Typography, IconButton, Button, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../components/CartContext";

const FloatingCart = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { cart, removeFromCart } = useCart();

  const toggleDrawer = (open: boolean) => () => {
    setIsDrawerOpen(open);
  };

  return (
    <>
      {/* Floating Cart Button */}
      <IconButton
        onClick={toggleDrawer(true)}
        sx={{
          position: "fixed",
          left: 16,
          bottom: 16,
          bgcolor: "primary.main",
          color: "white",
          zIndex: 1200,
          "&:hover": {
            bgcolor: "primary.dark",
          },
        }}
      >
        <Badge badgeContent={cart.length} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>

      {/* Cart Drawer */}
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 300, p: 2 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Your Cart
          </Typography>
          {cart.length === 0 ? (
            <Typography>Your cart is empty.</Typography>
          ) : (
            cart.map((item) => (
              <Box
                key={item.id}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Typography>{item.name}</Typography>
                <Typography>${item.price.toFixed(2)}</Typography>
                <Button
                  onClick={() => removeFromCart(item.id)}
                  size="small"
                  variant="outlined"
                  color="error"
                >
                  Remove
                </Button>
              </Box>
            ))
          )}
        </Box>
      </Drawer>
    </>
  );
};

export default FloatingCart;
