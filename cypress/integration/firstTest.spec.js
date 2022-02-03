describe("First test suite", () => {
  it("first test", () => {
    cy.visit("http://localhost:4200");
  });
  it("second test", () => {});
  it("third test", () => {});
  describe("Nested describe without repeating cy.visit", () => {
    beforeEach("Open a page", () => {
      cy.visit("http://localhost:4200");
    });
    it("Test 1.1", () => {});
    it("Test 1.2", () => {});
  });
});
describe("Second test suit", () => {
  //   beforeEach("visit page with variable", () => {
  //     cy.visit();
  //   });
  it("first test", () => {});
  it("second test", () => {});
  it("third test", () => {});
});
