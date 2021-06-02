const mongoose = require("mongoose");

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;
console.log(today);
/*document.write(today);*/

const VanSchema = new mongoose.Schema({
    marca: String,
    modelo: String,
    matricula: String,
    kminiciales: Number,
    conductores: String,
    fechaadq: String,
    documentacion: String
});


const VanModel = mongoose.model('vans', VanSchema);

//CREAR VAN
const create = async (van) => {
    const vanCreated = await VanModel.create(van);
    return vanCreated;
};

//COGER TODAS LAS VANS
const getAll = async () => {
    const vans = await VanModel.find();
    return vans;
};

const getId = async (id) => {
    const van = await VanModel.findById(id);
    return van;
};

const update = async (id,newbody) => {
    const van = await VanModel.findByIdAndUpdate(id,newbody,{new:true});
    return van;
}

const deleteId = async (id) => {
    await VanModel.findByIdAndDelete(id);
}


module.exports = {
    create,
    getAll,
    getId,
    update,
    deleteId
};