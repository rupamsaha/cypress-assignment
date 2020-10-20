const LoginPage = require('../pages/loginPage')
const HomePage = require('../pages/homePage')
const ProcessDiagramPage = require('../pages/processDiagramPage')
const stubData = require('../stubData/stubData')

let loginPage, homePage, processDiagramPage

describe('Availability of Demos on landing page', () => {
    before(() => {
        loginPage = new LoginPage()
        homePage = new HomePage()
        processDiagramPage = new ProcessDiagramPage()
    })

    beforeEach(() => {
        loginPage.login(Cypress.env('email'), Cypress.env('password'))
    })

    it ('Should have processes listed under All Workspaces and Analyses section', () => {
        const workplaceList =  homePage.getWorkspacesList()
        workplaceList.should('be.visible')

        // Check for all Demo workspaces in Workspace list
        workplaceList.should('contain', stubData.OrderToCash)
        workplaceList.should('contain', stubData.PurchaseToPay)
        workplaceList.should('contain', stubData.ServiceNowTicketing)
        workplaceList.should('contain', stubData.TempPurchaseToPay)

        const analysesSection = homePage.getAnalysesSection()
        analysesSection.should('be.visible')

        // Check for all Demo cards in Analyses section
        analysesSection.should('contain', stubData.OrderToCash)
        analysesSection.should('contain', stubData.PurchaseToPay)
        analysesSection.should('contain', stubData.ServiceNowTicketing)
        analysesSection.should('contain', stubData.TempPurchaseToPay)
    })

    it ('Should display only one card in Analyses section on selecting order to cash workspace', () => {
        homePage.getWorkspacesList().should('be.visible')

        // Click on Order to Cash card
        homePage.getOrderToCashWorkspaceListItem().click()

        const analysesSection = homePage.getAnalysesSection()

        // Check if Analyses section has only Order to Cash card
        analysesSection.should('contain', stubData.OrderToCash)

        // Check that other cards are not displayed
        analysesSection.should('not.contain', stubData.PurchaseToPay)
        analysesSection.should('not.contain', stubData.ServiceNowTicketing)
        analysesSection.should('not.contain', stubData.TempPurchaseToPay)
    })


    it ('Should open process graph for Order to Cash Demo', () => {
        homePage.getAnalysesSection().should('be.visible')

        // // Check if process graph is displayed
        homePage.getOrderToCashAnalysesCard().click()
        processDiagramPage.getCanvas().should('be.visible')
    })

    
}) 