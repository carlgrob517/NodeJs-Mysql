'use strict';

var User = require('../model/UserModel.js');

exports.create_a_user = function(req, res) {
    var new_user = new User(req.body);    
    //handles null error 
    if(!new_user.phone || !new_user.created_at){  
              res.status(400).send({ error:true, message: 'Please provide user/status' });  
    } else{

        User.createUser(new_user, function(err, user) {        
            if (err)
                res.send(err);                                
            //res.json(user);
            res.status(200).send({ error:false, user_id:user });

        });
    }
  };
