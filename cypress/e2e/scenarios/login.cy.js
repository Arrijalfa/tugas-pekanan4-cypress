//require ("@cypress/xpath");
import * as objects from "../objects/page.js";

before(() => {
  cy.config("defaultCommandTimeout", 20000);
});

describe('Saucedemo - Login', () => {

  it('should successfully log in with valid credentials', () => {
    cy.visit(Cypress.env('baseUrl'));
    cy.get(objects.input_username).type("standard_user");
    cy.get(objects.input_password).type("secret_sauce");
    cy.get(objects.button_submit).click();
    // Verifikasi login sukses
    cy.get(objects.label_swag).should("be.visible");
  })

  it('should show error message for invalid credentials', () => {
    cy.visit(Cypress.env('baseUrl'));
    cy.get(objects.input_username).type("xxxxx");
    cy.get(objects.input_password).type("xxxxx");
    cy.get(objects.button_submit).click();
    // Verifikasi pesan error
    cy.get('.error-message-container').should('be.visible');
  })
})