import Joi from "joi";

class BaseDTO {
  static schema = Joi.object({}); // ye hum empty de rahe hai ki jo bhi isko inherit kare to override kar sake

  static validate(data) {
    const { error, value } = this.schema.validate(data, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (error) {
      const errors = error.details.map((m) => m.message);
      return { errors: errors, value: null };
    }

    return { errors: null, value };
  }
}

export default BaseDTO;
