Feature: Add Shopping Cart in Saucedemo

Scenario: Successful Add Shopping Cart
    Given Success login
    When I click add to cart button
    Then Shopping cart increase

Scenario: Successful Remove Shopping Cart
    Given I already in inventory page
    When I click add to cart button
    And I click remove
    Then Shopping cart decrease