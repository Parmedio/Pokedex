import React from 'react';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const Buttonz = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 60,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(34px)',
      '& + .MuiSwitch-track': {
        backgroundColor: '#ff4d4d',
        opacity: 1,
        border: 0,
      },
      '& .MuiSwitch-thumb': {
        color: '#ffff', // #ffe0c7
      },
    },
    '& .MuiSwitch-thumb': {
      color: '#ffff', // #c7feff
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: '#42d0ff',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 600,
    }),
  },
}));

export default function CustomSwitch({ viewModeSwitch }) {
  return (
    <FormControlLabel onClick={viewModeSwitch} control={<Buttonz sx={{ m: 0 }} defaultChecked />}/>
  );
}