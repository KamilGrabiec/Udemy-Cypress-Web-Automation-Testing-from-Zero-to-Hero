/// <reference types="cypress" />

import { navigateTo } from "../support/page_objects/navigationPage";

describe("Pop ups and Tool tips", () => {
  it("Tooltip", () => {
    cy.visit("/");
    navigateTo.tooltipPage();

    cy.contains("nb-card", "Colored Tooltip").contains("Default").click();
    cy.get("nb-tooltip").should("contain", "This is a tooltip");
  });

  it("Dialog box", () => {
    cy.visit("/");
    navigateTo.smartTablePage();

    //1 - not prefered. If no window confirm appeared, then assertion will never be executed
    cy.get("tbody tr").first().find(".nb-trash").click();
    cy.on("window:confirm", (confirm) => {
      expect(confirm).to.equal("Are you sure you want to delete?");
    });

    //2
    const stub = cy.stub();
    cy.on("window:confirm", stub);
    cy.get("tbody tr")
      .first()
      .find(".nb-trash")
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith(
          "Are you sure you want to delete?"
        );
      });

    // 3
    cy.get("tbody tr").first().find(".nb-trash").click();
    cy.on("window:confirm", () => false);
  });
});
