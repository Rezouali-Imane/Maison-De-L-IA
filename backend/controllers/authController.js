import { user } from '../models/userModel.js';
import bycryptjs from 'bcryptjs';
import { genTokenAndSetCookie } from '../utils/genTokenAndSetCookie.js';
import { sendVerificationMail } from '../mailtrap/email.js';
import { sendWelcomeEmail } from '../mailtrap/email.js';
import { sendResetPassEmail } from '../mailtrap/email.js';
import crypto from 'crypto';

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
  const {email, password} = req.body;
  try {
    const foundUser = await user.findOne({email});
    if(!foundUser){
      return res.status(400).json({success: false, message: "invalid credentials"});
    }
    const isPassValid = await bycryptjs.compare(password, foundUser.password);
    if(!isPassValid){
      return res.status(400).json({success: false, message: "password incorrect"});
    }

    genTokenAndSetCookie(foundUser, res);
    foundUser.lastLogin = Date.now();
    await foundUser.save();
    res.status(200).json({
      success: true,
      message: "user logged in successfully",
      user: {
        ...foundUser._doc,
        password: undefined,
      }
    })

  }catch (error) {
    console.log("invalid login attempt", error);
    res.status(500).json({success: false, message: error.message});
  }
};

//!logout endpoint

export const logout = async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ success: true, message: "Logged out successfully" });
    };

//!forgot password endpoint
export const forgotPassword = async (req, res) => { 
  const { email } = req.body;
  try {
    const foundUser = await user.findOne({ email }); 
    if( !foundUser){
      return res.status(400).json({ success: false, message: "User not found" });
    }
    //* generate a reset code token
    const resetToken = crypto.randomBytes(20).toString('hex');
    const resetTokenExpiresAt = Date.now() + 30 * 60 * 1000; 

    foundUser.resetPasswordtoken = resetToken;
    foundUser.resetPasswordExpiresAt = resetTokenExpiresAt;

    await foundUser.save();
    //* send the reset password email
    await sendResetPassEmail(foundUser.email, `${process.env.Client_URL}/resetPassword/${resetToken}`);

    res.status(200).json({
      success: true,
      message: "Reset password email sent successfully",
    });
  } catch (error) {
    console.error("Error resetting password", error);
    res.status(500).json({ success: false, message: error.message });
  }
}

//!reset password endpoint
export const resetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    const foundUser = await user.findOne({
      resetPasswordtoken: token,
      resetPasswordExpiresAt: { $gt: Date.now() }
    })
    if (!foundUser) {
      return res.status(400).json({ success: false, message: "Invalid or expired reset token" });
    }

    //! update the new password 
    const hashedPass = await bycryptjs.hash(password, 8);

    foundUser.password = hashedPass;
    foundUser.resetPasswordtoken = undefined;
    foundUser.resetPasswordExpiresAt = undefined;
    await foundUser.save();

    sendPasswordResetConfirmationEmail(foundUser.email, foundUser.name);

    
    res.status(200).json({success: true, message: "Password reset successfully"});
  } catch (error) {
    console.error("Error resetting password", error);
    res.status(500).json({ success: false, message: error.message });
  }
} 

//!Authentication middleware

export const checkAuth = async (req, res, next) => {
  try {
    const user = await user.findById(req.userId).select("-password");
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    res.status(200).json({ success: true, user });
  } catch (error) {
    console.error("Error checking authentication", error);
    res.status(500).json({ success: false, message: error.message });
  }
};