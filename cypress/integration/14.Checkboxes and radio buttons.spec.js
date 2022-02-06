/// <reference types = "cypress" />

describe("Checkboxes and radio buttons", () => {
  it("Radio buttons", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();

    cy.contains("nb-card", "Using the Grid")
      .find('[type="radio"]')
      .then((radiobuttons) => {
        cy.wrap(radiobuttons)
          .first()
          .check({ force: true })
          .should("be.checked");

        cy.wrap(radiobuttons).eq(1).check({ force: true }).should("be.checked");

        cy.wrap(radiobuttons).first().should("not.be.checked");

        cy.wrap(radiobuttons).eq(2).should("be.disabled");

        console.log(radiobuttons);
        // cy.wrap(radiobuttons)
        //   .contains("Option 1")
        //   .siblings("input")
        //   .check({ force: true });
      });
  });

  it("Checkboxes", () => {
    cy.visit("/");
    cy.contains("Modal & Overlays").click();
    cy.contains("Toastr").click();

    cy.contains("nb-card", " Toaster configuration ")
      .find('[type="checkbox"]')
      .then((checkboxes) => {
        cy.wrap(checkboxes).check({ force: true }).should("be.checked");
        cy.wrap(checkboxes)
          .eq(1)
          .click({ force: true })
          .should("be.not.be.checked");
      });
  });
});
