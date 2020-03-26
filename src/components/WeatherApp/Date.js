import React from 'react'

import Row from 'react-bootstrap/Row'

class Date extends React.Component {
    render() {
        return(
            <Row className='date'>
                {this.props.date ? this.props.date : 'DATE'}
            </Row>
        )
    }
}

export default Date