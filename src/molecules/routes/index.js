import React, { Component } from 'react'
import Route from './route'
import './routes.scss'


const blockName = 'routes'

export default class Routes extends Component {

    state = {
        bookedRoute: ''
    }

    // Updates the Selected Flight Route on UI
    handleBook = (bookedRouteId) => {
        this.setState({bookedRoute: bookedRouteId })
    }

    // Renders a list of Flight Routes
    renderFlightRoutes = () => {
        const routesList = [];
        this.props.routesList.forEach((route, i) => {
            routesList.push(
                <div className={`${blockName}__route`} key={`${blockName}_${i}`}>
                    <Route
                        buttonId={i}
                        to={route.to}
                        from={route.from}
                        departsAt={route.departsAt}
                        arrivesAt={route.arrivesAt}
                        stops={route.stops}
                        booked={this.state.bookedRoute === i}
                        handleBooked={this.handleBook}
                    />
                </div>
            )
        })
        return routesList;
    }

    render() {
        return (
            <div className={blockName}>
                <div className={this.props.isMobile ? `${blockName}__grey-container-mobile` : `${blockName}__grey-container`}>
                    {this.renderFlightRoutes()}
                </div>
            </div>
        )
    }
}
