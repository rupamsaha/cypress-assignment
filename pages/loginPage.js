class LoginPage {

    getEmailTextBox() {
        return cy.get("#ce-input-0")
    }

    getPasswordTextBox() {
        return cy.get("#ce-input-1")
    }

    getSubmitButton() {
        return cy.get(".btn")
    }

    login(email, pass) {
        cy.visit('/ui/login')
        this.getEmailTextBox().type(email)
        this.getPasswordTextBox().type(pass)
        this.getSubmitButton().click()        
    } 
}

export default LoginPage