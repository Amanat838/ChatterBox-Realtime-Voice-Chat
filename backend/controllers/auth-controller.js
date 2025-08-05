const otpService = require("../services/otp-service");
const hashService = require("../services/hash-service");
const userService = require("../services/user-service");
const tokenService = require('../services/token-service')
const UserDto = require('../dtos/user-dto');

class AuthController {



  async sendOtp(req, res) {
    const { phone } = req.body;
    if (!phone) {
      res.status(400).json({ message: "Phone no is required" });
    }

    //Hash
    const ttl = 1000 * 60 * 20; //2min
    const expires = Date.now() + ttl;
    const otp = await otpService.generateOtp();
    const data = `${phone}.${otp}.${expires}`;
    const hash = await hashService.hashOtp(data);

    //Send OTP
    try {
      // await otpService.sendBySms(phone, otp);
      res.json({
        hash: `${hash}-${expires}`,
        phone,
        otp
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Message sending failed" });
    }
  }





  async verifyOtp(req, res) {
    const { otp, hash, phone } = req.body;
    if (!otp || !hash || !phone) {
      res.status(400).json({ message: "All fields required" });
    }

    const [hashedOtp, expires] = hash.split("-");
    if (Date.now() > +expires) {
      res.status(400).json({ message: "OTP expired" });
    }

    const data = `${phone}.${otp}.${expires}`;

    const isValid = otpService.verifyOtp(hashedOtp, data);
    if (!isValid) {
      res.status(400).json({ message: "Invalid OTP" });
    }

    let user;

    try {
      user = await userService.findUser({ phone: phone });
      if (!user) {
        user = await userService.createUser({ phone: phone });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "DB Error" });
    }

    //Token
    const {accessToken, refreshToken} = tokenService.generateTokens({_id: user._id, activated: false})


    await tokenService.storeRefreshToken(refreshToken, user._id)


    //Store tokens in cookies to make them more secure
    res.cookie('refreshToken', refreshToken, {
        maxAge: 1000 * 60 * 60 * 24 * 30,
        httpOnly: true
    })
    res.cookie('accessToken', accessToken, {
        maxAge: 1000 * 60 * 60 * 24 * 30,
        httpOnly: true
    })


    const userDto = new UserDto(user)
    res.json({user: userDto, auth: true})
  }
}

module.exports = new AuthController();
