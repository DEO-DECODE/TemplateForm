import { User } from "../models/userModels.js";
export const submitHandler = async (req, res, next) => {
    // console.log(req.body);
  const { name, email, country } = req.body;
  const newUser = await User.create({
    name,
    email,
    country,
  });
  res.status(200).json({
    newUser,
    success: true,
    message: "Submitted Successfully",
  });
};
