import { Button, Grid, InputBase, Paper, Typography } from '@mui/material';
import { FC, useState } from 'react';
import * as UUID from 'uuid';
import Todo from '../model/Todo';
import TagInput from './TagInput';

const TodoInput: FC<{
  addTodo: (todo: Todo) => void;
  close: () => void;
}> = ({ addTodo, close }) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);

  const resetInput = () => {
    setTitle('');
    setDescription('');
    setTags([]);
  };

  const onAddTodo = () => {
    addTodo({
      id: UUID.v4(),
      title,
      description,
      tags,
      timestamp: new Date().toISOString(),
      done: false
    });
    resetInput();
    close();
  };

  return (
    <Paper style={{ padding: '12px' }}>
      <Grid container direction='column' spacing={2}>
        <Grid item>
          <Typography variant='h5'>Add Todo</Typography>
        </Grid>
        <Grid item>
          <Paper variant='outlined' style={{ padding: '8px' }}>
            <InputBase
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder='Title'
              fullWidth
            />
          </Paper>
        </Grid>
        <Grid item container direction='column' spacing={2}>
          <Grid item>
            <Paper variant='outlined' style={{ padding: '8px' }}>
              <InputBase
                // variant='outlined'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder='Description'
                minRows={2}
                multiline
                fullWidth
              />
            </Paper>
          </Grid>
          <Grid item>
            <TagInput tags={tags} setTags={setTags} />
          </Grid>
          <Grid item>
            <Grid container spacing={1} justifyContent='flex-end'>
              <Grid item>
                <Button variant='contained' onClick={() => resetInput()}>
                  Reset
                </Button>
              </Grid>
              <Grid item>
                <Button disabled={!title} variant='contained' onClick={() => onAddTodo()}>
                  Add todo
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TodoInput;
