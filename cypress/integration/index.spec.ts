/// <reference types="cypress" />

describe("Homepage", () => {
    it("Open without crash", () => {
        cy.visit("http://localhost:3000");
        cy.get("h1").should("have.text", "The best repositories are here");
        cy.get("div[role=search]").should("be.visible");
        cy.get("h2").should("have.text", "Brito's repositories");
        cy.get("main>ul>li").should("be.visible");
        cy.get("nav[role=navigation]").should("be.visible");
    });
    it("Search a repository and redirect to /results", async () => {
        cy.visit("http://localhost:3000");
        cy.get("div[role=search]>input").type("testing");
        await new Promise(r => setTimeout(r, 1500));
        cy.location("pathname").should("eq", "/results");
    });
    it("Search a repository, redirect to /results and open repository page", () => {
        cy.visit("http://localhost:3000");
        cy.get("div[role=search]>input").type("testing");
        cy.location("pathname").should("eq", "/results");
        cy.get("main>ul>li").first().click();
        cy.location("pathname").should("contain", "/repository");
    });
});
