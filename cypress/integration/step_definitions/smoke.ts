import{Given, Then, When}from 'cypress-cucumber-preprocessor/steps';
import {BasePage}from './pageObjects/BasePage';
import {constants}from '../constants';
import { getRandomName, getRandomPhoneNumber, getRandomEmail } from '../utils';

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


