import { user } from '../models/userModel.js';
import bycryptjs from 'bcryptjs';
import { genTokenAndSetCookie } from '../utils/genTokenAndSetCookie.js';
import { sendVerificationMail } from '../mailtrap/email.js';
import { sendWelcomeEmail } from '../mailtrap/email.js';
import { welcomeEmailTemplate } from "../mailtrap/mailTemp.js";

//!signup endpoint

export const signup = async (req, res) => {
  console.log("Signup endpoint hit", req.body); 
  //*fields requirement
  const { name, email, password } = req.body;
  try {
    if (!email || !password || !name) {
      throw new Error("please fill all the fields");
    }
    const userAlreadyExists = await user.findOne({ email });
    if (userAlreadyExists) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }
   //*crypting passwords + verification token
   const hashedPassword = await bycryptjs.hash(password, 8);
   const verificationToken = Math.floor(100000 + Math.random()* 900000).toString();
   const newUser = new user({
    name,
    email,
    password: hashedPassword,
    verificationToken,
    verificationTokenExpiresAt: Date.now() + 24*60*60*1000
   })
   await newUser.save(); //*saving to db

   //*token gen + cookie setting
   genTokenAndSetCookie(newUser, res);

   //*verification email
   await sendVerificationMail(newUser.email, verificationToken); 

   res.status(201).json({
    success: true,
    message: 'user creation successful',
    user:{
        ...newUser._doc,
        password: undefined, //*we're not gona send the password back to the client/user
    }
   });
  } catch (error) {
    res.status(400).json({success: false, message: error.message});
  }
};

//!email verification endpoint
export const emailVerification = async (req, res) => {
   const { code } = req.body;
   try {
      const foundUser = await user.findOne({
         verificationToken: code,
         verificationTokenExpiresAt: { $gt: Date.now() }
      });
      if (!foundUser) {
         return res.status(400).json({ success: false, message: "Invalid/expired verification code" });
      }
      foundUser.isverified = true;
      foundUser.verificationToken = undefined;
      foundUser.verificationTokenExpiresAt = undefined;
      await foundUser.save();

      await sendWelcomeEmail(foundUser.email, foundUser.name);
      res.status(200).json({
         success: true,
         message: "Email verified successfully",
         user: {
            ...foundUser._doc,
            password: undefined,
         }
      });

   } catch (error) {
      res.status(500).json({ success: false, message: error.message });
   }
};


//!login endpoint
export const login = async (req, res) => {
};

//!logout endpoint
export const logout = async (req, res) => {
    };