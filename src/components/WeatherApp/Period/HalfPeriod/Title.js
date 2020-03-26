import React from 'react'

import Row from 'react-bootstrap/Row'

class Title extends React.Component {
    render() {
        return(
            <Row className='title'>
                {this.props.title}
            </Row>
        )
    }
}

export default Title