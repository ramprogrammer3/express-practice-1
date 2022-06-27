
const express = require('express')
const app = express();
const port = 8080;
app.get("/", (req,res)=>{
    res.send("welcome to express js ")
})
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})



const express = require('express')
const app = express();
const port = 8080;
let userData = [{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
    "lat": "-37.3159",
    "lng": "81.1496"
    }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
    }
    },
    {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
    "street": "Victor Plains",
    "suite": "Suite 879",
    "city": "Wisokyburgh",
    "zipcode": "90566-7771",
    "geo": {
    "lat": "-43.9509",
    "lng": "-34.4618"
    }
    }}]
app.get("/", (req,res)=>{
    res.send("welcome to express js ")
})
app.get("/user", (req,res)=>{
    res.send(userData)
})
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})



app.get("/user", (req,res)=>{
    res.json(userData)
})



app.get("/user", (req,res)=>{
    res.json({name : "rahul"})
})



app.get("/",(req,res,next)=> {
    
} ,(req,res)=>{
    res.send("welcome to express js ")
})

app.get("/user", (req,res)=>{
    res.json({name : "rahul"})
})


app.get("/",(req,res,next)=> {
    next();
} ,(req,res)=>{
    res.send("welcome to express js ")
})

app.get("/user", (req,res)=>{
    res.json({name : "rahul"})
})


app.get("/",(req,res,next)=> {
    if(isAdmin == true){
        next();
    }else{
        res.send("you are not an admin u can not accees")
    }
} ,(req,res)=>{
    res.send("welcome to express js ")
})

app.get("/user", (req,res)=>{
    res.json({name : "rahul"})
})



let isAdmin = false;   
app.get("/",(req,res,next)=> {
    if(isAdmin == true){
        next();
    }else{
        res.send("you are not an admin u can not accees")
    }
} ,(req,res)=>{
    res.send("welcome to express js ")
})

app.get("/user", (req,res)=>{
    res.json({name : "rahul"})
})




let isAdmin = true;   
app.get("/",(req,res,next)=> {
    if(isAdmin == true){
        next();
    }else{
        res.send("you are not an admin u can not accees")
    }
} ,(req,res)=>{
    res.send("welcome to express js ")
})

app.get("/user", (req,res)=>{
    res.json({name : "rahul"})
})





let isAdmin = false;   
app.get("/",(req,res,next)=> {
    if(isAdmin == true){
        next();
    }else{
        res.send("you are not an admin u can not accees")
    }
} ,(req,res)=>{
    res.send("welcome to express js ")
})

app.get("/user",(req,res,next) =>{
    if(isAdmin == true){
        next()
    }else{
        res.send("you are not an admin , you dont have access ")
    }
} ,(req,res)=>{
    res.json({name : "rahul"})
})



let checkAdmin = (req,res,next)=> {
    if(isAdmin == true){
        next();
    }else{
        res.send("you are not an admin u can not accees")
    }
}

 let isAdmin = false;   
app.get("/",checkAdmin ,(req,res)=>{
    res.send("welcome to express js ")
})
app.get("/user",checkAdmin ,(req,res)=>{
    res.json({name : "rahul"})
})





let checkAdmin = (req,res,next)=> {
    if(isAdmin == true){
        next();
    }else{
        res.send("you are not an admin u can not accees")
    }
}
 let isAdmin = true;   
app.get("/",checkAdmin ,(req,res)=>{
    res.send("welcome to express js ")
})
app.get("/user",checkAdmin ,(req,res)=>{
    res.json(userData)
})
app.post('/signup', (req,res)=>{
    res.send("testing here ")
})





app.use((req,res, next)=>{
    console.log("global middle ware ")
 })
app.get("/",(req,res)=>{
    res.send("welcome to express js ")
})
app.get("/user",(req,res)=>{
    res.json(userData)
})
app.post('/signup', (req,res)=>{
    res.send("testing here ")
})
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})



app.use((req,res, next)=>{
    next()
 })
app.get("/",(req,res)=>{
    res.send("welcome to express js ")
})
app.get("/user",(req,res)=>{
    res.json(userData)
})
app.post('/signup', (req,res)=>{
    res.send("testing here ")
})
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})




app.get("/",(req,res)=>{
    res.send("welcome to express js ")
})
app.get("/user",(req,res)=>{
    res.json(userData)
})
app.post('/signup', (req,res)=>{
    console.log(req.body)
    res.send("testing here ")
})
ap




app.get("/",(req,res)=>{
    res.send("welcome to express js ")
})
app.get("/user",(req,res)=>{
    res.json(userData)
})
app.post('/signup',express.json(), (req,res)=>{
    console.log(req.body)
    res.send("testing here ")
})



