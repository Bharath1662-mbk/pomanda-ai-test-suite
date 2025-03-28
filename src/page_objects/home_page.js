class HomePage {
    constructor(driver) {
      this.driver = driver;
      this.url = 'https://dev-ai.pomandauk.co.uk/';
      this.mainHeading = { css: 'h1' };
      this.navigationLinks = { css: 'nav a' };
      this.aiServicesSection = { css: '.services-section' };
      this.loginButton = { css: '.login-btn' };
      this.chatbotIcon = { css: '.chatbot-widget-icon' };
    }
  
    async navigateTo() {
      await this.driver.get(this.url);
    }
  
    async getMainHeading() {
      return await this.driver.findElement(this.mainHeading).getText();
    }
  
    async getNavigationLinks() {
      return await this.driver.findElements(this.navigationLinks);
    }
  
    async isAiServicesSectionVisible() {
      return await this.driver.findElement(this.aiServicesSection).isDisplayed();
    }
  
    async clickLoginButton() {
      await this.driver.findElement(this.loginButton).click();
    }
  
    async clickChatbotIcon() {
      await this.driver.findElement(this.chatbotIcon).click();
    }
  }
  
  module.exports = HomePage;