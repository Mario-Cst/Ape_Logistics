const mongoose = require("mongoose");

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;
console.log(today);
/*document.write(today);*/

const UserSchema = new mongoose.Schema({
    nombre: String,
    apellidos: String,
    telpersonal: String,
    emailpersonal: String,
    emailempresa: String,
    empresa: String,
    puesto: String
});


const UserModel = mongoose.model('users', UserSchema);

//CREAR USER
const create = async (user) => {
    const userCreated = await UserModel.create(user);
    return userCreated;
};

//COGER TODAS LOS USERS
const getAll = async () => {
    const users = await UserModel.find();
    return users;
};

const getId = async (id) => {
    const user = await UserModel.findById(id);
    return user;
};

const update = async (id,newbody) => {
    const user = await UserModel.findByIdAndUpdate(id,newbody,{new:true});
    return user;
}

const deleteId = async (id) => {
    await UserModel.findByIdAndDelete(id);
}


module.exports = {
    create,
    getAll,
    getId,
    update,
    deleteId
};