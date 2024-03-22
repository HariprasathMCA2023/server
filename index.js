// // const express = require('express');
// // const mongoose = require('mongoose');
// // const cors = require ('cors');
// // const bodyparser = require('body-parser')

// // const app =express();
// // app.use(cors())
// // app.use(express.json())

// // app.get('/',(req,res)=>{
// //     res.send("Hello World")
// // })



// // app.listen(8080,()=>{
// //     console.log(`server is running ${8080}`);
// // })

// // mongoose.connect("mongodb+srv://haripanner2002:haripanner2002@cluster0.lcu0ubp.mongodb.net/ATM")
// // .then(console.log("MongoDB connected"))

// // var newSchema=new mongoose.Schema({
// //     name:String,
// //     email:String,
// //     password:String,
// //     amount:Number
// // })
// // let Data = mongoose.model('mca',newSchema)

// // let Data1=new Data(
// //     {
// //         name:"Hariprasath P",
// //         email:"haripanner2002@gmail.com",
// //         password:"Hari@1224",
// //         amount:1000
// //     }
// // )

// // Data1.save()

// // app.get('/data',function(req, res){
   
// //     Data.find().then((item) => res.send((item)))
// //   })
  
// const express = require('express');
// const mongoose=require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.urlencoded({extended:true}))

// app.get('/',(req,res)=>{
//     res.send("<h1>Welcome</h1>")
// })

// app.get('/data',(req,res)=>{
//    Data.find().then((item)=>res.send(item))
// })

// app.post('/create',(req,res)=>{
//     // console.log(req.body);
//     Data.create(req.body).then((item)=>res.send(item))
//  })
 
//  app.put('/update/:id',(req,res)=>{
//     console.log(req.body);
//     console.log(req.params.id);
//     Data.findOneAndUpdate({_id:req.params.id},{$set:req.body},{ new: true }).then(res => console.log(res))
    
//  })

//  app.delete('/delete/:id',(req,res)=>{
//         Data.findOneAndDelete({_id:req.params.id}).then(response => console.log(response))
//     })

// app.listen(8080,()=>{
//     console.log("server started !!!");
// });

// // connect mongodb


//  mongoose.connect("mongodb+srv://haripanner2002:haripanner2002@cluster0.lcu0ubp.mongodb.net/ATM").then(()=>{console.log("MongoDB connected!")})




// let newSchema = new mongoose.Schema({
//                  name : String,
//                  email:String,
//                  password : String,
//                  amount : Number
//                 })

// // model
// let Data=mongoose.model('Rvs',newSchema)
// // let Data = mongoose.model('mca' , newSchema)

// // // create a data for testing

// // let data1 = new Data({
// //     name :"Rehana Bensha",
// //     email:"rehana@gmail.com",
// //     password:"12345789",
// //     amount : 20000
// // })

// // data1.save();


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());

// Routes
app.get("/", function(req,res){
   res.send("welcome to express"); 
});
app.get('/data',function(req,res){
   Data.find().then((item)=>res.send(item))
})
app.post('/create',function(req,res){
    Data.create(req.body).then((item)=>res.send(item))
})
app.put('/update/:id',async(req,res)=>{
    console.log(req.params.id);
     console.log(req.body);
   const amount = req.body.amount;
  const userUpdate= await Data.findByIdAndUpdate(req.params.id,{amount:amount},{new:true,});
    res.json({
     data:userUpdate
})
})

app.delete('/delete/:id',async(req,res)=>{
    console.log(req.params.id);
    const userDelete= await Data.findByIdAndDelete(req.params.id);
    res.json({
     data:userDelete
})
})

// mongoose.connect("mongodb+srv://Guru:gurunathguru@cluster0.cmarr4t.mongodb.net/mca").then(console.log("MongoDB Connected"));
mongoose.connect("mongodb+srv://haripanner2002:haripanner2002@cluster0.lcu0ubp.mongodb.net/ATM").then(()=>{console.log("MongoDB connected!")});
var newSchema=new mongoose.Schema({
    id:Number,
    name:String,
    email:String,
    password:String,
    amount:Number
})

let Data=mongoose.model('mca',newSchema)
app.listen(8080, function(){
    console.log('Server running at http://localhost:8080/');
});



















































































































































