import ApiError from "../../common/utils/ApiError.js";
import { verifyAccessToken } from "../../common/utils/jwt.utils.js";
import User from "./auth.model.js";

const authenticate = async (req, _, next) => {
  const auth = req.headers.authorization;
  let token;
  if (auth?.toLowerCase().startsWith("bearer ")) {
    token = auth.slice(7).trim();
  }
  if (!token) throw ApiError.unauthorized("Not Authenticated");

  let decoded;
  try {
    decoded = verifyAccessToken(token);
  } catch {
    throw ApiError.unauthorized("Invalid or expired token");
  }

  const user = await User.findById(decoded.id);
  if (!user) throw ApiError.unauthorized("User no longer exists");

  req.user = {
    id: user._id,
    role: user.role,
    name: user.name,
    email: user.email,
  };
  next();
};

const authorize = (...roles) => {
  return (req, _, next) => {
    if (!roles.includes(req.user.role))
      throw ApiError.forbidden(
        "You do not have permission to perform this action",
      );
    next();
  };
};

export { authenticate, authorize };
