const express = require('express');
// import User from "../models/User";
const User = require('../models/User');

const router = express.Router();

//route get api/auth
//desc get all items
//@access public

router.get('/', (req, res ) =>{
    User.find()
    .sort({date:-1})
    .then(user => res.json(user));
})

//route POST api/items
//desc CREATE an item
//@access public

router.post('/', (req, res ) =>{
    const newuser = new User({                    //this is in connection with the item created in model direcrory
       email: req.body.email,                     //this is one of the object created in model, date is not included because it was set to default 
       passwordHash: req.body.passwordHash
    });

     newuser.save().then(user => res.json(user));             //then give us back the item that is saving
})


// router.post("/", (req, res) => {
//     const {credentials} = req.body;
//      User.findOne({email: credentials.email})
//     //  .sort({date: -1})
//      .then(user => {
//          if(user){

//          }
//          else{
//              res.status(400).json({errors : {global : "Invalid Credentials"}})
//          }
//      })
// });

// export default auth;
module.exports = router;