import joi from "joi";

const userScheme = joi.object({
  name: joi.string().min(3).required(),
  email: joi.string().email().required(),
});

const validateUser = (req, res, next) => {
  const { error } = userScheme.validate(req.body);
  if (error)
    return res.status(400).json({
      status: 400,
      message: error.detail[0].message,
    });
  next();
};

export default validateUser;
