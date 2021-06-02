const vanModel = require("./vans.model");

const all = async (req, res) => {
    const vans = await vanModel.getAll();
    res.json(vans);
};

const create = async (req, res) => {
    const van = await vanModel.create(req.body);
    res.json(201).json(van);
};

const get = async (req,res) => {
    const id = req.params.id; //se hace así cuando quieres usar un parámetro con un nombre determinado que has puesto en la ruta (en este caso id)
    const van = await vanModel.getId(id);
    res.status(201).json(van);
};

const update = async (req,res) => {
    const id = req.params.id;
    const van = await vanModel.update(id,req.body);
    res.status(201).json(van);
};

const remove = async (req,res) => {
    const id = req.params.id;
    await vanModel.deleteId(id);
    res.status(201).json("Successfully deleted!")
};


module.exports = {
    all,
    create,
    get,
    update,
    remove
};