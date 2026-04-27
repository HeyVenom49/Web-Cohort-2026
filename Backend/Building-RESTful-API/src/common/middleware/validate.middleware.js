import ApiError from "../utils/ApiError.js";

const validate = (Dtoclass) => {
  return (req, _, next) => {
    const { errors, value } = Dtoclass.validate(req.body);

    if (errors) {
      throw ApiError.badRequest(errors.join(","));
    }
    req.body = value; // req.body ko value se modify karna hai yaha ab
    next();
  };
};

export default validate;
