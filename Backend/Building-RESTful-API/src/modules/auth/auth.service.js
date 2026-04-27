import ApiError from "../../common/utils/ApiError.js";
import {
  generateAccessToken,
  generateRefreshToken,
  generateResetToken,
  hashToken,
  verifyRefreshToken,
} from "../../common/utils/jwt.utils.js";
import User from "./auth.model.js";

const register = async ({ name, email, password, role }) => {
  const existing = await User.findOne({ email: email });

  if (existing) throw ApiError.conflict("Email already exists");

  const { rawToken, hashedToken } = generateResetToken();

  const user = await User.create({
    name,
    email,
    password,
    role,
    verificationToken: hashedToken,
  });

  //send an email to user with token: rawToken
  const userObj = user.toObject();
  delete userObj.password;
  delete userObj.verificationToken;
  return userObj;
};

const login = async ({ email, password }) => {
  const user = await User.findOne({ email }).select("+password +isVerified");
  if (!user)
    throw ApiError.unauthorized("Email or Password might be wrong, try again!");
  const isMatch = await user.comparePassword(password);
  if (!isMatch)
    throw ApiError.unauthorized("Email or Password might be wrong, try again!");

  if (!user.isVerified)
    throw ApiError.forbidden("Please verify email before login");

  const accessToken = generateAccessToken({
    id: user._id,
    email: user.email,
    role: user.role,
  });
  const refreshToken = generateRefreshToken({ id: user._id });

  user.refreshToken = hashToken(refreshToken);

  await user.save({ validateBeforeSave: false });

  const userObj = user.toObject();
  delete userObj.password;
  delete userObj.refreshToken;
  return { user: userObj, accessToken, refreshToken };
};

const refresh = async (token) => {
  if (!token) throw ApiError.unauthorized("Refresh token missing");
  const decode = verifyRefreshToken(token);

  const user = await User.findById(decode.id).select("+refreshToken");
  if (!user) throw ApiError.unauthorized("User not found");
  if (!user.refreshToken || user.refreshToken !== hashToken(token))
    throw ApiError.unauthorized("Invalid refresh token");
  const accessToken = generateAccessToken({ id: user._id, role: user.role });
  return { accessToken };
};

const logout = async (userId) => {
  return await User.findByIdAndUpdate(userId, { refreshToken: null });
};

const forgotPassword = async (email) => {
  const user = await User.findOne({ email });
  if (!user) throw ApiError.notFound("No account with that email");
  const { rawToken, hashedToken } = generateResetToken();
  user.resetPasswordToken = hashedToken;
  user.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
  await user.save({ validateBeforeSave: false });
};

const getMe = async (userId) => {
  const user = await User.findById(userId);
  if (!user) throw ApiError.notFound("User not found");
  return user;
};

const verifyEmail = async (token) => {
  const hashedToken = hashToken(token);
  const user = await User.findOne({ verificationToken: hashedToken }).select(
    "+verificationToken",
  );
  if (!user) throw ApiError.badRequest("Token is expired");
  user.isVerified = true;
  user.verificationToken = undefined;
  await user.save({ validateBeforeSave: false });
  const userObj = user.toObject();
  delete userObj.password;
  delete userObj.refreshToken;
  return { user: userObj };
};

export { register, login, refresh, logout, forgotPassword, getMe, verifyEmail };
