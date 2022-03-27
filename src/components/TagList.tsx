import { Chip, Grid } from '@mui/material';
import { FC } from 'react';

const TagList: FC<{
  tags: string[];
}> = ({ tags }) => (
  <Grid container spacing={1}>
    {tags.map((t) => (
      <Grid item key={t}>
        <Chip label={t} />
      </Grid>
    ))}
  </Grid>
);

export default TagList;
