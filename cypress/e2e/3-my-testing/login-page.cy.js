/// <reference types="cypress" />

describe("login page test", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("visit login page", () => {
    cy.contains("Login to continue");

    cy.get(".input-field").should("have.length", 2);

    cy.get(".btn-login").should("exist");
  });

  it("login failed", () => {
    // Give an alias to the stub, so we can use "get" on it.
    const alertShown = cy.stub().as("alertShown");
    cy.on("window:alert", alertShown);

    const email = "email@gmail.com";
    const password = "password";

    cy.get(".email-input").type(`${email}`, { delay: 100 });
    //   .should("have.value", email);

    cy.get(".password-input").type(`${password}`, { delay: 100 });
    //   .should("have.value", password);

    cy.get(".btn-login").click();

    cy.get("@alertShown").should("have.been.calledOnceWith", "try again");
  });

  it("login success", () => {
    cy.visit("/login");

    const email = "tuan@gmail.com";
    const password = "abc";

    cy.get(".email-input").type(`${email}`, { delay: 100 });
    cy.get(".password-input").type(`${password}`, { delay: 100 });
    cy.get(".btn-login").click();

    cy.contains("HOME PAGE");
  });
});
