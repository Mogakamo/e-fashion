import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import React from 'react'
import { AddShoppingCart } from '@material-ui/icons'

import useStyles from './styles'

const Product = ({ product, onAddToCart }) => {
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
                    <Typography dangerouslySetInnerHTML={ {__html: product.description}} variant="h2" color="textSecondary" component="p" />
                                           
                    <CardActions disableSpacing className={classes.cardActions}>
                        <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.disableSpacing, 1 )}>
                            <AddShoppingCart />
                        </IconButton>
                    </CardActions>
                </div>
            </CardContent>
        </Card>
    )
}

export default Product
