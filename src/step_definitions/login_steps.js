const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');

Given('I am on the login page', async function() {
  await this.loginPage.navigateTo();
});

When('I enter valid username and password', async function() {
  await this.loginPage.enterUsername('validuser@example.com');
  await this.loginPage.enterPassword('validpassword');
});

When('I enter invalid username and password', async function() {
  await this.loginPage.enterUsername('invaliduser@example.com');
  await this.loginPage.enterPassword('invalidpassword');
});

When('I click the login button', async function() {
  await this.loginPage.clickLoginButton();
});

Then('I should be logged in successfully', async function() {
  // Wait for redirection or dashboard element
  await this.driver.wait(
    this.until.elementLocated(this.loginPage.dashboardElement), 
    10000
  );
  
  const isDashboardVisible = await this.loginPage.isDashboardVisible();
  expect(isDashboardVisible).to.be.true;
});

Then('I should see my dashboard', async function() {
  const currentUrl = await this.driver.getCurrentUrl();
  expect(currentUrl).to.include('/dashboard');
});

Then('I should see an error message', async function() {
  const errorMsg = await this.loginPage.getErrorMessage();
  expect(errorMsg).to.not.be.empty;
});

Then('I should remain on the login page', async function() {
  const currentUrl = await this.driver.getCurrentUrl();
  expect(currentUrl).to.include('/login');
});