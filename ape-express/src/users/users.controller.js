const userModel = require("./users.model");

const all = async (req, res) => {
    const users = await userModel.getAll();
    res.json(users);
};

const create = async (req, res) => {
    const user = await userModel.create(req.body);
    res.json(201).json(user);
};

const get = async (req,res) => {
    const id = req.params.id; //se hace así cuando quieres usar un parámetro con un nombre determinado que has puesto en la ruta (en este caso id)
    const user = await userModel.getId(id);
    res.status(201).json(user);
};

const update = async (req,res) => {
    const id = req.params.id;
    const user = await userModel.update(id,req.body);
    res.status(201).json(user);
};

const remove = async (req,res) => {
    const id = req.params.id;
    await userModel.deleteId(id);
    res.status(201).json("Successfully deleted!")
};



module.exports = {
    all,
    create,
    get,
    update,
    remove
};