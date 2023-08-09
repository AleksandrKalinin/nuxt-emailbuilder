export function templatesTest() {
  describe("Testing templates", () => {
    it("Should have text", () => {
      cy.visit("http://localhost:3000/")
        .get("header")
        .within(() => {
          cy.get("button").should("have.text", "Log in");
        });
    });
  });
}
