import React from 'react'

import Col from 'react-bootstrap/Col'

class HourShortForecast extends React.Component {
    render() {
        return(
            <Col className='hourShortForecast'>
                {this.props.shortForecast}
            </Col>
        )
    }
}

export default HourShortForecast