Feature: Homepage Functionality
  As a user
  I want to access the Pomandauk AI homepage
  So that I can learn about their services

  Scenario: View homepage content
    Given I am on the Pomandauk AI homepage
    Then I should see the main heading
    And I should see navigation links
    And I should see information about AI services

  Scenario: Navigate to login page
    Given I am on the Pomandauk AI homepage
    When I click on the login button
    Then I should be redirected to the login page