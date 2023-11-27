// Clock.jsx
import { useState, useEffect } from "react";
import { Box, Text, useColorMode } from "@chakra-ui/react";
import "@fontsource/roboto";

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const { colorMode } = useColorMode();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      py={10}
      bg={colorMode === "dark" ? "#2F313A" : "#FFFFFF"}
      position="sticky"
      top={0} // Mantener en la parte superior
      zIndex={998} 
    >
      <Box
        // Hora
        width="inherit"
        top={0}
        paddingTop="10px"        
        fontSize="55px"
        fontWeight='300'        
        textAlign="center"
        color={colorMode === "dark" ? "#00f9b6" : "black"}
        bg={colorMode === "dark" ? "#2F313A" : "#FFFFFF"}
      >
        {currentTime.toLocaleTimeString("es-AR", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })}
      </Box>
      <Text
        width="inherit"
        fontFamily="roboto"
        fontStyle="normal"
        fontWeight="300"
        fontSize="16px"
        lineHeight="21px"
        textAlign="center"
        color="#7A7979"
        bg={colorMode === "dark" ? "#2F313A" : "#FFFFFF"}
        marginTop="-10px"
      >
        {new Date().toLocaleDateString("es-AR", {
          weekday: "long",
          month: "short",
          day: "numeric",
        })}
      </Text>
    </Box>
  );
}

export { Clock };
