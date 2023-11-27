// Tareas.jsx
import React, { useState } from 'react';
import { Box, Stack, useColorMode } from '@chakra-ui/react';
import { TaskForm } from '../TaskForm/TaskForm';
import { TaskList } from '../Tasklist/Tasklist';

const Tareas = () => {
  const { colorMode } = useColorMode();
  const [tasks, setTasks] = useState([]);

  const handleCompleteTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <Box bg={colorMode === 'dark' ? '#2F313A' : '#FFFFFF'} h="100vh">
      <Stack spacing={4} p={4} h="100%" justify="space-between">
        <TaskList
          tasks={tasks}
          onComplete={handleCompleteTask}
          onDelete={handleDeleteTask}
        />
        <TaskForm onAddTask={handleAddTask} />
      </Stack>
    </Box>
  );
};

export { Tareas };
