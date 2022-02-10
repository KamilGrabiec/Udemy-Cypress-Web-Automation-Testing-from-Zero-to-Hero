/// <reference types = "cypress" />

import { navigateTo } from "../support/page_objects/navigationPage";

describe("Saving data", () => {
  it.only("then and wrap methods", () => {
    cy.visit("/");
    navigateTo.formLayoutsPage();

    cy.contains("nb-card", "Using the Grid")
      .find('[for="inputEmail1"]')
      .should("contain", "Email");

    cy.contains("nb-card", "Using the Grid")
      .find('[for="inputPassword2"]')
      .should("contain", "Password");

    cy.contains("nb-card", "Basic form")
      .find('[for="exampleInputEmail1"]')
      .should("contain", "Email address");

    cy.contains("nb-card", "Basic form")
      .find('[for="exampleInputPassword1"]')
      .should("contain", "Password");

    // selenium - does not work with cypress
    // firsObject = cy.contains("nb-card", "Using the Grid");
    // secondObject = cy.contains("nb-card", "Basic form");

    // firsObject.find('[for="inputEmail1"]').should("contain", "Email");
    // firsObject.find('[for="inputPassword2"]').should("contain", "Password");

    // secondObject.find('[for="exampleInputPassword1"]').should("contain", "Password");

    //cypress - then method
    cy.contains("nb-card", "Using the Grid").then((firstObject) => {
      const passowrdLabelFirst = firstObject
        .find('[for="inputPassword2"]')
        .text();
      expect(passowrdLabelFirst).to.equal("Password");

      // because of then method, firstObject is a JQuery object not a Cypress object any more
      // this mean that Cypress methods like 'should' cannot be executed on it
      // to use Cypress methods, wrap function has to be used
      cy.wrap(firstObject).should("contain", "Password");
      // firstObject.should('contain', 'Password') - won't work

      cy.contains("nb-card", "Basic form").then((secondObject) => {
        const passwordLabelSecond = secondObject
          .find('[for="exampleInputPassword1"]')
          .text();
        expect(passwordLabelSecond).to.equal("Password");

        expect(passowrdLabelFirst).to.equal(passwordLabelSecond);
      });
    });
  });
});
