"use client";

import { useSearchParams } from "next/navigation";
import React from "react";
import { Box, Typography, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import AppBarBar from "../components/AppBarBar"
import { useThemeContext } from "../components/ThemeProviderWrapper";

const pages = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Wishlist", path: "/wishlist" },
    { name: "Contact", path: "/contact" },
    { name: "Account", path: "/account" },
];

export default function SearchPage() {
    const { isDarkMode, toggleTheme } = useThemeContext();

    const searchParams = useSearchParams();
    const query = searchParams.get("query") || "";

    const results = pages.filter((page) =>
        page.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <>
        <AppBarBar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            <Box sx={{ p: 4 }}>
                <Typography variant="h4" sx={{  pt: 10}}>Search Results</Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    Showing results for: <b>{query}</b>
                </Typography>
                {results.length > 0 ? (
                    <List>
                        {results.map((result) => (
                            <ListItem key={result.name}>
                                <ListItemButton href={result.path}>
                                    <ListItemText primary={result.name} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                ) : (
                    <Typography variant="body2">No results found.</Typography>
                )}
            </Box>
        </>
    );
}
