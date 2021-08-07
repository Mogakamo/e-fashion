import React from 'react'
import { AppBar, ToolBar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'


const NavBar = () => {
    return (
        <>
            <AppBar position="fixed" className={classses.appBar} color="inherit">
                <ToolBar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={} alt="logo" height="15px" className={classes.image} />
                        E FASHION
                    </Typography>
                </ToolBar>
            </AppBar>
        </>
    )
}

export default NavBar
