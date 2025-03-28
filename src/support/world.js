const { setWorldConstructor } = require('@cucumber/cucumber');
const { Builder, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const HomePage = require('../page_objects/home_page');
const LoginPage = require('../page_objects/login_page');
const ChatbotPage = require('../page_objects/chatbot_page');

class CustomWorld {
  constructor() {
    // Setup WebDriver
    this.driver = new Builder()
      .forBrowser('chrome')
      .setChromeOptions(new chrome.Options().addArguments('--start-maximized'))
      .build();
    
    // Initialize page objects
    this.homePage = new HomePage(this.driver);
    this.loginPage = new LoginPage(this.driver);
    this.chatbotPage = new ChatbotPage(this.driver);
    
    // Add global until for explicit waits
    this.until = until;
  }

  async quit() {
    if (this.driver) {
      await this.driver.quit();
    }
  }
}

setWorldConstructor(CustomWorld);