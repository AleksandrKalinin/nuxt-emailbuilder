import path from "path";

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

    it("should download template", () => {
      const DOWNLOAD_DIR = path.join(
        (String(process.env.HOME) as string) ||
          (String(process.env.USERPROFILE) as string),
        "downloads/"
      );
      cy.log(DOWNLOAD_DIR);
      cy.task("downloads", DOWNLOAD_DIR).then((before) => {
        cy.visit("http://localhost:3000/editor");
        cy.get("header").within(() => {
          cy.get("button[id=download]").click({ force: true });
        });

        cy.task("downloads", DOWNLOAD_DIR).then((after) => {
          expect(after.length).to.be.eq(before.length + 1);
        });
      });
    });
  });
}
