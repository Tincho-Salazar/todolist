// Header.jsx
import React from "react";
import { Box, Text, IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import "@fontsource/roboto";

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      bg="#262831"
      color="#09D29D"
      position="sticky"
      top={0}
      w="full"
      boxShadow="dark-lg"
      p="10px"
      textAlign="center"
      fontFamily="roboto"
      fontStyle="normal"
      fontSize="18px"
      alignItems="center"
      overflow="hidden"
      boxshadow='lg-max'
      zIndex={999}
    >
      <Text flex={1}>JUST TODO IT</Text>
      <IconButton
        icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
        onClick={toggleColorMode}
        ml={2}
        bg="#262831"
        color="white"
        borderRadius={20} // Cambiado a número
      />
    </Box>
  );
}

export { Header };
