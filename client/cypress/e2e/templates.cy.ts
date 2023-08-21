export function templatesTest() {
  describe("Testing display of templates", () => {
    before(() => {
      cy.visit("http://localhost:3000/");
      cy.get(".filter").within(() => {
        cy.get("input[id=premium]").check({ force: true });
        cy.get("label[for=premium]").click();
      });
    });

    it("Should correctly apply filters", () => {
      cy.get("input[id=premium]").should("be.checked");
    });
  });

  describe("Testing general interface", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/");
    });

    it("Should have login button", () => {
      cy.get("header").within(() => {
        cy.get("button[id=login]").should("contain", "Log in");
      });
    });

    it("Should show template button on hover", () => {
      cy.get(".templates-container").within(() => {
        cy.get(".group")
          .first()
          .realHover()
          .within(() => {
            cy.get(".template-overlay").should("be.visible");
            cy.get(".button")
              .should("be.visible")
              .should("contain", "Open template");
          });
      });
    });
  });

  describe("Testing editing of existing template", () => {
    before(() => {
      cy.viewport(1920, 1080);
    });

    beforeEach(() => {
      cy.visit("http://localhost:3000/")
        .get(".templates-container")
        .within(() => {
          cy.get(".group")
            .first()
            .realHover()
            .within(() => {
              cy.get(".button")
                .trigger("mouseover")
                .wait(5000)
                .click({ force: true });
            });
        });
    });

    it("Should add row to existing template", () => {
      cy.get(".editor").within(() => {
        cy.get(".editor-row").then(($elements) => {
          const number = $elements.length;
          cy.get("button[id=editorBtn]").click({ force: true });
          cy.get(".list-group")
            .children()
            .should("have.length", number + 1);
        });
      });
    });

    it("Should delete row from existing template", () => {
      cy.get(".editor-row").then(($elements) => {
        const number = $elements.length;
        cy.get(".editor").within(() => {
          cy.get(".list-group .editor-row")
            .eq(0)
            .then(($el) => {
              const coords = $el[0].getBoundingClientRect();
              return coords;
            })
            .then((coords) => {
              cy.get(".list-group .editor-row")
                .eq(0)
                .click(coords.x + 10, coords.y + 10, { force: true });
            })
            .wait(500)
            .within(() => {
              cy.get(".editor-menu")
                .find(".editor-menu__element[title='Delete']")
                .click();
            });
        });
        cy.get(".list-group")
          .children()
          .should("have.length", number - 1);
      });
    });

    it("Should update item properties correctly", () => {
      cy.get(".list-group .editor-row .editor-item").eq(0).click().wait(500);

      cy.get(".list-group .editor-row .editor-item .editable-wrapper .editable")
        .eq(0)
        .then(($el) => {
          return window.getComputedStyle($el[0]);
        })
        .invoke("getPropertyValue", "font-size")
        .then((fontSize) => {
          cy.get(".settings")
            .should("be.visible")
            .within(() => {
              cy.get(".settings-block .settings-options")
                .eq(0)
                .within(() => {
                  cy.get(
                    ".settings-item .input-single .input-single__input"
                  ).eq(0);
                  // .should("have.value", parseInt(fontSize));
                  // cy.get(".settings-item .input-single .input-single__button")
                  //   .eq(0)
                  //   .click({ force: true });
                });
            });
        });
    });
  });
}
