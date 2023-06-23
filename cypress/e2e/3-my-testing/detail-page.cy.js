/// <reference types="cypress" />
describe("character detail page test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("visit character detail", () => {
    const id = "1017100";
    cy.visit(`/characters/${id}`);
    cy.contains(id);

    // cy.get(".comic-link").each(($a) => {
    //   const message = $a.text();
    //   expect($a, message).to.have.attr("href").not.contain("undefined");
    // });

    // check if all the links working
    cy.get(".comic-link").then((link) => {
      cy.request("HEAD", link.prop("href")).its("status").should("eq", 200);
    });
  });
});
