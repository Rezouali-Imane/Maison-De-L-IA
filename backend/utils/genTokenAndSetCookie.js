import jwt from 'jsonwebtoken';

export const genTokenAndSetCookie = (user, res) => {
    const token = jwt.sign({userId: user._id},process.env.JWTSecret, {
        expiresIn : '7days'
    })
    res.cookie("authToken", token,{
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict", //*csrf protection
        maxAge : 7*24*60*60*1000,
    });
    return token;
}