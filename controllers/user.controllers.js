const userModel = require("../models/user.model");

const register = async (req, res) => {
  try {
    const { name, age } = req.body;
    const existingUser = await userModel.findOne({ name });
    if (existingUser) {
      return res.status(409).json({
        message: "User already exists",
      });
    }
    const newUser = await userModel.create({ name, age });
    return res
      .status(201)
      .json({ message: "user created successfully", data: newUser });
  } catch (e) {
    return res.status(400).json(e);
  }
};

module.exports = {
  register,
};
