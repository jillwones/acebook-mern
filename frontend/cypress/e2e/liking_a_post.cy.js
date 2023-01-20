describe("Liking a post", () => {

    it("allows a user to like all posts", () => {
      cy.signup("someone","someone@example.com", "Password1@")
      cy.visit("/login");
      cy.get("#email").type("someone@example.com");
      cy.get("#password").type("Password1@");
      cy.get("#submit").click();

      cy.get("#new-post-input").click();
      cy.get("textarea").type("Hi! This is a test post with a like.");
      cy.get("button.submit-post").click();

      cy.wait(500)

      cy.get("button.like-button").click({ multiple: true });
      cy.get('.like-count').should('contain', '1');

    });

    it("allows a user to unlike all posts", () => {
        cy.signup("someone","someone@example.com", "Password1@")
        cy.visit("/login");
        cy.get("#email").type("someone@example.com");
        cy.get("#password").type("Password1@");
        cy.get("#submit").click();

        cy.get("#new-post-input").click();
        cy.get("textarea").type("Hi! This is a test post that will be liked and unliked.");
        cy.get("button.submit-post").click();

        cy.wait(500)

        cy.get("button.like-button").click({ multiple: true });
        cy.wait(1000)
        cy.get("button.like-button").click({ multiple: true });
        cy.get('.like-count').should('contain', '0');

      });

});
