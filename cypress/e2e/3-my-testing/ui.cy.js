/// <reference types="cypress" />

describe("component header test", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should contains logo", () => {
    cy.get(".header-logo")
      .should("exist")
      .and(($img) => {
        // "naturalWidth" and "naturalHeight" are set when the image loads
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
  });

  it("quantities of links", () => {
    // cy.get(".next-link").should("have.length", 7);
    cy.get(".next-link")
      .each(($a) => {
        const message = $a.text();
        expect($a, message).to.have.attr("href").not.contain("undefined");
      })
      .should("have.length", 7);
  });
});
