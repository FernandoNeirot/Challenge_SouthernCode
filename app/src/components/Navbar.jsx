import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';
import { ROUTES } from '../utils/Constants';

const Navbar =()=> {
    const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>         
          <Typography style={{cursor:"pointer"}} onClick={()=>navigate("/")} variant="h6" component="div" >
            Challenge
          </Typography>
          <Button style={{marginLeft:"25px", color:"white"}} onClick={()=>navigate(ROUTES.HOME)} > Home </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


export default Navbar;