


export class FormLayouts{
    submitInlineFormWithNameAndEmail(name, email){
        cy.get('.form-inline').then((form) => {
            cy.wrap(form).find('[placeholder="Jane Doe"]').type(name)
            cy.wrap(form).find('[placeholder="Email"]').type(email)
            cy.wrap(form).find('button').click()
        }) 
    }

    submitBasicFormWithEmailAndPassword(email, password){
        cy.get('#exampleInputEmail1').type(email);
        cy.get('#exampleInputPassword1').type(password)
        cy.get('#exampleInputPassword1').parents('form').find('button').click()
    }
}



export const onFormLayouts = new FormLayouts