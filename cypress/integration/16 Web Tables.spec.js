/// <reference types='Cypress' />

import { navigateTo } from "../support/page_objects/navigationPage";

describe("Web Tables", () => {
  it("Web Table", () => {
    cy.visit("/");
    navigateTo.smartTablePage();

    //1
    cy.get("tbody")
      .contains("tr", "Larry")
      .then((larryRow) => {
        cy.wrap(larryRow).find(".nb-edit").click();
        cy.wrap(larryRow).find('[placeholder="Age"]').clear().type(25);
        cy.wrap(larryRow).find(".nb-checkmark").click();
        cy.wrap(larryRow).find("td").eq(6).should("contain", "25");
      });

    //2
    cy.get("thead").find(".nb-plus").click();
    cy.get("thead")
      .find("tr")
      .eq(2)
      .then((newRow) => {
        cy.wrap(newRow).find('[placeholder="First Name"]').type("Bob");
        cy.wrap(newRow).find('[placeholder="Last Name"]').type("Dylan");
        cy.wrap(newRow).find(".nb-checkmark").click();
      });
    cy.get("tbody tr")
      .first()
      .find("td")
      .then((tableColumns) => {
        cy.wrap(tableColumns).eq(2).should("contain", "Bob");
        cy.wrap(tableColumns).eq(3).should("contain", "Dylan");
      });

    //3
    const age = [20, 30, 40, 200];
    cy.wrap(age).each((age) => {
      cy.get('thead [placeholder="Age"]').clear().type(age);
      cy.wait(300);
      cy.get("tbody tr").each((tableRow) => {
        if (age == 200) {
          cy.wrap(tableRow).find("td").should("contain", "No data found");
        } else {
          cy.wrap(tableRow).find("td").eq(6).should("contain", age);
        }
      });
    });
  });
});
