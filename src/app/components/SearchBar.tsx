"use client";

import React, { useState } from "react";
import {
  Box,
  TextField,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState<{ name: string; path: string }[]>([]);
  const router = useRouter(); // Use router from next/navigation

  const pages = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Wishlist", path: "/wishlist" },
    { name: "Contact", path: "/contact" },
    { name: "Account", path: "/account" },
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setFilteredResults([]);
    } else {
      const results = pages.filter((page) =>
        page.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredResults(results);
    }
  };

  const handleResultClick = (path: string) => {
    router.push(path); // Redirect to the selected page
    setQuery(""); // Clear the query
    setFilteredResults([]); // Clear results
  };

  return (
    <Box sx={{ position: "relative", width: "300px" }}>
      {/* Search Input */}
      <TextField
        value={query}
        onChange={handleSearchChange}
        placeholder="Search..."
        variant="outlined"
        fullWidth
        sx={{ backgroundColor: "white", borderRadius: 1 }}
      />

      {/* Dropdown Results */}
      {filteredResults.length > 0 && (
        <List
          sx={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            bgcolor: "white",
            border: "1px solid #ccc",
            borderRadius: "4px",
            zIndex: 1000,
          }}
        >
          {filteredResults.map((result) => (
            <ListItem key={result.name} disablePadding>
              <ListItemButton onClick={() => handleResultClick(result.path)}>
                <ListItemText primary={result.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      )}

      {/* No Results */}
      {query && filteredResults.length === 0 && (
        <Box
          sx={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            bgcolor: "white",
            border: "1px solid #ccc",
            borderRadius: "4px",
            zIndex: 1000,
            p: 2,
          }}
        >
          <p>No results found</p>
        </Box>
      )}
    </Box>
  );
}
