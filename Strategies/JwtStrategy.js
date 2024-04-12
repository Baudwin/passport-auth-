const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const User =  [{
    "id":1,
    "username":"Baudwin",
    "role":"user"
}, 
{
    "id":2,
    "username":"Titah Abang",
    "role":"user"
  }
]

const options = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:"secret"
}


passport.use( new JwtStrategy(options, async(jwt_payload, done)=>{
    try {
      const user =  User.find(user=>user.id === jwt_payload.sub)
      
     if (user) {
        return done(null, user)
     }
     else{
        return done(null, false)
     }
    } catch (error) {
       console.log(error);
    }
}))