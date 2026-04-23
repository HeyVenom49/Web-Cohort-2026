import Joi from "joi";
import BaseDTO from "../../../common/dto/base.dto.js";

class RegisterDTO extends BaseDTO {
  static schema = Joi.object({
    name: Joi.string().trim().min(3).max(50).required(),
    email: Joi.string().trim().lowercase().required(),
    password: Joi.string()
      .min(5)
      .max(12)
      .message(
        "Minimum length should be 5 character and maximum should be 12 character",
      )
      .required(),
    role: Joi.string()
      .required()
      .valid("customer", "seller")
      .default("customer"),
  });
}

export default RegisterDTO;
