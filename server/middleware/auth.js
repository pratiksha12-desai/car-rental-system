import jwt from "jsonwebtoken";
import User from "../models/User.js";

const JWT_SECRET = process.env.JWT_SECRET || "car-rental-dev-secret";

export const protect = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.json({ success: false, message: "Not authorized, please login again" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.json({ success: false, message: "Not authorized, please login again" });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.json({ success: false, message: "Not authorized, please login again" });
  }
};
