import React from 'react'

import Col from 'react-bootstrap/Col'

class HourlyTemperature extends React.Component {
    render() {
        return(
            <Col className='hourlyTemperature'>
                {this.props.temperature ? this.props.temperature +  ' °F' : 'HOURLY TEMPERATURE'}
            </Col>
        )
    }
}

export default HourlyTemperature