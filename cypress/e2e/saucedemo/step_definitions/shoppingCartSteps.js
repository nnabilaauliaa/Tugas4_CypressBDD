import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("Success login", () => {
  cy.loginAsAdmin("standard_user", "secret_sauce");
});

When("I click add to cart button", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
})

Then("Shopping cart increase", () => {
    cy.get('[data-test="remove-sauce-labs-bike-light"]').should('contain', 'Remove')
    cy.get('[data-test="shopping-cart-badge"]').scrollIntoView().should('contain', '1')
})

Given("I already in inventory page", () => {
    cy.loginAsAdmin("standard_user", "secret_sauce");
  });
  
  When("I click remove", () => {
    cy.get('[data-test="remove-sauce-labs-bike-light"]')
    .scrollIntoView()
    .should('contain', 'Remove')
    .click()
  })
  
  Then("Shopping cart decrease", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').should('contain', 'Add to cart')
    // cy.get('[data-test="shopping-cart-badge"]').scrollIntoView().wait(5000).should('not.exist')
  })