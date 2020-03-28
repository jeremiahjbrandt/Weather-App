import React from 'react'

class HourlyTemperature extends React.Component {
    render() {
        return(
            <div className='hourlyTemperature'>
                {this.props.temperature ? this.props.temperature +  ' °F' : 'HOURLY TEMPERATURE'}
            </div>
        )
    }
}

export default HourlyTemperature