import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { Persona } from '../App'
import { Button } from '@mui/material';

interface ContactsListProps {
  contactList: Persona[]
}

//onSubmit u autocompleteu za prelazak na info page 

export default function FreeSolo(props:ContactsListProps) {
  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={props.contactList.map((pers)=> [pers.name, pers.surname])}
        
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
      <Button>Show Contact</Button>
    </Stack>
  );
}
