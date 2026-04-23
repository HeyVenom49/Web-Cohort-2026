import User from "./auth.model.js";
import ApiError from "../../common/utils/ApiError.js";

const register = async ({ name, email, password, role }) => {
  const existing = await User.findOne({ email });

  if (existing) throw ApiError.conflict("User with this email already exist");
  return userObj;
};

export { register };
