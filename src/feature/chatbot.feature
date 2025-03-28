Feature: AI Chatbot Interaction
  As a user
  I want to interact with the AI chatbot
  So that I can get information and assistance

  Scenario: Start conversation with chatbot
    Given I am on the homepage with the chatbot widget
    When I click on the chatbot icon
    Then the chatbot interface should open
    
  Scenario: Send message to chatbot
    Given the chatbot interface is open
    When I type "Hello" in the chatbot input
    And I send the message
    Then I should receive a response from the chatbot
    And the response should be relevant to my query