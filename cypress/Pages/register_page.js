export class RegisterPage{

    weblocators={
        firstName:'#input-firstname',
        lastName:'#input-lastname',

        email:'#input-email',
        telephone:'#input-telephone',
        password:'#input-password',
        cpassword:'#input-confirm',
        Mobile:'#input-telephone',
        privacypolicy:'input[type="checkbox"]',
        submit:'input[type="submit"]',
        continue:'.btn.btn-primary'

    }

    openURL() {
        cy.visit(Cypress.env('URL'))
    

    }
    enterFirstname(Fname){
        cy.get(this.weblocators.firstName).type(Fname)


    }
    enterLastname(Lname){
        cy.get(this.weblocators.lastName).type(Lname)
    }

enterEmail(Email){
    cy.get(this.weblocators.email).type(Email)
}

enterTelephone(Mobile){
    cy.get(this.weblocators.telephone).type(Mobile)
}
enterPassword(Password){
    cy.get(this.weblocators.password).type(Password)

}
    enterCpassword(cpassword){
        cy.get(this.weblocators.cpassword).type(cpassword)

}
selectCheckbox(){
    cy.get(this.weblocators.privacypolicy).check()

}

clickOncontinue(){
    cy.get(this.weblocators.continue).click()

}
}
