/// <reference types="Cypress" />

import { navigateTo } from "../support/page_objects/navigationPage";

describe("Web Datapicker", () => {
  it("Datapicker", () => {
    cy.visit("/");
    navigateTo.datepickersPage();

    function selectFutureDate(day) {
      let date = new Date();
      date.setDate(date.getDate() + day);
      let futureDay = date.getDate();
      let futureMonth = date.toLocaleString("default", { month: "short" });
      let dateAssert =
        futureMonth + " " + futureDay + ", " + date.getFullYear();

      cy.get("nb-calendar-navigation")
        .invoke("attr", "ng-reflect-date")
        .then((dateAttirbute) => {
          console.log(dateAttirbute);
          console.log(futureMonth);
          if (!dateAttirbute.includes(futureMonth)) {
            console.log("loop");
            cy.get('[ng-reflect-icon="chevron-right-outline"]').click();
            selectFutureDate(day);
          } else {
            cy.get('nb-calendar-day-picker [class="day-cell ng-star-inserted"]')
              .contains(futureDay)
              .click();
          }
        });
      return dateAssert;
    }

    cy.contains("nb-card", "Common Datepicker")
      .find("input")
      .then((input) => {
        cy.wrap(input).click();
        let dateAssert = selectFutureDate(59);
        cy.wrap(input).invoke("prop", "value").should("contain", dateAssert);
      });
  });
});
