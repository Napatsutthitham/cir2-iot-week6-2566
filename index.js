const express = require('express')
const app = express()
const logger =require('morgan')
const cors = require('cors')
const port = 3000

//Middleware
app.use(cors()) //croos platform
app.use(logger('dev'))//Logger
app.use(express.json())//req.body

//Get:http://localhost:3000
app.get('/',  (req,res) => {
    return res.status(200).json({message: "Home page"});
});

app.get("/uset",funclion(req,res)){
    const uter =[
        {
            name: "Mark Zuckerberg",
            age: 55,
            gender:"Male"
        }
    ]
    return res.send(200).json({
        data:true,
        user:user,
    });
}
//post:http://localhost:3000/post
app.post('/user' , (req,res) => {
    const data = req.body
    console.log("ID",data.id);
    console.log("liame",datm.name);
    console.log("Age",data.age);
    console.log("Gender",data.gerder);
    return res.status(200).json({
        data:true,
        user:data,
    });
});
//post:http://localhost:3000/post
app.put('/user' , (req,res) => {
    const data = req.body
    console.log("ID",data.id);
    console.log("liame",datm.name);
    console.log("Age",data.age);
    console.log("Gender",data.gerder);
    return res.status(200).json({
        data:true,
        user:data,
        message:"Uedate "
    });
});
//post:http://localhost:3000/post
app.post('/user' , (req,res) => {
    const data = req.body
    console.log("ID",data.id);
    console.log("liame",datm.name);
    console.log("Age",data.age);
    console.log("Gender",data.gerder);
    return res.status(200).json({
        data:true,
        user:data,
        message:"Delete user successfully!",
    });
});
//Get All:http://localhost:3000/api/products
app.get('/api/products', (req,res) => {
    const partial_products = products.map((products)=>{
        return {id:products.id, name:products.name}; 
    })
    res.status(200).json(partial_products);
});

//Gat Products:http://localhost:3000/api/products/1
app.get('/api/products/:productID', (req,res) => {
    const id = Number(req.params.productID)
    const product = products.find((product)=>product.id === id)
    if (!product) {
        return res.status(404).json({Message:"Product not found"})
    }
    return res.status(200).json(product);
});

//Query String GET :http://localhost:3000/api/query/?name=phone
app.get('/api/query',()=>{
    const name = req.query.name.toLowerCase()
    const product_result = products.filter(
        (product)=>product.name.toLowerCase().includes(name)
    )
    if (product_result.length < 1) {
        return res.status(404).send("No products metched your search")
    }
    res.json(product_result);
});
app.listen(port,() =>{
    console.log(`Server running at http://localhost:${port}`);
});