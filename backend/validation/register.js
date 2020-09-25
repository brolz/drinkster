const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  //turn inputs into strings if empty because isEmpty only validates strings
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  //check validations

  //Name field check
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required.";
  }

  //Email field checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email is required!";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid.";
  }

  //Check password fields
  if (Validator.isEmpty(data.password)) {
    errors.password = "A password is required.";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Please confirm your password.";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters long.";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match.";
  }

  console.log(errors);
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
