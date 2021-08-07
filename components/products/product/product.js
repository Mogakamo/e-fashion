import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import React from 'react'
import { AddShoppingCart } from '@material-ui/icons'


const Product = ({ product }) => {
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image='' title={Product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5">
                        {product.price}
                    </Typography>
                    <Typography variant="h2" color="textSecondary">
                        
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
