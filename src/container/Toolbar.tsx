import { Button, Grid } from '@mui/material';
import { FC } from 'react';
import SearchBar from '../components/SearchBar';

const Toolbar: FC<{
  searchTerm: string;
  setSearchTerm: (v: string) => void;
  setOpenAddTodo: (v: boolean) => void;
}> = ({ searchTerm, setSearchTerm, setOpenAddTodo }) => (
  <Grid container alignItems='center' spacing={2}>
    <Grid item flexGrow={1}>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </Grid>
    <Grid item>
      <Button variant='contained' sx={{ padding: '16px' }} onClick={() => setOpenAddTodo(true)}>
        Add Todo
      </Button>
    </Grid>
  </Grid>
);

export default Toolbar;
