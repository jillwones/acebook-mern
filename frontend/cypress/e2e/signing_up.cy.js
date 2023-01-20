describe("Signing up", () => {

  it("with valid credentials, redirects to '/login'", () => {
    cy.visit("/signup");
    cy.get("#name").type("someone");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("Password1@");
    cy.get("#submit").click();

    cy.url().should("include", "/login");
  });

  it("with missing password, redirects to '/signup'", () => {
    cy.visit("/signup");
    cy.get("#name").type("someone");
    cy.get("#email").type("someone@example.com");
    cy.get("#submit").click();

    cy.url().should("include", "/signup");
  });

  it("with missing email, redirects to '/signup'", () => {
    cy.visit("/signup");
    cy.get("#name").type("someone");
    cy.get("#password").type("Password1@");
    cy.get("#submit").click();

    cy.url().should("include", "/signup");
  });
});
