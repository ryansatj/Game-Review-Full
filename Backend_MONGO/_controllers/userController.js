const User = require("../_models/userModel")
signUp = async(req, res) =>{
    const{name, email, password, username} = req.body;
    const user = new User({
        username, name, email, password
    })
    try{
        await user.save();
        res.status(201).json(user);
    } catch(err){
        console.error(err);
        res.status(500).send(err);
        
    }
}

login = async(req, res) => {
    const{username, password} = req.body;
    try{
        const user = await User.findOne({
            username, password
        });
        res.status(201).json(user);
    } catch(err){
        console.error(err);
        res.status(500).send(err);
    }
}

getUserbyId = async(req, res) => {
    const{id} = req.body;
    try{
        const user = await User.findById(id);
        res.status(200).json(user); 
    } catch(err){
        console.error(err);
        res.status(500).send(err);
    }
}

module.exports = {
    signUp,
    login,
    getUserbyId
};