Feature: Added country Sweden can be selected in Country dropdown and saved for account


  Scenario: Sweden can be selected in country dropdown during sign-up and account can be created with Sweden country succesfully
    Given I go to circula main page
    And I accept Cookies
    And I provide random email
    And I provide password "1Q2@3#4$5T6Y6^c"
    And I accept Terms and Conditions
    And I click on confimation button for this step
    And I provide random name, surname and phone
    And I click on confimation button for this step
    And I provide random company name
    And I select "Sweden" in country
    And I select DATEV in Channel
    When I click on confimation button for this step
    Then I see account was created and success message "Great! Now please verify your email"
    And I see provided email displayed correctly

