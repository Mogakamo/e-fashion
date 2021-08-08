import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import { mergeClasses } from '@material-ui/styles'
import { MergeTypeOutlined } from '@material-ui/icons'

const Cart = () => {
    return (
        <Container>
            <div className={mergeClasses.toolbar} />
            <Typography className={classes.title} variant="h3">Your Shopping Cart</Typography>
        </Container>
    )
}

export default Cart
