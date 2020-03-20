'user strict';
var sql = require('./db.js');


//Task object constructor
var User = function(user){    

    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.phone = user.phone;
    this.created_at = new Date();
    
};


User.createUser = function (newUser, result) {    
        sql.query("INSERT INTO users set ?", newUser, function (err, res) {
                
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res.insertId);
                    result(null, res.insertId);
                }
            });           
};

module.exports= User;