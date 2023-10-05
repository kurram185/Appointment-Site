const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("./schema");
const authentication = require("./authentication");
const cookieParser = require("cookie-parser");
const nodemailer = require("nodemailer");
require("./conn");

router.get("/", (req, res) => {
  res.send("Hello from the routing");
});

router.post("/register", (req, res) => {
  const { name, userName, email, doctor, password, cPassword } = req.body;
  console.log(req.body);
  if (
    !name ||
    !userName ||
    !email ||
    doctor == null ||
    !password ||
    !cPassword
  ) {
    return res.status(422).json({ error: "Please Fill The All Fields" });
  }

  User.find({ $or: [{ email: email }, { userName: userName }] }).then(
    (userExist) => {
      if (userExist.length !== 0) {
        return res
          .status(422)
          .json({ error: "Email or username already exist" });
      }

      const user = new User({
        name,
        userName,
        email,
        doctor,
        password,
        cPassword,
      });

      user
        .save()
        .then(() => {
          res.status(201).json({ message: "Register Successfully" });
        })
        .catch((err) => {
          res.status(500).json({ error: "Registration Failed" });
          console.log(err);
        });
    }
  );
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ error: "Please Fill the Fields" });
  }

  const userLogin = await User.find({
    $or: [{ email: email }, { userName: email }],
  });
  if (userLogin.length !== 0) {
    console.log(userLogin);
    const isMatch = await bcrypt.compare(password, userLogin[0].password);

    const token = await userLogin[0].generateAuthToken();

    res.cookie("jwToken", token, {
      expires: new Date(Date.now() + 25892000000),
      httpOnly: true,
    });
    const isDoc = userLogin[0].doctor;
    if (isMatch) {
      return res.status(200).json({
        message: `${isDoc ? "doctor" : "patient"}`,
      });
    } else {
      return res.status(400).json({ error: "Incorrect Detail" });
    }
  } else {
    return res.status(400).json({ error: "Incorrect Details" });
  }
});
router.use(cookieParser());
router.post("/booking", async (req, res) => {
  const {
    firstName,
    lastName,
    birthDate,
    birthMonth,
    birthYear,
    gender,
    phone,
    address,
    city,
    state,
    email,
    appliedBefore,
    procedure,
    appointDate,
  } = req.body;
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL,
        pass: process.env.PASS,
      },
    });

    const mail = await transporter.sendMail({
      from: process.env.MAIL,
      to: email,
      subject: "Appointment",
      text: "Congratulations",
      html: "<b>Appointment has been booked</b>",
    });
    console.log(mail.messageId);
  } catch (error) {
    console.log(error);
  }
  res.status(200).json({ message: "successful" });
  console.log(req.body);
});

module.exports = router;
