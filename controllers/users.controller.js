const Users = require('../models/users.model.js')
const ValidateUser = require('../validation/users.validation')
/*const AddUser = async (req, res) => {
    const { errors, isValid } = ValidateUser(req.body)
try {
if(!isValid){
    res.status(404).json(errors)
}
   else{ 
      await Users.findOne({Email: req.body.Email}).then(async(exist)=>{
     if(exist)
     {
         errors.Email = "User Exist"
         res.status(404).json(errors)
        }
        else{
            await Users.create(req.body)
            res.status(201).json({message: 'User added with success'})  }
 })
}
} catch (error) {
    console.log(error.message)
}
}
*/
const AddUser = async (req, res) => {
    const { errors, isValid } = ValidateUser(req.body);
    try {
      if (!isValid) {
        res.status(404).json(errors);
      } else {
        await Users.findOne({ Email: req.body.Email }).then(async (exist) => {
          if (exist) {
            errors.Email = "User Exist";
            res.status(404).json(errors);
          } else {
            await Users.create(req.body);
            res.status(201).json({ message: "User added with success" ,data:req.body});
          }
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };
const FindAllUser = async (req, res) => {
    try {
        const data = await Users.find()
        res.status(201).json(data)
       } catch (error) {
           console.log(error.message)
       }
   
};

const FindSingleUser = async (req, res) => {
    try {
        const data = await Users.findOne({_id: req.params.id})
        res.status(201).json(data)
       } catch (error) {
           console.log(error.message)
       }
};

const UpdateUser = async (req, res) => {
    try {
        const data = await Users.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new : true}
            )
        res.status(201).json(data)
       } catch (error) {
           console.log(error.message)
       }
};

const DeleteUser = async (req, res) => {
    try {
       await Users.findOneAndRemove({_id: req.params.id})
        res.status(201).json({message: "User deleted"})
       } catch (error) {
           console.log(error.message)
       }
   
};

module.exports = {
  AddUser,
  FindAllUser,
  FindSingleUser,
  UpdateUser,
  DeleteUser,
};
