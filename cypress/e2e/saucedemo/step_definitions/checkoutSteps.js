import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("Successful login", () => {
  cy.loginAsAdmin("standard_user", "secret_sauce");
});

When("I click cart button", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
})

Then("Shopping cart increases", () => {
    cy.get('[data-test="remove-sauce-labs-bike-light"]').should('contain', 'Remove')
    cy.get('[data-test="shopping-cart-badge"]').scrollIntoView().should('contain', '1').wait(5000)
})

When("Click Shopping Cart button", () => {
    cy.get('[data-test="shopping-cart-link"]').click()
})

Then("Show added item", () => {
    cy.get('[data-test="inventory-item-name"]').should('contain', 'Bike Light')
})

When("Click Checkout", () => {
    cy.get('[data-test="checkout"]').click()
})

When("Filling the form", () => {
    cy.get('[data-test="firstName"]').type('Nabila')
    cy.get('[data-test="lastName"]').type('Aulia')
    cy.get('[data-test="postalCode"]').type('12230')
})

When("Click Continue button", () => {
    cy.get('[data-test="continue"]').click()
})

When("Show checkout preview", () => {
    cy.get('[data-test="inventory-item-name"]').should('contain', 'Bike Light')
})

When("Click Finish", () => {
    cy.get('[data-test="finish"]').click()
})

Then ("Order completed", () => {
    cy.get('[data-test="complete-header"]').should('contain', "Thank you for your order!")
    cy.get('[data-test="back-to-products"]').click()
    cy.url().should("include", "/inventory.html");
})

// Given("I already in inventory page", () => {
//     cy.loginAsAdmin("standard_user", "secret_sauce");
//   });
  
//   When("I click remove", () => {
//     cy.get('[data-test="remove-sauce-labs-bike-light"]')
//     .scrollIntoView()
//     .should('contain', 'Remove')
//     .click()
//   })
  
//   Then("Shopping cart decrease", () => {
//     cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').should('contain', 'Add to cart')
//     // cy.get('[data-test="shopping-cart-badge"]').scrollIntoView().wait(5000).should('not.exist')
//   })