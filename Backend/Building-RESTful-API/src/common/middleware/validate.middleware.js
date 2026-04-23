import ApiError from "../utils/ApiError.js";

const validate = (BaseDTO) => {
  return (req, _, next) => {
    const { errors, value } = BaseDTO.validate(req.body);

    if (errors) {
      throw ApiError.badRequest(errors.join("; "));
    }

    req.body = value; // bhai isko yaad rakhna hai ye filter out karke bus validate data jayega
    next();
  };
};

export default validate;
