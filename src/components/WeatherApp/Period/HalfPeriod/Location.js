import React from 'react'

import Col from 'react-bootstrap/Col'

class Location extends React.Component {
    render() {
        return(
            <Col className='location'>
                {this.props.city ? this.props.city + ', ' : 'Loading...'}
                {this.props.state ? this.props.state : ''}
            </Col>
        )
    }
}

export default Location