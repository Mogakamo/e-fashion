import React from 'react'
import { AppBar, ToolBar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import Image from 'next/image'

import logo from '../../public/favicon.ico'

const NavBar = () => {
    return (
        <>
            <AppBar position="fixed" className={classses.appBar} color="inherit">
                <ToolBar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <Image src={logo} alt="logo" height="15px" className={classes.image} />
                        E FASHION
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-label="Show cart items" color='inherit'>
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </ToolBar>
            </AppBar>
        </>
    )
}

export default NavBar
