import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, IconButton, Typography, Toolbar } from '@material-ui/core';

export default function Header() {
  return (
    <AppBar position='static'>
      <Toolbar variant='dense'>
      <IconButton component={NavLink} to='/' color='inherit'>
        Home
        </IconButton>
        <IconButton component={NavLink} to='/jokes' color='inherit'>
        Jokes
        </IconButton>
        <IconButton component={NavLink} to='/scrape' color='inherit'>
        Scrape
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}