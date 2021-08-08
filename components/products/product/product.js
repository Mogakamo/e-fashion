import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import React from 'react'
import { AddShoppingCart } from '@material-ui/icons'

import useStyles from './styles'

const Product = ({ product }) => {
    const classes = useStyles()

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.media.source} title={product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5">
                        {product.price.formatted_with_symbol}
                    </Typography>
                    <Typography variant="h2" color="textSecondary">
                        {product.description}
                    </Typography>
                    <CardActions disableSpacing className={classes.cardActions}>
                        <IconButton aria-label="Add to Cart">
                            <AddShoppingCart />
                        </IconButton>
                    </CardActions>
                </div>
            </CardContent>
        </Card>
    )
}

export default Product
