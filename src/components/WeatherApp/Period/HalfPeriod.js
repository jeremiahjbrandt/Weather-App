import React from 'react'
import Icon from './HalfPeriod/Icon'
import Temperature from './HalfPeriod/Temperature'
import Wind from './HalfPeriod/Wind'

class HalfPeriod extends React.Component {
    render() {
        //Variables
        const {icon, shortForecast, temperature, windDirection, windSpeed, isDaytime} = this.props.data

        //Sets class to day or night
        let className = 'halfPeriod'
        isDaytime ? className+=' day' : className+=' night'

        return(
            <div className={className}>
                <Icon url={icon} alt={shortForecast} />
                <div className='forecastData'>
                    <Temperature temperature={temperature} />
                    <Wind direction={windDirection} speed={windSpeed} /> 
                </div>
            </div>
        )
    }
}

export default HalfPeriod