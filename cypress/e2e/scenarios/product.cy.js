//require ("@cypress/xpath");
import * as objects from "../objects/page.js";

before(() => {
  cy.config("defaultCommandTimeout", 20000);
});

describe('Saucedemo - Product', () => {

beforeEach(() => {
  cy.login("standard_user", "secret_sauce");
})

  it('should add a backpack product to cart', () => {
    cy.get(objects.backpack_product).click();
    cy.get(objects.add_product).click();
    //verifikasi success add product
    cy.get(objects.cart_badge).should("be.visible");
  })

  it('should remove a backpack product from the cart', () => {
    cy.get(objects.backpack_product).click();
    cy.get(objects.add_product).click();
    cy.get(objects.cart).click();
    cy.contains(objects.remove_product, 'Remove').click();
    //verifikasi success add product
    cy.get(objects.cart_badge).should("not.exist");
  })

  it('should success checkout a backpack product', () => {
    cy.get(objects.backpack_product).click();
    cy.get(objects.add_product).click();
    cy.get(objects.cart).click();
    cy.get(objects.checkout).click();
    cy.get(objects.first_name).type('Fadhil');
    cy.get(objects.last_name).type('Arrijal');
    cy.get(objects.postal_code).type('45574');
    cy.get(objects.continue_checkout).click();
    cy.get(objects.finish_checkout).click();
    //verifikasi success add product
    cy.get(objects.success_checkout).should("be.visible");
  })
})