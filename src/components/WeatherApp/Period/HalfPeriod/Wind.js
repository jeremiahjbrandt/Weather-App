import React from 'react'
import WindDirection from './Wind/Direction'
import WindSpeed from './Wind/Speed'

import Row from 'react-bootstrap/Col'

class Wind extends React.Component {
    render() {
        return(
            <Row className='wind'>
                <WindDirection direction={this.props.direction} />
                <WindSpeed speed={this.props.speed} />
            </Row>
        )
    }
}

export default Wind