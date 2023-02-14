import express from "express";
import auth from "./routes/auth.js";
import mongoose from "mongoose";
import { config } from "dotenv";
import verifyToken from "./middleware/auth.js";
import cors from "cors";
import User from "./models/User.js";
import pendingPayment from "./models/pendingPayment.js";
import cron from "cron";
import { sendEmail } from "./services/sendEmail.js";
(async () => {
  await config();
  await mongoose.connect(process.env.dbURI).then(() => {
    console.log("Database Connected");
  });

  const app = express();

  app.use(express.json());
  app.use(express.urlencoded());
  app.set("view engine", "ejs");
  app.use(
    cors({
      origin: [
        "http://localhost:3000",
        "http://cryptogrowthinvestment.com",
        "https://cryptogrowthinvestment.com",
        "https://cryptogrowthinvestment.onrender.com",
      ],
    })
  );

  app.use("/auth", auth);

  app.get("/me", verifyToken, (req, res) => {
    return res.status("201").send("Authenticated");
  });

  app.get("/admin", (req, res) => {
    res.render("admin");
  });
  app.get("/users", async (req, res) => {
    const allUsers = await User.find({});
    res.json(allUsers);
  });
  app.get("/pendingPayment", async (req, res) => {
    const allPendingPayment = await pendingPayment.find({});
    res.json(allPendingPayment);
  });
  app.get("/getMyPayment", async (req, res) => {
    const { id } = req.query;
    if (!id) {
      return null;
    }
    const myPayment = await pendingPayment.find({ userId: id });
    return res.json(myPayment);
  });
  app.post("/pendingPayment", async (req, res) => {
    const { userId, email, username, payername, price, date } = req.body;
    if (date === new Date()) {
      return "impossible";
    }

    const newPayment = await pendingPayment.create({
      userId: userId,
      email: email,
      username: username,
      payername: payername,
      price: price,
    });

    return res.json(newPayment);
  });
  app.post("/deletePendingPayment", async (req, res) => {
    const { paymentId } = req.body;
    const paymentDeleted = await pendingPayment.findByIdAndDelete(paymentId);

    return res.json({
      dateDeleted: new Date(),
    });
  });
  app.post("/melaninadmin", async (req, res) => {
    const { email, deposits, earnings } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status("404").json({ data: null });
    }
    if (deposits != null) {
      await user.deposits.push(deposits);
      let firstName = "";
      if (user.fullname) {
        firstName = user.fullname.split(" ")[0];
      }
      var mailOptions = {
        from: '"Crypto Growth" <cryptogrowth1234@gmail.com>', // sender address
        to: `${email}`, // list of receivers
        subject: "You have received funds to your trading account ✔", // Subject line
        html: `<div style="padding: 30px ; margin : 0 auto; display : block; width : 500px; background-color : rgb(38,39,41); color : lightgray; border-radius : 5px;"><h2 style="text-align:center; color : white; font-size : 45px;">You've recieved funds to your Trading account</h2>  <p style="text-align:center; margin-left :10px; font-size : 26px;">${
          firstName ? `${firstName} ,` : ""
        } You've recieved $${
          user.deposits[user.deposits.length - 1]
        } into your trading Account. You can also view transaction in your transaction history </p> <a href="https://cryptogrowthinvestment.com/dashboard"><div style="color: white ; background-color : rgb(89,138,240); padding:10px; width : 180px; font-size:15px ; border-radius : 5px; margin : 0 auto ; display : block; text-align :center;">Log In</div></a></div>`, // html body
      };

      sendEmail(mailOptions)
        .then(() => {
          console.log("Email sent: ");
        })
        .catch((err) => console.error(err));
    }
    if (earnings != null) {
      await user.earnings.push(earnings);
    }
    // new cron.CronJob('0 0 */12 * * *', async function() {
    //   const allDeposits = user.deposits.reduce(function (a, b) {
    //     return a + b;
    //   }, 0);
    //   await user.earnings.push(allDeposits * 25 / 100);
    //   const allEarnings = user.earnings.reduce(function (a, b) {
    //     return a + b;
    //   }, 0);
    //   user.accountBal = allDeposits + allEarnings;
    //   user.save();
    // }, null, true, 'America/Los_Angeles').start()
    const allDeposits = user.deposits.reduce(function (a, b) {
      return a + b;
    }, 0);
    const allEarnings = user.earnings.reduce(function (a, b) {
      return a + b;
    }, 0);
    user.accountBal = allDeposits + allEarnings;
    user.save();
    return res.status(200).json(user);
  });
  const PORT = process.env.PORT || 4000;

  app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
  });
})();
