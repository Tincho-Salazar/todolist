// TaskItem.jsx
import {
  Box,
  Text,
  useColorMode,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
} from "@chakra-ui/react";

import { FaTrash, FaCircle } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "@fontsource/Roboto";

const TaskItem = ({ task, onComplete, onDelete, isNew }) => {
  const { colorMode } = useColorMode();
  const [isCompleted, setIsCompleted] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const cancelRef = useRef();

  useEffect(() => {
    if (isNew) {
      // Aplicar la transición solo al nuevo TaskItem
      setTimeout(() => {
        setIsNew(false);
      }, 1000); // Ajusta el tiempo de espera según tu necesidad
    }
  }, [isNew]);

  const handleComplete = () => {
    setIsCompleted(!isCompleted);
    onComplete(task.id);
  };

  const handleDelete = () => {
    setIsAlertOpen(true);
  };

  const onClose = () => {
    setIsAlertOpen(false);
  };

  const onDeleteConfirmed = () => {
    onDelete(task.id);
    onClose();
  };

  return (
    <motion.li
      style={{ listStyleType: "none", marginBottom: "5px" }}
      layout
      animate={{ opacity: [0, 1], y: [300, 0] }}
      transition={{ type: "spring", damping: 30, duration: 0.5, delay: 0.1 }}
      exit={{
        opacity: [1, 0.5],
        scale: [1, 0.2],
        transition: { duration: 0.5 },
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        bg={colorMode === "dark" ? "#2F313A" : "#FFFFFF"}
        minH={"2.8em"}
        
        // p={"1em"}
        border="0.5px solid #6e6d6e"
        borderRadius="15px"
        boxShadow={"0px 10px 15px -2px rgba(0,0,0,0.3)"}
      >
        <FaCircle
          size={14}
          style={{
            color: isCompleted ? "#FC524C" : "#00F9B6",
            cursor: "pointer",
            marginLeft: "1rem",
          }}
          onClick={handleComplete}
        />
        <Text
          ml={2}
          textDecoration={isCompleted ? "line-through" : "none"}
          fontSize={14}
          fontFamily="Roboto"
          color={colorMode === "dark" ? "#FFFFFF" : "black"} // Ajustar color del texto
        >
          {task.name}
        </Text>
        <FaTrash
          size={14}
          style={{ color: "#00f9b6", cursor: "pointer", marginRight: "1rem" }}
          onClick={handleDelete}
          ml={2}
        />
      </Box>
      {/* AlertDialog para confirmación de eliminación */}
      <AlertDialog
        isOpen={isAlertOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        size="sm"                      
      >
        {" "}
        {/* Añadir size="sm" */}
        <AlertDialogOverlay   
        />
        <AlertDialogContent>
          <AlertDialogBody fontSize="sm" bg='#E4E4D0'
          color='black'>
            Estás por eliminar {task.name} ¿Continua?
          </AlertDialogBody>
          <AlertDialogFooter bg='#E4E4D0' color='black'>
            <Button
              ref={cancelRef}
              fontSize="sm"
              onClick={onClose}
              height="1.2rem"
              p='15px'
              border="1px solid grey"
              bg="#28a745"
              color='white'
              _hover={{
                background: "#a0f0b5", // Cambiar el fondo en hover
                boxShadow: "none", // Eliminar sombra en hover
              }}
            >
              Cancelar
            </Button>
            <Button
              fontSize="sm"
              colorScheme="red"
              onClick={onDeleteConfirmed}
              height="1.2rem"
              color='white'
              p='15px'
              border="1px solid grey"
              ml={2}
              bg="#dc3545"
              _hover={{
                background: "#ff4255", // Cambiar el fondo en hover
                boxShadow: "none", // Eliminar sombra en hover
              }}
            >
              Eliminar
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </motion.li>
  );
};

export { TaskItem };
