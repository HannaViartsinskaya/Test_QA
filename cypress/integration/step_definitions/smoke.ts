import{Given, Then, When}from 'cypress-cucumber-preprocessor/steps';
import {BasePage}from './pageObjects/BasePage';
import {constants}from '../constants';
function getRandomName(): string {
    const firstNames = ["John", "Jane", "Alex", "Chris", "Taylor", "Morgan", "Sam", "Jordan", "Casey", "Robin"];
    const lastNames = ["Smith", "Doe", "Johnson", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor", "Anderson"];

    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

    return `${firstName} ${lastName}`;
}

function getRandomPhoneNumber(): string {
    const areaCode = Math.floor(100 + Math.random() * 900); // Random 3-digit area code
    const firstPart = Math.floor(100 + Math.random() * 900); // Random 3-digit prefix
    const secondPart = Math.floor(1000 + Math.random() * 9000); // Random 4-digit line number

    return `${areaCode}-${firstPart}-${secondPart}`;
}

function getRandomEmail(): string {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const domain = 'example.com';

    let username = '';
    const usernameLength = Math.floor(Math.random() * (10 - 5 + 1)) + 5;

    for (let i = 0; i < usernameLength; i++) {
        const randomChar = letters.charAt(Math.floor(Math.random() * letters.length));
        username += randomChar;
    }

    // Combine username with domain
    return `${username}@${domain}`;
}

Given(/^I go to circula main page$/, function () {
    cy.visit(constants.testURL);
    cy.wait(1000);
});

Given(/^I provide random email$/, function (email_value) {
    let email=getRandomEmail();
    cy.wrap(email).as('randomEmail');
    cy.get(BasePage.emailInput).click({force: true}).clear().type(email);
});

Given(/^I provide password "([^"]*)"$/, function (password_value) {
    cy.get(BasePage.pwdInput).click({force: true}).clear().type(password_value);
});

Given(/^I click on confimation button for this step$/, function () {
    cy.get(BasePage.signUpBtnConfirmation).click();
});

Given(/^I provide random name, surname and phone$/, function () {
    cy.get(BasePage.nameInput).click({force: true}).clear().type(getRandomName());
    cy.get(BasePage.lastNameInput).click({force: true}).clear().type(getRandomName());
    cy.get(BasePage.phoneInput).click({force: true}).clear().type(getRandomPhoneNumber());
});

Given(/^I provide random company name$/, function () {
    cy.get(BasePage.companyNameInput).click({force: true}).clear().type(getRandomName());
});

Given(/^I select "([^"]*)" in country$/, function (country_value) {
    cy.get(BasePage.countryInput).click({force: true}).clear().type(country_value);
    cy.get("ul>li").click();

});

Given(/^I accept Terms and Conditions$/, function () {
    cy.get(BasePage.checkboxTC).click({force: true}).check();
});

Given(/^I select DATEV in Channel$/, function () {
    cy.get(BasePage.chanelInput).click();
    cy.get('[role="menuitemradio"]').eq(3).click();
});

Then(/^I see account was created and success message "([^"]*)"$/, function (text) {
    cy.get('div').should('be.visible').and('contain', text);
});

Then(/^I see provided email displayed correctly$/, function () {
cy.get('@randomEmail').then((email) => {
       cy.get('b').should('be.visible').and('contain', email);
});
});

And(/^I accept Cookies$/, function () {
cy.get('#usercentrics-root').shadow().find('[data-testid="uc-accept-all-button"]').click();
});


