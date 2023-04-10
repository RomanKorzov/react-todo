/* eslint-disable no-undef */
describe("Todo App Test", () => {
  it("successfully loads", () => {
    cy.visit("/");
  });

  it("add todo", () => {
    cy.visit("/");

    cy.get("[data-test='input']").type("Make test").trigger("submit");
    cy.get("[data-test='form']").submit();

    cy.get("[data-test='list-item']").should("have.length", 1);
    cy.get("[data-test='counter']").should("have.text", "1 items left");
  });

  it("delete todo", () => {
    cy.visit("/");

    cy.get("[data-test='input']").type("Make test").trigger("submit");
    cy.get("[data-test='form']").submit();

    cy.get("[data-test='list']")
      .find(":nth-child(1)")
      .find("[data-test='delete']")
      .click();
    cy.get("[data-test='list-item']").should("have.length", 0);
    cy.get("[data-test='counter']").should("have.text", "0 items left");
  });

  it("change todo state", () => {
    cy.visit("/");

    cy.get("[data-test='input']").type("Make test").trigger("submit");
    cy.get("[data-test='form']").submit();

    cy.get("[data-test='list']")
      .find(":nth-child(1) > [data-test='checkbox'] > input")
      .click()
      .should("be.checked");
    cy.get("[data-test='counter']").should("have.text", "0 items left");

    cy.get("[data-test='list']")
      .find(":nth-child(1) > [data-test='checkbox'] > input")
      .click()
      .should("not.be.checked");

    cy.get("[data-test='counter']").should("have.text", "1 items left");
  });

  it("filters", () => {
    cy.visit("/");

    cy.get("[data-test='input']").type("Make test").trigger("submit");
    cy.get("[data-test='form']").submit();

    cy.get("[data-test='input']").type("Make homework").trigger("submit");
    cy.get("[data-test='form']").submit();

    cy.get("[data-test='filter']").find(":nth-child(2)").click();
    cy.get("[data-test='list-item']").should("have.length", 2);

    cy.get("[data-test='filter']").find(":nth-child(3)").click();
    cy.get("[data-test='list-item']").should("have.length", 0);

    cy.get("[data-test='filter']").find(":nth-child(1)").click();
    cy.get("[data-test='list-item']").should("have.length", 2);

    cy.get("[data-test='list']")
      .find(":nth-child(1)")
      .find("[data-test='checkbox'] > input")
      .click();

    cy.get("[data-test='filter']").find(":nth-child(2)").click();
    cy.get("[data-test='list-item']").should("have.length", 1);

    cy.get("[data-test='filter']").find(":nth-child(3)").click();
    cy.get("[data-test='list-item']").should("have.length", 1);

    cy.get("[data-test='filter']").find(":nth-child(1)").click();
    cy.get("[data-test='list-item']").should("have.length", 2);
  });
});
