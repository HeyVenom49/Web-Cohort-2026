import * as authService from "./auth.service.js";
import ApiResponse from "../../common/utils/ApiResponse.js";

const register = async (req, res) => {
  const user = await authService.register(req.body);
  ApiResponse.created(res, "Register successful", user);
};

export { register };
