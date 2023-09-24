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

Cypress.Commands.add('verifyPolicyTermsOpenInNewWindowsWithouClick',function(){
    cy.get('a').should('have.attr', 'target', '_blank')
})


Cypress.Commands.add('verifyPolicyTermsOpenRemovingLink',function(){
    cy.get('a').invoke('removeAttr', 'target')
})

Cypress.Commands.add('checkingLink',function(){
    cy.get('a').click()
})


Cypress.Commands.add('chekingSucess',function(){
    cy.clock()
        cy.get('#firstName').type('Paulo Ricardo')
        cy.get('#lastName').type('Mesquita')
        cy.get('#email').type('pauloricardomrs2002@gmail.com')
        cy.get('#phone').type('(21)96540-9149')
        cy.get('#open-text-area').type('Teste')
        cy.contains('button[type=submit]','Enviar').click()
        cy.get('.success > strong').should('be.visible')
    cy.tick(3000)
        cy.get('.success > strong').should('not.be.visible')

})

Cypress.Commands.add('chekingError',function(){
    cy.clock()
        cy.contains('button[type=submit]','Enviar').click()
        cy.get('.error > strong').should('be.visible')
    cy.tick(3000)
        cy.get('.error > strong').should('not.be.visible')
})

Cypress.Commands.add('showAndHideErrorAndSucessMessages',() =>{
    cy.get('.success')
    .should('not.be.visible')
    .invoke('show')
    .should('be.visible')
    .and('contain', 'Mensagem enviada com sucesso.')
    .invoke('hide')
    .should('not.be.visible')
  cy.get('.error')
    .should('not.be.visible')
    .invoke('show')
    .should('be.visible')
    .and('contain', 'Valide os campos obrigatórios!')
    .invoke('hide')
    .should('not.be.visible')

})

Cypress.Commands.add('fullingTextAreaWithInvoke',() =>{
    let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam finibus pulvinar diam, at venenatis mauris rhoncus sit amet. Aliquam ac viverra libero. Mauris vel nunc ac mi pellentesque tristique. Integer id sem eget turpis aliquam rhoncus non sed odio. Nullam volutpat odio nibh, eget viverra risus tempus tempus. Cras nunc sapien, viverra ut aliquet ac, vulputate et ante. Sed sit amet nulla cursus, blandit mi sit amet, vehicula dolor. In hac habitasse platea dictumst. Ut fermentum rhoncus finibus. Sed hendrerit risus velit, ac volutpat dolor consequat eu. Suspendisse tortor turpis, lobortis fringilla fringilla in, varius non est. Nunc mauris nisi, mattis ut mauris sed, eleifend cursus dolor. Nulla eu tristique ex. Aliquam eleifend nisl hendrerit nisi aliquet, quis malesuada eros cursus. Donec vulputate posuere mauris vitae eleifend. Vestibulum quis massa lectus."
    cy.get('#open-text-area')
    .invoke('val', text)
    .trigger('input')

})


Cypress.Commands.add('doHTTPRequest',() =>{
    cy.request('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
      .should(function(response) {
        const { status, statusText, body } = response
        expect(status).to.equal(200)
        expect(statusText).to.equal('OK')
        expect(body).to.include('CAC TAT')
        })
});

Cypress.Commands.add('findTheCat',() =>{
    cy.get('#cat')
    .should('not.be.visible')
    .invoke('show')
    .should('be.visible')
    .invoke('hide')
    .should('not.be.visible')
});
