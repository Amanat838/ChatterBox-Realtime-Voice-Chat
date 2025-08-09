const Jimp = require("jimp");
const path = require("path");
const userService = require("../services/user-service");
const UserDto = require("../dtos/user-dto");

class ActivateController {
  async activate(req, res) {
    const { name, avatar } = req.body;
    if (!name || !avatar) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    const base64Data = avatar.replace(/^data:image\/\w+;base64,/, "");
    const buffer = Buffer.from(base64Data, "base64"); //Converting base64 image to NodeJs buffer

    const imagePath = `${Date.now()}-${Math.round(Math.random() * 1e9)}.png`;

    try {
      const jimpRes = await Jimp.read(buffer);
      jimpRes
        .resize(150, Jimp.AUTO)
        .write(path.resolve(__dirname, `../storage/${imagePath}`)); //We are using jimp to resize the image, bcz user can upload an image of large size.
    } catch (error) {
      console.error("Jimp error:", error);
      return res.status(500).json({ message: "Could not process the image" });
    }

    const userId = req.user._id;
    try {
      const user = await userService.findUser({ _id: userId });
      if (!user) {
        return res.status(404).json({ message: "User not found!" });
      }
      user.activated = true;
      user.name = name;
      user.avatar = `/storage/${imagePath}`;
      await user.save();
      return res.json({ user: new UserDto(user), auth: true });
    } catch (err) {
      return res.status(500).json({ message: "Something went wrong!" });
    }
  }
}

module.exports = new ActivateController();
