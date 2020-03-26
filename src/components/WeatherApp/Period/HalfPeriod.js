import React from 'react'
import Title from './HalfPeriod/Title'
import Icon from './HalfPeriod/Icon'
import Forecast from './HalfPeriod/Forecast'
import Temperature from './HalfPeriod/Temperature'
import Wind from './HalfPeriod/Wind'

import Row from 'react-bootstrap/Col'

class HalfPeriod extends React.Component {
    render() {
        //Variables
        const {name, icon, shortForecast, temperature, windDirection, windSpeed, isDaytime} = this.props.data

        //Sets class to day or night
        let className = 'halfPeriod'
        isDaytime ? className+=' day' : className+=' night'

        return(
            <Row className={className}>
                <Title title={name} />
                <Icon url={icon} alt={shortForecast} />
                <Forecast forecast={shortForecast} />
                <Temperature temperature={temperature} />
                <Wind direction={windDirection} speed={windSpeed} /> 
            </Row>
        )
    }
}

export default HalfPeriod