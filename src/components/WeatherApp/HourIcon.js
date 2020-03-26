import React from 'react'

import Col from 'react-bootstrap/Col'

class HourIcon extends React.Component {
    render() {
        return(
            <Col className='hourIcon'>
                <img src={this.props.icon} alt={this.props.alt} />
            </Col>
        )
    }
}

export default HourIcon