app.use(express.json())
app.get("/",(req,res)=>{
    res.send("welcome to express js ")
})
app.get("/user",(req,res)=>{
    res.json(userData)
})
app.post('/signup', (req,res)=>{
    console.log(req.body)
    res.send("testing here ")
})


app.post('/signup', (req,res)=>{
    console.log(req.body)
    res.send({name : "rahul"})
})


app.post('/signup', (req,res)=>{
    console.log(req.body)
    res.json({name : "rahul"})
})


app.post('/signup', (req,res)=>{
    console.log(req.body)
    res.json("simple text ")
})


app.post('/signup', (req,res)=>{
    console.log(req.body)
    res.status(201).json("simple text ")
})



const http = require('http')
console.log(http.STATUS_CODES)






let isAdmin = false;
let checkAdmin = (req,res,next) =>{
    if(isAdmin == true){
        next()
    }else{
        res.send("you are not an admin")
    }
}
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("welcome to express js ")
})
app.get("/user",checkAdmin,(req,res)=>{
    res.json(userData)
})
app.post('/signup', (req,res)=>{
    console.log(req.body)
    res.status(201).json("simple text ")
})



let isAdmin = false;
let checkAdmin = (req,res,next) =>{
    if(isAdmin == true){
        next()
    }else{
        res.status(401).send("you are not an admin")
    }
}
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("welcome to express js ")
})
app.get("/user",checkAdmin,(req,res)=>{
    res.json(userData)
})
app.post('/signup', (req,res)=>{
    console.log(req.body)
    res.status(201).json("simple text ")
})




app.get("*",(req,res)=>{
    res.status(404),json({error : "not found "})
})



app.use(express.json())

app.get("*",(req,res)=>{
    res.status(404),json({error : "not found "})
})
app.get("/",(req,res)=>{
    res.send("welcome to express js ")
})
app.get("/user",(req,res)=>{
    res.json(userData)
})

app.post('/signup', (req,res)=>{
    console.log(req.body)
    res.status(201).json("simple text ")
})



app.use(express.json())


app.get("/",(req,res)=>{
    res.send("welcome to express js ")
})
app.get("/user",(req,res)=>{
    res.json(userData)
})
app.get("*",(req,res)=>{
    res.status(404),json({error : "not found "})
})

app.post('/signup', (req,res)=>{
    console.log(req.body)
    res.status(201).json("simple text ")
})



app.use(express.json())


app.get("/",(req,res)=>{
    res.send("welcome to express js ")
})
app.get("/user",(req,res)=>{
    res.json(userData)
})

app.post('/signup', (req,res)=>{
    console.log(req.body)
    res.status(201).json("simple text ")
})

app.post("*",(req,res)=>{
    res.status(404),json({error : "not found "})
})




app.post('/signup', (req,res)=>{
    console.log(req.body)
    res.status(201).json("simple text ")
})
app.use("*",(req,res)=>{
    res.status(404),json({error : "not found "})
})




app.use(express.json())

app.get("/",(req,res)=>{
    res.send("welcome to express js ")
})
app.get("/user",(req,res)=>{
    res.json(userData)
})

app.post('/signup', (req,res)=>{
    console.log(req.body)
    res.status(201).json("simple text ")
})

app.use("*",(req,res)=>{
    res.status(404),json({error : "not found "})
})



console.log("_______________________________________________")

const express = require('express')
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("Welcome to express ")
})

module.exports = router;

const userRoutes = require('./views/users')
app.use(userRoutes)





router.get("/users", (req,res)=>{
    res.json(userData)
})

console.log("_______________________________________________")

const express = require('express')
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("Welcome to express ")
})


router.get("/users", (req,res)=>{
    res.json(userData)
})


router.post('/user', (req,res)=>{
    console.log(req.body)
    res.status(201).json("simple text ")
})
module.exports = router;

console.log("_______________________________________________")

const userRoutes = require('./views/users')
app.use(express.json())
app.use(userRoutes)


const express = require('express')
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("Welcome to express ")
})


router.get("/users", (req,res)=>{
    res.json(userData)
})


router.post('/user', (req,res)=>{
    console.log(req.body)
    res.status(201).json("simple text ")
})
module.exports = router;


console.log("_______________________________________________")




const { json } = require('express');
const express = require('express')
const app = express();
const port = 8080;



const userRoutes = require('./views/users')
app.use(express.json())
app.use(userRoutes)

app.get("/product",(req,res)=>{
    res.send({productName : "write name  here "})
})


app.use("*",(req,res)=>{
    res.status(404),json({error : "not found "})
})


app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})
 
 
const express = require('express')
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("Welcome to express ")
})


router.get("/users", (req,res)=>{
    res.json(userData)
})


router.post('/user', (req,res)=>{
    console.log(req.body)
    res.status(201).json("simple text ")
})
module.exports = router;




console.log("_______________________________________________")