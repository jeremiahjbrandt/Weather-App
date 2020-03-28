import React from 'react'
import Title from './HalfPeriod/Title'
import Icon from './HalfPeriod/Icon'
import Forecast from './HalfPeriod/Forecast'
import Temperature from './HalfPeriod/Temperature'
import Wind from './HalfPeriod/Wind'

class HalfPeriod extends React.Component {
    render() {
        //Variables
        const {name, icon, shortForecast, temperature, windDirection, windSpeed, isDaytime} = this.props.data

        //Sets class to day or night
        let className = 'halfPeriod'
        isDaytime ? className+=' day' : className+=' night'

        return(
            <div className={className}>
                <Title title={name} />
                <Icon url={icon} alt={shortForecast} />
                <div className='forecastData'>
                    <Forecast forecast={shortForecast} />
                    <Temperature temperature={temperature} />
                    <Wind direction={windDirection} speed={windSpeed} /> 
                </div>
            </div>
        )
    }
}

export default HalfPeriod