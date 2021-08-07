import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./product/product";

const products = [
    {id: 1, name: 'Shoes', description: 'Running Shoes', price: '$500'},
    {id: 2, name: 'Laptop', description: 'Apple Macbook', price: '$1000'}
]

const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products