describe("Making a Comment", () => {

    it("allows a user to make a comment", () => {
      cy.signup("someone","someone@example.com", "Password1@")
      cy.visit("/login");
      cy.get("#email").type("someone@example.com");
      cy.get("#password").type("Password1@");
      cy.get("#submit").click();

      cy.get("#new-post-input").click();
      cy.get("textarea").type("Hi! This is a test post with a comment.");
      cy.get("button.submit-post").click();

      cy.get("p").should("contain", "Hi! This is a test post with a comment.");
      cy.wait(500)

      cy.contains("Add comment").click();
      cy.get("textarea").type("Hi! This is a test comment.{enter}");
      cy.get("p").should("contain", "Hi! This is a test comment.");

    });

});
