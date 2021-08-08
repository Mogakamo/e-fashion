import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import Image from 'next/image'

import logo from '../../public/favicon.ico'

import useStyles from './styles'

const NavBar = ( {totalItems}) => {
    const classes = useStyles()

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <Image src={logo} alt="logo" height="15px" className={classes.image} />
                        E FASHION
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-label="Show cart items" color='inherit'>
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBar
