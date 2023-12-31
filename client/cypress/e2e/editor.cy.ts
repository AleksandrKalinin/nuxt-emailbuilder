export function editorTest() {
  describe("Testing editor main functionality", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/editor");
    });

    it("Should have button for row addition", () => {
      cy.get(".editor").within(() => {
        cy.get("#editorBtn").should("contain", "Add");
      });
    });

    it("Should add correct number of rows when pressing the button", () => {
      cy.get(".editor").within(() => {
        for (let i = 0; i < 5; i++) {
          cy.get("#editorBtn").click();
        }
        cy.get(".list-group").find(".editor-row").its("length").should("eq", 6);
      });
    });

    it("Should open layout settings and correctly update selected row when clicking on corresponding option in menu", () => {
      cy.get(".editor").within(() => {
        cy.get(".list-group .editor-row").eq(0).click();
      });
      cy.get(".settings").within(() => {
        cy.get(".settings-block .settings-block__header").should(
          "have.text",
          "Layout"
        );
        cy.get(".settings-block")
          .find(".layout-group .layout-item")
          .eq(2)
          .click()
          .should("have.class", "layout-item_active");
      });
      cy.get(".editor").within(() => {
        cy.get(".list-group .editor-row")
          .eq(0)
          .children(".editor-item")
          .its("length")
          .should("eq", 3);
      });
      cy.get(".settings").within(() => {
        cy.get(".settings-block")
          .find(".layout-group .layout-item")
          .eq(1)
          .click()
          .should("have.class", "layout-item_active");
      });
      cy.get(".editor").within(() => {
        cy.get(".list-group .editor-row")
          .eq(0)
          .children(".editor-item")
          .its("length")
          .should("eq", 2);
      });
    });

    it("Should be able to  copy and delete existing row", () => {
      cy.get(".editor").within(() => {
        cy.get(".list-group")
          .find(".editor-row")
          .eq(0)
          .click()
          .within(() => {
            cy.get(".editor-menu")
              .find(".editor-menu__element[title='Duplicate']")
              .click();
          });
        cy.get(".list-group").find(".editor-row").its("length").should("eq", 2);
        cy.get(".list-group")
          .find(".editor-row")
          .eq(0)
          .click()
          .within(() => {
            cy.get(".editor-menu")
              .find(".editor-menu__element[title='Delete']")
              .click();
          });
        cy.get(".list-group").find(".editor-row").its("length").should("eq", 1);
      });
    });

    // it("drags and drops an element from one region to another", () => {
    //   const draggableSelector = ".menu-item[title='Heading']";
    //   const droppableSelector = ".list-group .editor-row .editor-item";

    //   cy.get(".editor-menu-wrap")
    //     .find(draggableSelector)
    //     .then(($draggable) => {
    //       const dragCoords = $draggable[0].getBoundingClientRect();
    //       return { dragCoords, $draggable };
    //     })
    //     .then(({ dragCoords, $draggable }) => {
    //       cy.get(".editor")
    //         .find(droppableSelector)
    //         .then(($droppable) => {
    //           const dropCoords = $droppable[0].getBoundingClientRect();
    //           const x = dropCoords.x - dragCoords.x + 20;
    //           const y = dropCoords.y - dragCoords.y + 20;
    //           cy.wrap($draggable)
    //             .trigger("mousedown", { force: true })
    //             .trigger("drag", x, y, {
    //               force: true,
    //             })
    //             .trigger("mouseup");
    //         });
    //     });
    // });
  });
}
