import SearchIcon from '@mui/icons-material/Search';
import { Paper, Typography } from '@mui/material';
import { FC } from 'react';
import ArchivedTodoList from '../components/ArchivedTodoList';
import TodoList from '../components/TodoList';
import Todo from '../model/Todo';

const TodoContainer: FC<{
  todos: Todo[];
  searchTerm: string;
  editTodo: (id: string, todo: Todo) => void;
}> = ({ todos, searchTerm, editTodo }) => {
  const filteredTodos = searchTerm
    ? todos.filter(
        (t) =>
          t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          t.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          t.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : todos;

  const activeTodos = filteredTodos.filter((t) => !t.done);
  const archivedTodos = filteredTodos.filter((t) => t.done);

  if (searchTerm && filteredTodos.length <= 0) {
    return (
      <Paper variant='outlined' sx={{ padding: '16px', textAlign: 'center' }}>
        <SearchIcon />
        <Typography>{`No results for "${searchTerm}"`}</Typography>
      </Paper>
    );
  }

  return (
    <>
      <TodoList todos={activeTodos} searchTerm={searchTerm} editTodo={editTodo} />
      <ArchivedTodoList todos={archivedTodos} editTodo={editTodo} />
    </>
  );
};

export default TodoContainer;
