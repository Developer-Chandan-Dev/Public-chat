import jwt from "jsonwebtoken";
// const { jwt } = pkg;
import User from "../Models/User.model.js";

// Middleware
const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.chatapp_jwt;
    // cookie/token === null || not found
    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorized - No Token Provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ error: "Unauthorized - Invalid token" });
    }

    const user = await User.findById(decoded.userId).select("-password");
    console.log(token, decoded, user, '22');
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("Error in protectRoute middleware", error.message);
    res.status(500).json({ error: "Internal error message" });
  }
};

export default protectRoute;
