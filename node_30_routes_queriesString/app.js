const express = require('express');
const app = express();
const {products} = require('./data');
app.use(express.static('./public'));
/////////////////////////////
//Routes, Params, Query String
app.get('/', (req,res)=>{
    res.send(`
        <h1>Home Page</h1>
        <a href="/api/product">Products</a>
    `);
}); //CANNOT GET /api/product

//Note that for a lot of e-commerce website
//You'll only fetch "a small part" of the json data (name, price)
//But you'll get the whole contents of a json only when we go into its detail page (name,price,description)

app.get('/api/product', (req,res)=>{
    const newProducts = products.map((product)=>{
        const {id, name} = product;
        return {id, name}
    })
    res.json(newProducts); //We made it return only id, name but not desc
});


/////////////////////////////
// app.all('*',(req,res)=>{
//     res.status(404).send(`
//         <h1>Error not found</h1>
//     `);
// });

app.listen(3000, ()=>{
    console.log('Server is listening on port 3000...');
});