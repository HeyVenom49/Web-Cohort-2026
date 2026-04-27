import Joi from "joi";
import BaseDto from "../../../common/dto/base.dto.js";

class RegisterDto extends BaseDto {
  static schema = Joi.object({
    name: Joi.string().trim().min(3).max(50).required(),
    email: Joi.string().email().lowercase().required(),
    password: Joi.string()
      .min(6)
      .message("Password must contains 6 character minimum")
      .max(12)
      .required(),
    role: Joi.string().valid("customer", "seller").default("customer"),
  });
}

export default RegisterDto;
