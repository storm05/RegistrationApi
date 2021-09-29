const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const UserModel = require("../model/user")
// const bcrypt = require('bcrypt');

router.post('/login', function(req,res,next){
    var username = req.body.username;
    var password= req.body.password;
    UserModel.find({username:username})
   
.then(user =>{
    if(user.length<1){
        res.status(404).json({
            message:"username is wrong"
        })
    }
    else{
        if(user[0].password!==password){
            res.status(404).json({
                message:"password is wrong"
            })
        }
        else{
            res.status(404).json({
                message:"login successfully",
                user:user
            })
        }
    }
})

    .catch(err => {
        res.json({
            error:error
        })
    })
})
// signup
router.post('/signup', function(req,res,next) {
    var username = req.body.username;
    var email = req.body.email;
    var password= req.body.password;
    
    
        
             
    var userDetails = new UserModel({
        _id:mongoose.Types.ObjectId(),
        username:username,
        email:email,
        password:password,
            
        });
        userDetails.save()
        .then(doc => {
        res.status(201).json({
        message:"User inserted successfully",
        result:doc
        });
          })
        .catch(err => {
                    res.json(err);
            })
             
});


module.exports = router