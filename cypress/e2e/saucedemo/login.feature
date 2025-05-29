Feature: Login to Saucedemo

Scenario: Successful Login with Valid Credential
    Given I am logged in as admin

Scenario: Unsuccessful login with Invalid Credential
    Given I open the Saucedemo login page
    When I enter the username "individualuser" and password "secret_sauce"
    And I click the login button
    Then Show error message