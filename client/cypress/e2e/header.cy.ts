import { type } from "os";
import path from "path";

type ObjectLike = Cypress.ObjectLike;

export function headerTest() {
  describe("Testing header", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/");
    });

    it("Should have valid navigation links", () => {
      cy.get("header .header-menu").within(() => {
        cy.get("a").each(($el) => {
          cy.wrap($el)
            .invoke("attr", "href")
            .then((href) => {
              const targetUrl = `http://localhost:3000${href}`;
              cy.visit(targetUrl);
              cy.url().should("eq", targetUrl);
            });
        });
      });
    });

    it("Should download template", () => {
      const DOWNLOAD_DIR = path.join(
        (Cypress.env().HOME as string) || (Cypress.env().USERPROFILE as string),
        "Downloads"
      );
      cy.wait(2000);
      cy.task("downloads", DOWNLOAD_DIR).then((before) => {
        cy.visit("http://localhost:3000/editor");
        cy.get("header").within(() => {
          cy.get("button[id=download]").click({ force: true });
        });

        cy.task("downloads", DOWNLOAD_DIR).then((after) => {
          cy.wait(2000);
          expect(after.length).to.be.eq(before.length + 1);
        });
      });
    });
  });
}
