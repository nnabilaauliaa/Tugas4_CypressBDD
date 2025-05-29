Feature: Checkout in Saucedemo

Scenario: Successful Checkout
    Given Successful login
    When I click cart button
    Then Shopping cart increases
    When Click Shopping Cart button
    Then Show added item
    When Click Checkout
    And Filling the form
    And Click Continue button
    Then Show checkout preview
    When Click Finish
    Then Order completed

# Scenario: Successful Remove Shopping Cart
#     Given I already in inventory page
#     When I click add to cart button
#     And I click remove
#     Then Shopping cart decrease