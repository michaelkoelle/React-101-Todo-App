import { Box, Container, Modal, Stack } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import ThemeModeButton from '../components/ThemeModeButton';
import Title from '../components/Title';
import TodoInput from '../components/TodoInput';
import Todo from '../model/Todo';
import TodoContainer from './TodoContainer';
import Toolbar from './Toolbar';

const App: FC<{ darkMode: boolean; setDarkMode: (v: boolean) => void }> = ({
  darkMode,
  setDarkMode
}) => {
  const [todos, setTodos] = useState<Todo[]>(JSON.parse(localStorage.getItem('todos') ?? '[]'));
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [openAddTodo, setOpenAddTodo] = useState<boolean>(false);

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
    setOpenAddTodo(false);
  };

  const editTodo = (id: string, todo: Todo) => {
    const temp = [...todos];
    const index = temp.findIndex((t) => t.id === id);

    if (index < 0) {
      return;
    }

    temp[index] = todo;
    setTodos(temp);
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <Container maxWidth='md' sx={{ userSelect: 'none', mb: '32px' }}>
      <Stack direction='row' justifyContent='flex-end' alignItems='center' sx={{ mt: '12px' }}>
        <ThemeModeButton setDarkMode={setDarkMode} darkMode={darkMode} />
      </Stack>
      <Box mt='10%' mb='48px'>
        <Title />
      </Box>
      <Stack spacing={4}>
        <Toolbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setOpenAddTodo={setOpenAddTodo}
        />
        <TodoContainer todos={todos} searchTerm={searchTerm} editTodo={editTodo} />
      </Stack>
      <Modal
        open={openAddTodo}
        onClose={() => setOpenAddTodo(false)}
        sx={{ backdropFilter: 'blur(5px)' }}>
        <Container
          maxWidth='md'
          sx={{
            position: 'absolute',
            top: '15%',
            left: '50%',
            transform: 'translate(-50%, 0%)'
          }}>
          <TodoInput addTodo={addTodo} close={() => setOpenAddTodo(false)} />
        </Container>
      </Modal>
    </Container>
  );
};

export default App;
