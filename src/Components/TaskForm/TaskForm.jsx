// TaskForm.jsx
import { Input, Box, Button, useColorMode } from "@chakra-ui/react";
import { useState } from "react";
import { useFormik } from "formik";
import "@fontsource/roboto";
import { Container } from "postcss";

const TaskForm = ({ onAddTask }) => {
  const { colorMode } = useColorMode();

  const formik = useFormik({
    initialValues: {
      newTask: "",
    },
    onSubmit: (values) => {
      if (values.newTask.trim() !== "") {
        onAddTask({ id: Date.now(), name: values.newTask, completed: false });
        formik.resetForm();
      }
    },
  });

  return (
    <Box
      display="flex"
      alignItems="center"
      bg="#FFFFFF"
      color="#09D29D"
      position="sticky"
      bottom={0}
      mt="auto"
      ml={-4}
      mr={-4}
      mb={-4}
      zIndex={1}
    >
      <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
        <Box display="flex" width="100%" alignItems="center">
          <Input
            type="text"
            name="newTask"
            value={formik.values.newTask}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Nueva tarea"
            bg="#FFFFFF"
            borderWidth="2px 0px 2px 2px "
            borderColor="gray.300"
            color={"black"}
            borderRadius={0}
            height={"2.5rem"}
            _placeholder={{ color: "gray.500" }}
            _focusVisible={{ boxShadow: "none" }}
            fontSize="sm"
            flex="1"
          />
          <Button
            type="submit"
            height="2.5rem"
            width="20%"
            backgroundColor="#00CC95"
            color="#FFFFFF"
            _hover={{
              backgroundColor: "#00F9B6",
            }}
            fontSize="sm"
            borderRadius={0}
            borderWidth="0px 2px 2px 2px "
            borderColor="gray.300"
          >
            Agregar
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export { TaskForm };
