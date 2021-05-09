const Page = require("./page");

class RegisterPage extends Page {

  get inputEmail() {
    return $("#email");
  }

  get inputFullName() {
    return $("#full-name");
  }

  get inputPassword() {
    return $("#password");
  }

  get inputConfirmPassword() {
    return $("#confirm-password");
  }

  get btnRegister() {
    return $("#register");
  }

  get emailError() {
    return $("#email-error");
  }

  get fullNameError() {
    return $("#full-name-error");
  }

  get passwordError() {
    return $("#password-error");
  }

  get confirmPasswordError() {
    return $("#confirm-password-error");
  }

  get submitValues() {
    return $("#submit-values");
  }

  getMessage() {
    return this.submitValues;
  }

  register(email, fullName, password, confirmPassword) {
    (this.inputEmail).setValue(email);
    (this.inputFullName).setValue(fullName);
    (this.inputPassword).setValue(password);
    (this.inputConfirmPassword).setValue(confirmPassword);
    (this.btnRegister).click();
  }

  open() {
    return super.open("register.html");
  }

  expectSuccessRequest() {
    browser.expectRequest('POST', 'http://localhost:4000/users/register', 200);
  }

  getRegisterResponse() {
    return browser.getRequest(0).response.body.message;
  }

}

module.exports = new RegisterPage();
