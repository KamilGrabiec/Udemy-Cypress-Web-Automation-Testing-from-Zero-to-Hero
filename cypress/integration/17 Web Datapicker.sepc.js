/// <reference types="Cypress" />

describe("Web Datapicker", () => {
  it("Datapicker", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Datepicker").click();

    let date = new Date();
    date.setDate(date.getDate() + 22);
    let futureDay = date.getDate();
    console.log(futureDay);
    let futureMonth = date.toLocaleString("default", { month: "short" });

    cy.contains("nb-card", "Common Datepicker").find("input").click();
    cy.get("nb-calendar-navigation")
      .invoke("attr", "ng-reflect-date")
      .then((dateAttirbute) => {
        console.log(dateAttirbute);
        console.log(futureMonth);
        if (!dateAttirbute.includes(futureMonth)) {
          console.log("loop");
          cy.get('[ng-reflect-icon="chevron-right-outline"]').click();
          cy.get('nb-calendar-day-picker [class="day-cell ng-star-inserted"]')
            .contains(futureDay)
            .click();
        } else {
          cy.get('nb-calendar-day-picker [class="day-cell ng-star-inserted"]')
            .contains(futureDay)
            .click();
        }
      });

    // cy.contains("nb-card", "Common Datepicker")
    //   .find("input")
    //   .then((input) => {
    //     cy.wrap(input).click();
    //     cy.get("nb-calendar-navigation")
    //       .find("button")
    //       .then((datepickerMonth) => {
    //         if (datepickerMonth != futureMonth) {
    //           cy.wrap(input).find('[ng-reflect-icon="chevron-right-outline"]').click();
    //         }
    //       });

    //     cy.get("nb-calendar-day-picker").contains("17").click();
    //     cy.wrap(input)
    //       .invoke("prop", "value")
    //       .should("contain", "Feb 17, 2022");
    // });
  });
});
