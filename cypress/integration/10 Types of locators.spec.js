/// <reference types='cypress'/>

describe("First test suit", () => {
  it("First test case", () => {
    cy.visit("/");
    // by tag name

    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();

    cy.get("input");

    // by id
    cy.get("#inputEmail");

    // by class name
    cy.get(".input-full-width");

    // by attribute name
    cy.get("[placeholder]");

    //by attribute name and value
    cy.get('[placeholder="Email"]');

    // by class value
    cy.get('[class="input-full-width size-medium shape-rectangle"]');

    // by Tag name and Attribute with value
    cy.get('input[placeholder="Email"]');

    // by two different attributes
    cy.get('[placeholder="Email"][fullwidth]');

    //by tag name, attribute with value, Id and class name
    cy.get('input[placeholder="Email"]#inputEmail.input-full-width');

    // the most recomended way by Cypress
    cy.get('[data-cy="imputEmail1"]');
  });
});
