Feature: Checkout to Saucedemo

Scenario: Successful Login with Valid Credential
    Given I open the Saucedemo login page
    When I enter the username "standard_user" and password "secret_sauce"
    And I click the login button
    Then I should be redirected to the inventory page