import crypto from "crypto";
import jwt from "jsonwebtoken";

const hashToken = (token) =>
  crypto.createHash("sha256").update(token).digest("hex");

const generateResetToken = () => {
  const rawToken = crypto.randomBytes(32).toString("hex");
  const hashedToken = hashToken(rawToken);

  return { rawToken, hashedToken };
};

const generateAccessToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
    expiresIn: process.env.JWT_ACCESS_EXPIRE_IN || "15m",
  });
};

const verifyAccessToken = (token) => {
  return jwt.verify(token, process.env.JWT_ACCESS_SECRET);
};

const generateRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
    expiresIn: process.env.JWT_REFRESH_EXPIRE_IN || "5d",
  });
};

const verifyRefreshToken = (token) => {
  return jwt.verify(token, process.env.JWT_REFRESH_SECRET);
};

export {
  hashToken,
  generateResetToken,
  generateAccessToken,
  verifyAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
};
