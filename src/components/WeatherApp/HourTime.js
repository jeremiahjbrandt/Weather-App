import React from 'react'

import Col from 'react-bootstrap/Col'

class HourTime extends React.Component {
    render() {
        return(
            <Col className='hourTime'>
                {this.props.time ? this.props.time : 'HOUR TIME'}
            </Col>
        )
    }
}

export default HourTime