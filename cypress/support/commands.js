Cypress.Commands.add('fillMandatoryFieldsAndSubmit',function(){
    cy.get('#firstName').type('Paulo Ricardo')
    cy.get('#lastName').type('Mesquita')
    cy.get('#email').type('pauloricardomrs2002@gmail.com')
    cy.get('#phone').type('(21)96540-9149')
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type=submit]').click()
    cy.get('.success > strong').should('be.visible')
})


Cypress.Commands.add('fillMandatoryFieldsAndCheckButtomAndSubmit',function(){
    cy.get('#firstName').type('Paulo Ricardo')
    cy.get('#lastName').type('Mesquita')
    cy.get('#email').type('pauloricardomrs2002@gmail.com')
    cy.get('#phone').type('(21)96540-9149')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button[type=submit]','Enviar').click()
    cy.get('.success > strong').should('be.visible')
})

Cypress.Commands.add('selectYoutubeOnYourText',function(){
    cy.get('#product').select('YouTube').should('have.value','youtube')
})

Cypress.Commands.add('selectMentoriaOnYourValue',function(){
    cy.get('#product').select('mentoria').should('have.value','mentoria')
})

Cypress.Commands.add('selectBlogOnYourIndex',function(){
    cy.get('#product').select(1).should('have.value','blog')
})

Cypress.Commands.add('markingFeedback',function(){
    cy.get(':nth-child(4) > input')
    .check()
    .should('be.checked')
})

Cypress.Commands.add('markingAllOptions',function(){
    cy.get('#support-type > :nth-child(2) > input')
    .check()
    .should('be.checked')

    cy.get(':nth-child(3) > input')
    .check()
    .should('be.checked')

    cy.get(':nth-child(4) > input')
    .check()
    .should('be.checked')
})

Cypress.Commands.add('markingCheckboxAndUmarkingLast',function(){
    cy.get('#email-checkbox')
    .check()
    .should('be.checked')

    cy.get('#phone-checkbox')
    .check()
    .should('be.checked')

    cy.get('#phone-checkbox')
    .last()
    .uncheck()
    .should('not.be.checked')

})

Cypress.Commands.add('markingTelefoneAndCausingErrorIfTelefoneNotCompleted',function(){
    cy.get('#phone-checkbox')
    .check()
    .should('be.checked')

    cy.get('button[type=submit]').click()
    cy.get('.error').should('be.visible')

})

Cypress.Commands.add('selectArchiveOnDirectoryFixtures',function(){
    cy.get('input[type="file"]')
    .selectFile('cypress/fixtures/example.json')
    .should(function($input){
        expect($input[0].files[0].name).to.eq('example.json')
    })

})

Cypress.Commands.add('selectArchiveSimulatingDragAndDrop',function(){
    cy.get('input[type="file"]',{ action: 'drag-drop' })
    .selectFile('cypress/fixtures/example.json')
    .should(function($input){
        expect($input[0].files[0].name).to.eq('example.json')
    })

})

Cypress.Commands.add('selectArchiveWithAlias',function(){
    cy.fixture('example').as('sampleFile')
    cy.get('input[type="file"]')
    .selectFile('@sampleFile')
})

