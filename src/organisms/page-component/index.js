import React, { Component } from 'react'
import mockedResponse from '../../api/mock-data.json'
import NavBar from '../../molecules/navbar'
import Routes from '../../molecules/routes'
import './flight-routes.scss'


const blockName = 'flight-routes'

export default class Flights extends Component {

    state = {
        routesList: mockedResponse.results,
        isMobile: window.innerWidth < 768
    }

    render() {
        const { isMobile, routesList } = this.state
        return (
            <div className={blockName}>
                < NavBar />
                < Routes isMobile={isMobile} routesList={routesList} />
            </div>
        )
    }
}
