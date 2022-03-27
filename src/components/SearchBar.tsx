import SearchIcon from '@mui/icons-material/Search';
import { Grid, InputBase, Paper } from '@mui/material';
import { FC } from 'react';

const SearchBar: FC<{
  searchTerm: string;
  setSearchTerm: (v: string) => void;
}> = ({ searchTerm, setSearchTerm }) => (
  <Paper sx={{ padding: '12px' }}>
    <Grid container spacing={2}>
      <Grid item>
        <SearchIcon sx={{ fill: 'lightgray' }} />
      </Grid>
      <Grid item flexGrow={1}>
        <InputBase
          type='search'
          placeholder='Search...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          fullWidth
        />
      </Grid>
    </Grid>
  </Paper>
);

export default SearchBar;
