const Page = require("./page");

class LoginPage extends Page {

  get inputEmail() {
    return $("#email");
  }

  get inputPassword() {
    return $("#password");
  }

  get submitValues() {
    return $("#submit-values");
  }

  get btnSignIn() {
    return $("#sign-in");
  }

  get emailError() {
    return $("#email-error");
  }

  get passwordError() {
    return $("#password-error");
  }

  get registerLink() {
    return $("#register");
  }

  getMessage() {
    return this.submitValues;
  }

  login(email, password) {
    (this.inputEmail).setValue(email);
    (this.inputPassword).setValue(password);
    (this.btnSignIn).click();
  }

  goToRegister() {
    (this.registerLink).click();
  }

  setEmail(email) {
    (this.inputEmail).setValue(email);
  }

  open() {
    return super.open("login.html");
  }

  expectSuccessRequest() {
    browser.expectRequest('PUT', 'http://localhost:4000/login', 200);
  }

  getLoginResponse() {
    return browser.getRequest(0).response.body.message;
  }

  expectFailureRequest() {
    browser.expectRequest('PUT', 'http://localhost:4000/login', 401);
  }

}

module.exports = new LoginPage();
