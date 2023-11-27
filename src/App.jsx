// App.jsx
import React from 'react';
import {
  Box,
  Container,
  CSSReset,
  ChakraProvider,
  extendTheme,
  useColorMode,
  ColorModeScript,
} from '@chakra-ui/react';
import { Header } from './Components/Header/Header';
import { Clock } from './Components/Clock/Clock';
import { Tareas } from './Components/Tareas/Tareas';  // Importamos el nuevo componente Tareas
import Theme from './Theme';

function App() {
  const { colorMode } = useColorMode();
  const theme = extendTheme({
    ...Theme,
    config: { initialColorMode: colorMode },
  });

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <ColorModeScript initialColorMode={Theme.config.initialColorMode} />
      <Box bg="#E5E5E5" w="100vw">
        <Container minW={'300px'}>
          <Header />
          <Clock />
          {/* Cambiamos TaskForm y TaskList por el nuevo componente Tareas */}
          <Tareas />
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export { App };
