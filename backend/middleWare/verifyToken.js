import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    if ( !token ){
            return res.status(401).json({ message: "no authorization token" });
        };

    try { 
        const decoded = jwt.verify(token, process.env.JWTSecret);
        if( !decoded ) { 
            return res.status(401).json({ message: "invalid token" });
        }


        req.userId = decoded.userId;
        next();
    } catch (error) {
        console.error("Token verification failed:", error);
        return res.status(401).json({ message: "server error" });
    }
};
