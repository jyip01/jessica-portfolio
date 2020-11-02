import React, { Component } from 'react'

const PageContext = React.createContext({
    currentPage:'about',
    setCurrentPage:()=>{},
})

export default PageContext

export class PageProvider extends Component {
    state={
        currentPage: 'about',
    }

    setCurrentPage = page => {
        this.setState({
            currentPage: page,
        })
    }

    render(){
        const value = {
            currentPage: this.state.currentPage,
            setCurrentPage: this.setCurrentPage,
        }

        return (
            <PageContext.Provider value={value}>
                {this.props.children}
            </PageContext.Provider>
        )
    }
}