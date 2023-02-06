//Make it so that only when we go into a specific path
//For a specufic item
//We'll show all the components

const express = require('express');
const app = express();
const {products} = require('./data');

app.get('/', (req, res)=>{
    res.send(`
        <h1>Welcome to my website</h1>
        <a href="/api/product">Browse</a>
    `);
})


app.get('/api/product', (req,res)=>{
    const newProducts = products.map((product)=>{
        const {id, name} = product;
        return {id,name};
    })
    res.json(newProducts);
})

//In case we want to show full of item with id=1;
app.get('/api/product/demo', (req,res)=>{
    const singleProduct = products.find((product)=>product.id==1)
    res.json(singleProduct);
    //Now we got full info for a product
}); //This is like using RPG to cut a patch of glass

//But how about larger set of data
//api/product/2
//api/product/3
//...

//In express we use Route Parameters which will make it a lot easier than hardcoding
app.get('/api/product/:productID', (req,res)=>{
    //:ProductID is pretty much a placeholder
    //Anyname is fine just preceded by :
    //Now we can access that route params
    const {productID} = req.params; //The name inside (ProductID) is just the name of the route params we added above
                                    //It is a string (not int)
    const singleProduct = products.find(
        (product) => product.id === Number(productID)
    )
    if(!singleProduct){
        return res.status(404).send(`
            <h4>Product does not exists</h4>
        `);
    }
    
    return res.json(singleProduct);
});

//Route params can get more complex
app.get('/api/product/:productID/reviews/:reviewID', (req,res)=>{
    console.log(req.params);
    res.send('Hello world')
});

app.listen(3000, ()=>{
    console.log('Server is listening on port 3000...');
})