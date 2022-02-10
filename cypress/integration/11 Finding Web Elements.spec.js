/// <reference types = "cypress" />

import { navigateTo } from "../support/page_objects/navigationPage";

describe("Lesson 11, Finding web elements", () => {
  it.only("Finding web elements", () => {
    cy.visit("/");
    navigateTo.formLayoutsPage();

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
