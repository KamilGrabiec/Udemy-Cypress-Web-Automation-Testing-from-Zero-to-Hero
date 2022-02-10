/// <reference types="cypress" />

const { equal } = require("assert");
const { navigateTo } = require("../support/page_objects/navigationPage");

describe("Invoke Command", () => {
  it("Invoke Command", () => {
    cy.visit("/");
    navigateTo.formLayoutsPage();

    //1
    cy.get('[for="exampleInputEmail1"]').should("contain", "Email address");

    //2
    cy.get('[for="exampleInputEmail1"]').then((label) => {
      console.log(label.text());
      expect(label.text()).to.equal("Email address");
    });

    //3
    cy.get('[for="exampleInputEmail1"]')
      .invoke("text")
      .then((text) => {
        expect(text).to.equal("Email address");
      });

    //4.1
    cy.contains("nb-card", "Basic form")
      .find("nb-checkbox")
      .click()
      .find(".custom-checkbox")
      .invoke("attr", "class")
      .should("contain", "checked");

    // 4.2
    cy.contains("nb-card", "Basic form")
      .find("nb-checkbox")
      .find(".custom-checkbox")
      .invoke("attr", "class")
      .then((classValue) => {
        expect(classValue).to.contain("checked");
      });
  });

  it("Assert property", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Datepicker").click();

    cy.contains("nb-card", "Common Datepicker")
      .find('[placeholder="Form Picker"]')
      .then((input) => {
        cy.wrap(input).click();
        cy.get("nb-calendar-day-picker").contains("15").click();
        cy.wrap(input)
          .invoke("prop", "value")
          .should("contain", "Feb 15, 2022");
      });
  });
});
