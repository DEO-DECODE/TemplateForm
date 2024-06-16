import { errorHandler } from "../middlewares/errorHandler.js";
import { User } from "../models/userModels.js";
export const submitHandler = async (req, res, next) => {
  // console.log(req.body);
  try {
    const { name, email, country } = req.body;
    if (!name || !email || !country) {
      return next(errorHandler(401, "Please Provide All details"));
    }
    if (!req.file) {
      return next(errorHandler(401, "No file Uploaded"));
    }
    const { originalname, filename } = req.file;
    const attachment = {
      attachmentName: originalname,
      attachmentUrl: `/uploads/${filename}`,
    };
    const newUser = await User.create({
      name,
      email,
      country,
      attachment,
    });
    res.status(200).json({
      newUser,
      success: true,
      message: "Submitted Successfully",
    });
  } catch (error) {
    next(error);
  }
};
export const getDownloadUrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return next(errorHandler(404, "No User Found"));
    }
    if (!user.attachment || !user.attachment.attachmentUrl) {
      return next(errorHandler(404, "No Attachment found for this User"));
    }
    const downloadUrl = `${req.protocol}://${req.get("host")}${
      user.attachment.attachmentUrl
    }`;
    res.status(200).json({
      downloadUrl,
      success: true,
      message: `Download Url Provided`,
    });
  } catch (error) {
    next(error);
  }
};
