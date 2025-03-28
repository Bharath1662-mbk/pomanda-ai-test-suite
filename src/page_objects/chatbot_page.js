class ChatbotPage {
    constructor(driver) {
      this.driver = driver;
      this.chatbotInterface = { css: '.chatbot-interface' };
      this.chatInput = { css: '.chatbot-input' };
      this.sendButton = { css: '.chatbot-send-btn' };
      this.chatMessages = { css: '.chat-message' };
      this.lastBotResponse = { css: '.bot-message:last-child' };
    }
  
    async isChatbotInterfaceOpen() {
      return await this.driver.findElement(this.chatbotInterface).isDisplayed();
    }
  
    async typeMessage(message) {
      await this.driver.findElement(this.chatInput).sendKeys(message);
    }
  
    async sendMessage() {
      await this.driver.findElement(this.sendButton).click();
    }
  
    async getLastBotResponse() {
      // Add a wait to give the bot time to respond
      await this.driver.wait(until.elementLocated(this.lastBotResponse), 10000);
      return await this.driver.findElement(this.lastBotResponse).getText();
    }
  
    async getChatMessages() {
      return await this.driver.findElements(this.chatMessages);
    }
  }
  
  module.exports = ChatbotPage;