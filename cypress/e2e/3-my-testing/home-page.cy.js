/// <reference types="cypress" />

describe("home page test", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("visit home page", () => {
    cy.contains("HOME PAGE");
  });

  it.only("listcards test", () => {
    cy.get(".comics-list").should("exist");
    cy.get(".characters-list").should("exist");

    cy.get(".comic-card").should("have.length", 20);

    cy.get(".comic-link").then((link) => {
      cy.request("HEAD", link.prop("href")).its("status").should("eq", 200);
    });
    cy.get(".character-link").then((link) => {
      cy.request("HEAD", link.prop("href")).its("status").should("eq", 200);
    });
  });
});
