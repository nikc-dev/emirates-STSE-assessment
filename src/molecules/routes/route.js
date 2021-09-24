import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Button from '../../atoms/button'
import ekLogo from '../../ek.png'
import './route.scss'


const blockName = 'route'

export default class Route extends Component {

    handleBook = () => {
        this.props.handleBooked(this.props.buttonId)
    }

    render() {
        const { to, from, departsAt, arrivesAt, stops, booked, buttonId } = this.props;
        return (
            <div className={blockName}>
                <Container >
                    <Row className={booked ? `${blockName}__row-booked` : `${blockName}__row`}>
                    <Col className={`${blockName}__ek-icon`}>
                            <img className={`${blockName}__ek-img`} src={ekLogo}
                                alt={'express'} />
                        </Col>
                        <Col className={`${blockName}__col`} >
                            <div className={`${blockName}__time-container`}>
                                <p className={`${blockName}__time`}>{`${departsAt} - ${arrivesAt}`}</p>
                                <p className={`${blockName}__carrier`}>{`Emirates`}</p>
                            </div>
                        </Col>
                        <Col className={`${blockName}__col`} >
                            <div className={`${blockName}__destination-container`}>
                                <p className={`${blockName}__destination`}>{`${to}-${from}`}</p>
                                <p className={`${blockName}__stops`}>{stops}</p>
                            </div>
                        </Col>
                        <Col className={`${blockName}__col`} >
                            <div className={`${blockName}__select-cta-container`}>
                                {!booked ? 
                                <Button id={`${blockName}__${buttonId}`} title={`Book`} handleClick={this.handleBook} />
                                : <p className={`${blockName}__selected`}>Selected</p>
                            }
                            </div>
                        </Col>
                    </Row>
                    <hr className={`${blockName}__hr`} />
                </Container>


            </div>
        )
    }
}
