const express = require('express');
const app = express();
const {products} = require('./data')

app.get('/', (req,res)=>{
    res.status(200).send("This is a text");
});

/////////
//Sending small data to the server with the url
//https://hn.algolia.com/api
//?
//query=foo&tags=story
//etc.
//We couldnt just use it out of the blue
//We need to set it up
app.get('/api/v1/query', (req,res)=>{
    console.log(req.query);
    const {search, limit} = req.query;
    let sortedProducts= [...products];
    //If the user doesn't provide anything we'll just return all the objects
    if(search){
        sortedProducts = sortedProducts.filter(
            (product)=>{
                return product.name.startsWith(search)
            }
        )
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }
    if(sortedProducts.length < 1){
        return res.status(200).json({success: true, data: []})
    }
    return res.status(200).json(sortedProducts);
})
//query&name=john&age=2
//we can add as many you want




////////

app.get('/api/product', (req,res)=>{
    const newProducts = products.map(
        (product)=>{
            const {id, name} = product;
            return {id,name};
        }
    )

    res.json(newProducts);
})

app.get('/api/product/:productID', (req,res)=>{
    const {productID} = req.params;
    const singleProduct = products.find(
        (product) =>product.id === Number(productID)
    )
    if(!singleProduct){
        return res.status(404).send(
            `<h1>No Product Found</h1>`
        );
    }
    return res.json(singleProduct)
});

app.all('*', (req,res)=>{
    res.status(404).send(`
        <h1>Page not found</h1>
    `);
});

app.listen(3000, ()=>{
    console.log('server is listening on port 3000...');
});