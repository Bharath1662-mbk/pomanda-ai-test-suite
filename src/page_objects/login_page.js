class LoginPage {
    constructor(driver) {
      this.driver = driver;
      this.url = 'https://dev-ai.pomandauk.co.uk/login';
      this.usernameInput = { id: 'username' };
      this.passwordInput = { id: 'password' };
      this.loginButton = { css: 'button[type="submit"]' };
      this.errorMessage = { css: '.error-message' };
      this.dashboardElement = { css: '.dashboard-welcome' };
    }
  
    async navigateTo() {
      await this.driver.get(this.url);
    }
  
    async enterUsername(username) {
      await this.driver.findElement(this.usernameInput).sendKeys(username);
    }
  
    async enterPassword(password) {
      await this.driver.findElement(this.passwordInput).sendKeys(password);
    }
  
    async clickLoginButton() {
      await this.driver.findElement(this.loginButton).click();
    }
  
    async getErrorMessage() {
      return await this.driver.findElement(this.errorMessage).getText();
    }
  
    async isDashboardVisible() {
      return await this.driver.findElement(this.dashboardElement).isDisplayed();
    }
  
    async getCurrentUrl() {
      return await this.driver.getCurrentUrl();
    }
  }
  
  module.exports = LoginPage;