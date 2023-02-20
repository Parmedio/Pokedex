import React from 'react';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const Buttonz = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 60,
  height: 34,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 4,
    transitionDuration: '400ms',
    '&.Mui-checked': {
      transform: 'translateX(26px)',
      '& + .MuiSwitch-track': {
        backgroundColor: '#c37ce9',
        opacity: 1,
        border: 0,
      },
      '& .MuiSwitch-thumb': {
        color: 'white',
        margin: 2,
      },
    },
    '& .MuiSwitch-thumb': {
      color: 'white', 
      boxSizing: 'border-box',
      width: 22,
      height: 22,
      margin: 2,
    },
  },
  '& .MuiSwitch-track': {
    borderRadius: 34 / 2,
    backgroundColor: '#52cb66',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 1000,
    }),
  },
}));

export default function CustomSwitch({ viewModeSwitch }) {
  return (
    <FormControlLabel onClick={viewModeSwitch} control={<Buttonz sx={{ m: 0 }} defaultChecked />}/>
  );
}