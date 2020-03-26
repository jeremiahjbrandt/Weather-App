import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Hour from './Hour'

class HourGroup extends React.Component {
    render() {
        return(
            <Row className='hourGroup'>
                {this.props.hours 
                    ? this.props.hours.map((currHour) => 
                        <Hour 
                            time={currHour.startTime} 
                            icon={currHour.icon}
                            temperature={currHour.temperature}
                            shortForecast={currHour.shortForecast}
                        />
                    )
                    : ''
                }
            </Row>
        )
    }
}

export default HourGroup