const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateUser(data) {
  let errors = {};
  data.name = !isEmpty(data.name) ? data.name : '';
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.address = !isEmpty(data.address) ? data.address : "";
  data.isAdmin = !isEmpty(data.isAdmin) ? data.isAdmin : "";
 
  if (validator.isEmpty(data.name)) {
    errors.Lastname = "Required name";
  }
  if (!validator.isEmail(data.email)) {
    errors.email = "Format Email required";
  }
  if (validator.isEmpty(data.email)) {
    errors.email = "Required Email";
  }
  if (validator.isEmpty(data.password)) {
    errors.Firstname = "Required password";
  }
  if (validator.isEmpty(data.address)) {
    errors.address = "Required Address";
  }

  return {
      errors,
      isValid: isEmpty(errors)
  }

};