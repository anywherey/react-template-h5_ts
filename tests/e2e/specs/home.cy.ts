// https://docs.cypress.io/api/table-of-contents

describe("Visit Home", () => {
  it("Visits the app root url", () => {
    cy.visit("/home");
    cy.contains("div", "home");
  });
});
