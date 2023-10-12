import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import '../../Styling/Button.css'


export default function ContainedButtons(props) {
    function handleclick(){

      alert('Button clicked');

    }


  return (
     
    <Stack direction="row" spacing={2}>
      <Button  onClick={handleclick} variant="contained" href="#contained-buttons" >{props.children} </Button>
    </Stack>
   
  );
}