import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    lienzo: "#E5E5E5",
    completedTask: "#EA4C89",
    incompleteTask: "#00F9B6",
    header: "#262831",
    bgLightTheme: "#FFFFFF",
    bgDarkTheme: "#2F313A",
    bgTodoList: "#2E3039",
    hourDark: "#09D29D",    
    dateDark: "#7A7979",
    colorInput: "#FFFFFF",
    colorAddHover: "#00F9B6",
    colorAddButton: "#00CC95",
  },
  shadows: {
    tipeShadow: "0px 10px 15px -2px rgba(0,0,0,0.3)",
  },
});

export default theme;