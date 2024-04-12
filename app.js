const express = require('express')
const app = express()
const passport = require('passport')
const jwt = require('jsonwebtoken')
const JwtStrategy = require('./Strategies/JwtStrategy')
const authenticateJWT = require('./Middleware/authenticateJwt')

passport.initialize()
app.use(express.json())


// app.post('/login', (req,res)=>{
//     const {id, username} = req.body
//     const user = {id,username}
//     const token =  jwt.sign({sub:user.id},"secret" )
//     res.json({token})
// })

// app.get('/protected',authenticateJWT, (req,res)=>{
//     const user = req.user
//     res.send(`Hello ${req.user.username} ${req.user.role}`)
// })

app.get("/", (req,res)=>{
    res.sendFile(__dirname + '/index.html')
    
})

app.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });




app.listen(1000, ()=>{
console.log("server running on port 1000")
})