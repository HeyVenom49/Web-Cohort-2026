import * as service from "./auth.service.js";
import ApiResponse from "../../common/utils/ApiResponse.js";

const register = async (req, res) => {
  const user = await service.register(req.body);
  ApiResponse.created(res, "Register", user);
};

const login = async (req, res) => {
  const { user, accessToken, refreshToken } = await service.login(req.body);
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    maxAge: 5 * 24 * 60 * 1000,
    secure: process.env.NODE_ENV === "production",
  });
  ApiResponse.ok(res, "Login successful", { user, accessToken });
};

const logout = async (req, res) => {
  await service.logout(req.user.id);
  res.clearCookie("refreshToken");
  ApiResponse.ok(res, "Logout success");
};

const getMe = async (req, res) => {
  const user = await service.getMe(req.user.id);
  ApiResponse.ok(res, "User profile", user);
};

const verifyEmail = async (req, res) => {
  const user = await service.verifyEmail(req.params.token);
  ApiResponse.ok(res, "Token verifies successfully", user);
};
export { register, login, logout, getMe, verifyEmail };
