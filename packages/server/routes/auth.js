import { compare, hash } from "bcrypt";
import { Router } from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
import { sendEmail } from "../services/sendEmail.js";
const auth = Router();
(async () => {
  await config();

  auth.post("/register", async (req, res) => {
    try {
      const refUsername = req.query.ref;

      console.log("username: ", refUsername);

      const refUser = await User.findOne({ username: refUsername });

      if (refUser) {
        refUser.referral = refUser.referral + 1;
        await refUser.save();
      }

      const emailUsed = await User.findOne({ email: req.body.email });
      const userUsed = await User.findOne({ username: req.body.username });
      if (emailUsed && userUsed) {
        return res.status(203).json({
          status: 203,
          msg: "Email and username  already in use , Try login again",
        });
        // return console.log(`Email already in use ${email}`)
      }
      if (emailUsed) {
        return res.status(203).json({
          status: 203,
          msg: "Email already used",
        });
        // return console.log(`Email already in use ${email}`)
      }

      if (userUsed) {
        return res.status(203).json({
          status: 203,
          msg: "Username already exists",
        });
      }

      const { username, email, password, fullname } = req.body;

      const hashedPassword = await hash(password, 12);

      const newUser = await User.create({
        fullname,
        username,
        email,
        password: hashedPassword,
      });

      const token = jwt.sign(
        { user_id: newUser._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: 1000 * 60 * 60 * 24 * 365,
        }
      );
      // save user token
      newUser.token = token;
      res
        .cookie("jwt", token, {
          httpOnly: true,
          maxAge: 365 * 24 * 60 * 60 * 1000,
        })
        .status(200)
        .json(newUser);
    } catch (err) {
      console.log(err);
    }
  });

  auth.get("/getUser", async (req, res) => {
    const id = req.query._id;

    const found = await User.findById(id);

    if (!found) {
      return res.status(404).json({ msg: "No user with that id" });
    }

    return res.status(200).json(found);
  });

  auth.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      const auth = await compare(password, user.password);
      if (auth) {
        const token = jwt.sign(
          { user_id: user._id, email },
          process.env.TOKEN_KEY,
          {
            expiresIn: 1000 * 60 * 60 * 24 * 365,
          }
        );

        // save user token
        user.token = token;
        return res
          .cookie("jwt", token, {
            httpOnly: true,
            maxAge: 365 * 24 * 60 * 60 * 1000,
          })
          .status(200)
          .json(user);
      }
      return res.status(203).json({ msg: "incorrect password" });
    }
    return res
      .status(203)
      .json({ msg: "User does not exist , Try create an Account" });
  });

  auth.post("/editDetails", async (req, res) => {
    const { oldEmail } = req.query;
    const { email, username, password, fullname, oldPassword } = req.body;
    const user = await User.findOne({ email: oldEmail });
    if (!user) {
      return res.status(203).json({ msg: "you were not found " });
    }
    const comparePassword = await compare(oldPassword, user.password);
    if (!comparePassword) {
      return res.status(203).json({ msg: "old password Incorrect" });
    }
    const hashedPassword = await hash(password, 12);
    user.fullname = fullname;
    user.email = email;
    user.username = username;
    user.password = hashedPassword;

    user.save();
    return res.status(200).json(user);
  });

  auth.post("/forgotPassword", async (req, res) => {
    const { email } = req.query;
    const { password, Otp } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      if (Otp == user.Otp) {
        const hashedPassword = await hash(password, 12);
        user.password = hashedPassword;
        user.Otp = 0;
        user.save();
        return res.status(200).json(user);
      } else {
        return res
          .status(203)
          .json({ msg: "The Otp you entered is incorrect" });
      }
    }

    return res.status(203).json({ msg: "you were not found " });
  });
  auth.post("/sendForgotPasswordEmail/", async (req, res) => {
    const { email } = req.query;
    let Otp = Math.floor(100000 + Math.random() * 900000);
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(203).json({ msg: "This user does not exists" });
    }
    user.Otp = Otp;
    user.save();
    var mailOptions = {
      from: '"Crypto Growth" <cryptogrowth1234@gmail.com>', // sender address
      to: `${email}`, // list of receivers
      subject: "CryptoGrowth || Reset Your Password ✔", // Subject line
      html: `<div style="padding: 0 30px ;"><h4>Hi!</h4> <p>
        Looks like you're having some trouble logging in.
        </p> <h1 style="text-align:center;">${Otp}</h1> <p>Use this code on the website and you'll be able to set a new password for your account.</p></div>`, // html body
    };

    sendEmail(mailOptions)
      .then(() => {
        console.log("Email sent: ");
      })
      .catch((err) => console.error(err));

    return res.status(200).json({ msg: "Email Sent" });
  });

  auth.post("/sendVerifyEmail/", async (req, res) => {
    const { email } = req.query;
    let Otp = Math.floor(100000 + Math.random() * 900000);
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(203).json({ msg: "user not found" });
    }
    user.Otp = Otp;
    user.save();
    var mailOptions = {
      from: '"Crypto Growth" <cryptogrowth1234@gmail.com>', // sender address
      to: `${email}`, // list of receivers
      subject: "CryptoGrowth || Verify your Email Address ✔", // Subject line
      html: `<div style="padding: 0 30px ;"><h4>Hi There!</h4> <p>
      Welcome to Crypto Growth! Ready to experience all the benefits of being financially independent? Before you head off to the races, make sure to verify your email address using the code below:
      </p> <h1 style="text-align:center;">${Otp}</h1> <p>Use this code on the website to confirm your email addres</p></div>`, // html body
    };

    sendEmail(mailOptions)
      .then(() => {
        console.log("Email sent: ");
      })
      .catch((err) => console.error(err));

    return res.status(200).json({ msg: "Email Sent" });
  });

  auth.post("/verifyEmail/", async (req, res) => {
    const { email } = req.query;
    const { number } = req.body;
    const user = await User.findOne({ email });
    if (user.isEmailVerified) {
      return res.status(203).json({ msg: "Email is already verified" });
    }
    if (number == user.Otp) {
      user.isEmailVerified = true;
      user.Otp = 0;
      user.save();
      return res.status(200).json({ msg: "Email Verified" });
    }
    return res.status(203).json({ msg: "The Otp is incorrect" });
  });

  auth.get("/logout", (req, res) => {
    res.clearCookie("jwt");
  });
})();
export default auth;
