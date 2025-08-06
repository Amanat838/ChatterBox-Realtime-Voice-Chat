const tokenService = require("../services/token-service");

module.exports = async function (req, res, next) {
  try {
    const { accessToken } = req.cookies;
    if (!accessToken) {
      return res.status(401).json({ message: "Invalid token" }); // ✅ return added
    }

    const userData = await tokenService.verifyAccessToken(accessToken);
    if (!userData) {
      return res.status(401).json({ message: "Invalid token" }); // ✅ return added
    }

    req.user = userData;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" }); // ✅ return added
  }
};
