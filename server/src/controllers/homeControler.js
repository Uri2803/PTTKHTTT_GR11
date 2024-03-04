import ac from "../models/account";

let findUser = (req, res) =>{
    const {username} = req.body;
    ac.findUser(username,(err, username)=>{
        res.json({username});
    })
    
}


module.exports = {
    findUser: findUser,
}