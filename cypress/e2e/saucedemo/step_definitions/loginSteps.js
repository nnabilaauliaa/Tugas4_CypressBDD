import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am logged in as admin", () => {
  cy.loginAsAdmin("standard_user", "secret_sauce");
});

Given("I open the Saucedemo login page", () => {
    cy.visit("https://www.saucedemo.com/");
  });

When("I enter the username {string} and password {string}", (username, password) => {
  cy.get('[data-test="username"]').type(username);
  cy.get('[data-test="password"]').type(password);
});

When("I click the login button", () => {
  cy.get('[data-test="login-button"]').click().wait(500);
});

Then("Show error message", () => {
    cy.get('[data-test="error"]').should("contain", "Username and password do not match")
});
  