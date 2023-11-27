// TaskList.jsx
import { VStack, useColorMode } from '@chakra-ui/react';
import { TaskItem } from '../TaskItem/TaskItem';

const TaskList = ({ tasks, onComplete, onDelete }) => {
  const { colorMode } = useColorMode();
  const sortedTasks = tasks.slice().sort((a, b) => b.id - a.id);


  return (
    <VStack
      align="stretch"
      // spacing={4}
      bg={colorMode === 'dark' ? '#2F313A' : '#FFFFFF'}
      overflowY="auto"
      boxShadow="lg-max" 
      borderRadius={0}
      position='sticky'
      top='0'
      pl={10}
      pr={10}
      mt={-4}
      ml={-4}
      mr={-4}
      mb={-4}
    >      
      {sortedTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      ))}
    </VStack>
  );
};

export { TaskList };
