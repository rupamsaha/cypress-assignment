class ProcessAnalyticsPage {

    getWorkspacesList() {
        return cy.get(".workspaces__list")
    }

    getOrderToCashWorkspaceListItem() {
        return cy.get(".ce-list__item:nth-of-type(2)")
    }

    getAnalysesSection() {
        return cy.get(".ce-split-content-detail--loading")
    }

    getOrderToCashAnalysesCard() {
        return cy.get('.workspaces__section:nth-of-type(1) .ce-tile__link')
    }
}

export default ProcessAnalyticsPage