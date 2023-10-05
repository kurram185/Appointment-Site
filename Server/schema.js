const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  userName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  doctor: {
    type: Boolean,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  cPassword: {
    type: String,
    require: true,
  },
  Date: {
    type: Date,
    default: Date.now(),
  },
  tokens: [
    {
      token: {
        type: String,
        require: true,
      },
    },
  ],
  appointments: [
    {
      firstName: { type: String, require: true },
      lastName: { type: String, require: true },
      dob: { type: String, require: true },
      gender: { type: String, require: true },
      mobile: { type: Number, require: true },
      address: { type: String, require: true },
      city: { type: String, require: true },
      state: { type: String, require: true },
      email: { type: String, require: true },
      appliedBefore: { type: Boolean, require: true },
      procedure: { type: String, require: true },
      appointmentData: { type: Date, require: true },
    },
  ],
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.cPassword = await bcrypt.hash(this.cPassword, 12);
  }
  next();
});

userSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
  }
};

const User = mongoose.model("User", userSchema);
module.exports = User;
