import { navigateTo } from "../support/page_objects/navigationPage";

describe("Test with Page Objects", () => {
  it("test", () => {
    cy.visit("/");
  });

  it("Verify navigation across the pages", () => {
    navigateTo.formLayoutsPage();
    navigateTo.datepickersPage();
  });
});
