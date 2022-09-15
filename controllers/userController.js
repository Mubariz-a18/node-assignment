const { addUserService, updateUserService, getUserService } = require('../services/userService')

const createUser = async (req, res) => {
    const body = req.body;
    const user = await addUserService(body);
    res.status(201).json({
        success: true,
        message: "successfully created user",
        token: user
    });
}

const updateUser = async (req, res) => {
    const id = req.params.id;
    if(!id) {
        throw Error("id is required")
    }
    const body = req.body;
    await updateUserService(id,body);
    res.status(200).json({
        success: true,
        message: "successfully updated"
    });
}

const getUsers = async (req,res) => {
    const users = await getUserService();
    res.status(200).json(users);
}

module.exports= { createUser, updateUser, getUsers }