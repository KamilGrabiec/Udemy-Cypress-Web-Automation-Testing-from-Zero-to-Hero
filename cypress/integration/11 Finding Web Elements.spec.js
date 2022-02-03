/// <reference types = "cypress" />

describe("Lesson 11, Finding web elements", () => {
  it.only("Finding web elements", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layout").click();
    cy.get('[data-cy="signInButton"]');

    cy.contains('[status="warning"]', "Sign in");

    cy.get("#inputEmail3")
      .parents("form")
      .find("button")
      .should("contain", "Sign in");

    cy.get("#inputEmail3").parents("form").find(".custom-checkbox").click();
    cy.get("#inputEmail3")
      .parents("form")
      .find(".custom-checkbox")
      .should("have.class", "checked");

    cy.contains("nb-card", "Block form")
      .find('[placeholder="First Name"]')
      .type("Kamil");
  });
});
