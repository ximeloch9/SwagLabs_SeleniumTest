class LoginPage {
  constructor(driver) {
    this.driver = driver;
    this.usernameField = "#user-name";
    this.passwordField = "#password";
    this.loginButton = "#login-button";
  }

  async enterUsername(username) {
    await this.driver.$(this.usernameField).setValue(standard_user);
  }

  async enterPassword(password) {
    await this.driver.$(this.passwordField).setValue(secret_sauce);
  }

  async clickLogin() {
    await this.driver.$(this.loginButton).click();
  }
}

module.exports = LoginPage;
