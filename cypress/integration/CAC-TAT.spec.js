/// <reference types="Cypress" />

let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam finibus pulvinar diam, at venenatis mauris rhoncus sit amet. Aliquam ac viverra libero. Mauris vel nunc ac mi pellentesque tristique. Integer id sem eget turpis aliquam rhoncus non sed odio. Nullam volutpat odio nibh, eget viverra risus tempus tempus. Cras nunc sapien, viverra ut aliquet ac, vulputate et ante. Sed sit amet nulla cursus, blandit mi sit amet, vehicula dolor. In hac habitasse platea dictumst. Ut fermentum rhoncus finibus. Sed hendrerit risus velit, ac volutpat dolor consequat eu. Suspendisse tortor turpis, lobortis fringilla fringilla in, varius non est. Nunc mauris nisi, mattis ut mauris sed, eleifend cursus dolor. Nulla eu tristique ex. Aliquam eleifend nisl hendrerit nisi aliquet, quis malesuada eros cursus. Donec vulputate posuere mauris vitae eleifend. Vestibulum quis massa lectus."

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function() {
        cy.visit('./src/index.html')
      })

    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
    })
    
    it('preenche os campos obrigatórios e envia o formulário', function() {
        cy.get('#firstName').type('Paulo Ricardo')
        cy.get('#lastName').type('Mesquita')
        cy.get('#email').type('pauloricardomrs2002@gmail.com')
        cy.get('#phone').type('(21)96540-9149')
        cy.get('#open-text-area').type(text,{delay: 0})
        cy.get('button[type=submit]').click()
        cy.get('.success > strong').should('be.visible')
    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
        cy.get('#firstName').type('Paulo Ricardo')
        cy.get('#lastName').type('Mesquita')
        cy.get('#email').type('isso não é um email')
        cy.get('#phone').type('(21)96540-9149')
        cy.get('#open-text-area').type(text,{delay: 0})
        cy.get('button[type=submit]').click()
        cy.get('.error').should('be.visible')
    })

    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {
        cy.get('#firstName').type('Paulo Ricardo')
        cy.get('#lastName').type('Mesquita')
        cy.get('#email').type('pauloricardomrs2002@gmail.com')
        cy.get('#open-text-area').type(text,{delay: 0})
        cy.get('#phone-checkbox').click()
        cy.get('button[type=submit]').click()
        cy.get('.error').should('be.visible')
    })

    it('preenche e limpa os campos nome, sobrenome, email e telefone', function() {
        cy.get('#firstName').type('Paulo Ricardo')
        .should('have.value','Paulo Ricardo')
        .clear()
        .should('have.value','')


        cy.get('#lastName').type('Mesquita').should('have.value','Mesquita')
        .clear()
        .should('have.value','')

        cy.get('#email').type('pauloricardomrs2002@gmail.com')
        .should('have.value','pauloricardomrs2002@gmail.com')
        .clear()
        .should('have.value','')


        cy.get('#phone')
        .type('21965409149')
        .should('have.value','21965409149')
        .clear()
        .should('have.value','')
    })

    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function() {
        cy.get('button[type=submit]').click()
        cy.get('.error').should('be.visible')
    })

    it('envia o formuário com sucesso usando um comando customizado', function() {
        cy.fillMandatoryFieldsAndSubmit()
    })

    it('envia o formuário com sucesso usando um comando customizado', function() {
        cy.fillMandatoryFieldsAndCheckButtomAndSubmit()
    })

    it('seleciona um produto (YouTube) por seu texto', function() {
        cy.selectYoutubeOnYourText()
    })

    it('seleciona um produto (Mentoria) por seu valor (value)', function() {
        cy.selectMentoriaOnYourValue()
    })

    it('seleciona um produto (Blog) por seu índice', function() {
        cy.selectBlogOnYourIndex()
    })

    it('marca o tipo de atendimento "Feedback"', function() {
        cy.markingFeedback()
    })

    it('marca cada tipo de atendimento', function() {
        cy.markingAllOptions()
    })

    it('marca ambos checkboxes, depois desmarca o último', function() {
        cy.markingCheckboxAndUmarkingLast()
    })

    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {
        cy.markingTelefoneAndCausingErrorIfTelefoneNotCompleted()
    })

    it('seleciona um arquivo da pasta fixtures', function() {
        cy.selectArchiveOnDirectoryFixtures()
    })

    it('seleciona um arquivo simulando um drag-and-drop', function() {
        cy.selectArchiveSimulatingDragAndDrop()
    })

    it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', function() {
        cy.selectArchiveWithAlias()
    })

    it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', function() {
        cy.verifyPolicyTermsOpenInNewWindowsWithouClick()
    })

    it('acessa a página da política de privacidade removendo o target e então clicando no link', function() {
        cy.verifyPolicyTermsOpenRemovingLink()
    })
    /**
    it('testa a página da política de privacidade de forma independente', function() {
        cy.checkingLink()
    })
    **/
    
    it('Verificando se a mensagem de sucesso desaparece após 3 segundos', function() {
        cy.chekingSucess()
    })

    Cypress._.times(5,() =>{
        it('Verificando se a mensagem de Erro desaparece após 3 segundos', function() {
            cy.chekingError()
        })
    })

    it('exibe e esconde as mensagens de sucesso e erro usando o .invoke()', function() {
        cy.showAndHideErrorAndSucessMessages()
    })

    it('preenche a area de texto usando o comando invoke',() => {
        cy.fullingTextAreaWithInvoke()

    })


    it('faz uma requisição HTTP',()=>{
        cy.doHTTPRequest()
    })

    it('encontre o gato',() => {
        cy.findTheCat()
    })

})

 