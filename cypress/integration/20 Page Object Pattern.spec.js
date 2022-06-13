/// <reference types="cypress" />


import { onDatepicker } from "../support/page_objects/formsDatepickerPage"
import { onFormLayouts } from "../support/page_objects/formsLayoutsPage"
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

    it("should submit Inline and Basic form and select tomorrow date in the calendar", () =>{
        navigateTo.formLayoutsPage()
        onFormLayouts.submitInlineFormWithNameAndEmail('user', 'user@gmail.com')
        onFormLayouts.submitBasicFormWithEmailAndPassword('user@gmail.com', 'password')
        navigateTo.datepickersPage()
        onDatepicker.selectDaysFromNowInCommonDatepicker(1)
    })

    
})