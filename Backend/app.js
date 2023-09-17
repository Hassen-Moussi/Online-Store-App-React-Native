import express from 'express';
import{CreateUser , getusers , getusersbyid , Deleteusersbyid , Updateusers,Login} from './database.js';
import cors from 'cors';

const app = express()

app.use(cors());
const serverless = require('serverless-http');

module.exports.handler= serverless(app);

app.use(express.json())

app.use((err, req , res, next)=> {
 console.error(err.stack)
 res.status(500).send('Somthing broke!')
})

app.listen(8080,()=>{
    console.log('Server is running on port 8080')
})


app.get("/users", async (req,res)=>{
    const users = await getusers()
    res.send(users)
})

app.get("/user/:id", async (req,res)=>{
    const id = req.params.id
    const user = await getusersbyid(id)
    res.send(user)
})

app.post("/createuser", async (req,res)=>{
    const {Username , Email , password} = req.body
    const user = await CreateUser(Username , Email , password)
    res.status(201).send(user)
})

app.delete("/deleteuser/:id", async (req,res)=>{
    const id = req.params.id
    const user = await Deleteusersbyid(id)
    res.send(user)
})

app.put("/updateuser/:id", async (req,res)=>{
    const id = req.params.id
    const {Username , Email , password} = req.body
    const user = await Updateusers(id,Username,Email,password)
    res.send(user)
})
app.post('/Login', async (req, res) => {
    try {
      const { Username, password } = req.body;
      const user = await Login(Username, password);
  
      if (user) {
        res.status(200).json({ success: true, message: 'Login Successful' , data : user});
      } else {
        res.status(401).json({ success: false, message: 'Invalid username or password' });
      }
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  });
  