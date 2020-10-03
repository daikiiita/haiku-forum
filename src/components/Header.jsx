import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography } from '@material-ui/core'


const Header = () => {
  return (
    <AppBar color={'default'} position={'sticky'}>
      <Toolbar>
        <Typography color={'inherit'} component={Link} to={'/'} variant={'h5'}>
          {'Forum'}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
