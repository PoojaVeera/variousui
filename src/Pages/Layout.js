import { ChakraProvider } from "@chakra-ui/react";
import { MantineProvider } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="All">
      <Link to="/" style={{ textDecoration: "none" }}>
        Layout
      </Link>
      <MantineProvider
        theme={{ colorSchema: "dark" }}
        withGlobalStyles
        withNormalizeCSS
        className="Layout"
      >
        <Link to="/Page1" style={{ textDecoration: "none" }}>
          style1
        </Link>
      </MantineProvider>
      <Link to="Page2" style={{ textDecoration: "none" }}>
        style2
      </Link>
      <ChakraProvider>
        <Link to="Page3" style={{ textDecoration: "none" }}>
          style3
        </Link>
      </ChakraProvider>
    </div>
  );
};
