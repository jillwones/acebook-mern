describe("Making a Post", () => {

    it("allows a user to make a post", () => {
      cy.signup("someone","someone@example.com", "Password1@")
      cy.visit("/login");
      cy.get("#email").type("someone@example.com");
      cy.get("#password").type("Password1@");
      cy.get("#submit").click();

      cy.get("#new-post-input").click();
      cy.get("textarea").type("Hi! This is a test post.");
      cy.get("button.submit-post").click();

      cy.get("p").should("contain", "Hi! This is a test post.");
    });

});
