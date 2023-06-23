/// <reference types="cypress" />

describe("search page test", () => {
  beforeEach(() => {
    cy.visit("/search");
  });
  it("visit search page", () => {
    cy.contains("SEARCH PAGE");
  });
});
