const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');

Given('I am on the Pomandauk AI homepage', async function() {
  await this.homePage.navigateTo();
});

Then('I should see the main heading', async function() {
  const headingText = await this.homePage.getMainHeading();
  expect(headingText).to.not.be.empty;
});

Then('I should see navigation links', async function() {
  const navLinks = await this.homePage.getNavigationLinks();
  expect(navLinks.length).to.be.greaterThan(0);
});

Then('I should see information about AI services', async function() {
  const isServicesSectionVisible = await this.homePage.isAiServicesSectionVisible();
  expect(isServicesSectionVisible).to.be.true;
});

When('I click on the login button', async function() {
  await this.homePage.clickLoginButton();
});

Then('I should be redirected to the login page', async function() {
  const currentUrl = await this.driver.getCurrentUrl();
  expect(currentUrl).to.include('/login');
});