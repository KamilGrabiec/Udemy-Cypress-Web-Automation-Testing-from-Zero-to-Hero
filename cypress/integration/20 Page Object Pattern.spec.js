/// <reference types="cypress" />

import { navigateTo } from "../support/page_objects/navigationPage"



describe("", () => {
    beforeEach('Open application', () => {
        cy.visit("/")
    })

    it("verify navigations across the pages", () =>{
        navigateTo.formLayoutsPage();
        navigateTo.datepickersPage();
        navigateTo.smartTablePage();
        navigateTo.toastrPage();
        navigateTo.tooltipPage();
        
    })

})