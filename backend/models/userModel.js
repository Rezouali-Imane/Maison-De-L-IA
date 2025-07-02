import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
       validate: {
            validator: function(v) {
               return /@(se\.)?univ-bejaia\.dz$/.test(v);
            },
            message: props => `${props.value} you must be a student at the University of Bejaia!`
        }
    },
    password: {
        type: String,
        required: true,
    },
    lastLogin: {
        type: Date,
        default: Date.now
    },
    isverified: {
        type: Boolean,
        default: false
    },
    resetPasswordtoken : string,
    resetPasswordExpiresAt : Date,
    verificationToken: string,
    verificationTokenExpiresAt: Date

}, { timestamps: true });
export const User = mongoose.model("User", userSchema);