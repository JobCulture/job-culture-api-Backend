const userModels = require('../models/Users')

//Get All Users
async function getAllUsers(req, res) {
    try{
        const findAllUsers = await userModels.everyUser();
        res.status(200).json({
            userDb: findAllUsers
        });
    }catch(err) {
        res.status(500).send({message: err.message});
} 
}
//GetSingleUser
async function singleUser(req, res) {
    const id = req.params.id 
     try{
         const getSingleUser = await userModels.oneUser(id);
         res.status(200).json(getSingleUser)
     }catch(err) {
         res.status(404).send({message: err.message});
     }
 }

 //postUser
 async function newUser(req, res){
    const {name, job_location, job_position} = req.body
        if(!name || !job_location || !job_position){
        res.status(400).json({message: "must complete remainder of body"})
    }
    try {
        const createNewUser = await userModels.newUserCreate(name, job_location, job_position)
        res.status(200).json(createNewUser)
    }catch(err) {
        res.status(404).send({message: err.message});
    }
}

module.exports = {
    getAllUsers,
    singleUser,
    newUser
}