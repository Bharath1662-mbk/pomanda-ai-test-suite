const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');

Given('I am on the homepage with the chatbot widget', async function() {
  await this.homePage.navigateTo();
});

Given('the chatbot interface is open', async function() {
  await this.homePage.navigateTo();
  await this.homePage.clickChatbotIcon();
  
  const isChatbotOpen = await this.chatbotPage.isChatbotInterfaceOpen();
  expect(isChatbotOpen).to.be.true;
});

When('I click on the chatbot icon', async function() {
  await this.homePage.clickChatbotIcon();
});

Then('the chatbot interface should open', async function() {
  const isChatbotOpen = await this.chatbotPage.isChatbotInterfaceOpen();
  expect(isChatbotOpen).to.be.true;
});

When('I type {string} in the chatbot input', async function(message) {
  await this.chatbotPage.typeMessage(message);
});

When('I send the message', async function() {
  await this.chatbotPage.sendMessage();
});

Then('I should receive a response from the chatbot', async function() {
  const response = await this.chatbotPage.getLastBotResponse();
  expect(response).to.not.be.empty;
});

Then('the response should be relevant to my query', async function() {
  const response = await this.chatbotPage.getLastBotResponse();
  // This is a basic check - in a real test, you might want to add more specific assertions
  expect(response.length).to.be.greaterThan(5);
});