const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  //Change fields to empty strings for Validator to work properly
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  //Validate Fields
  if (Validator.isEmpty(data.email)) {
    errors.name = "Enter your valid email";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is incorrect, please try again.";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Please enter your password.";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
