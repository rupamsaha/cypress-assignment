class ProcessDiagramPage {

    getCanvas(){
        return cy.get(".canvas")
    }

    getEdges(){
        return cy.get(".edge-layer .edge")
    }

    getNumberOfEdges(){
        this.getEdges()
    }

}

export default ProcessDiagramPage