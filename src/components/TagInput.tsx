import { Chip, Grid, InputBase, Paper } from '@mui/material';
import React, { FC, useState } from 'react';

const TagInput: FC<{
  tags: string[];
  setTags: (tags: string[]) => void;
}> = ({ tags, setTags }) => {
  const [tag, setTag] = useState<string>('');

  function handleDelete(t: string) {
    setTags([...tags.filter((ta) => ta !== t)]);
  }

  function addTag(t: string) {
    if (t.trim()) {
      setTags([...new Set([...tags, t.trim()])]);
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) {
    if (e.key === ',' || e.key === 'Enter' || e.key === ' ') {
      addTag(tag);
      setTag('');
      e.preventDefault();
    }
  }

  return (
    <Grid container spacing={1} alignItems='center'>
      {tags.map((t) => (
        <Grid item key={t}>
          <Chip label={t} onDelete={() => handleDelete(t)} />
        </Grid>
      ))}
      <Grid item>
        <Paper variant='outlined' style={{ padding: '8px' }}>
          <InputBase
            value={tag}
            placeholder='Add tag'
            onChange={(e) => setTag(e.target.value)}
            onKeyDown={(e) => onKeyDown(e)}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TagInput;
