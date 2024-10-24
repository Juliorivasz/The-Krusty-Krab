

import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';

const options = [
    "Inicio",
    "Menu",
    "Promociones",
    "Pedidos"
];

const ITEM_HEIGHT = 48;

export default function MenuBar() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    let valor = e.target.textContent
    setAnchorEl(null);
    if (valor == 'Inicio') {
    valor = ''
  }else if (valor == 'Pedidos') {
    valor='orderHistory'
  }

    navigate(`/${valor}`)
    console.log(valor)
  };

  return (
    <div className='menuBar'>
      <IconButton
        aria-label="more"
        id="short-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        sx={{color: "white"}}
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            style: {
              maxHeight: ITEM_HEIGHT * 5.5,
              width: '100ch',
            },
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Inicio'} onClick={handleClose} >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

