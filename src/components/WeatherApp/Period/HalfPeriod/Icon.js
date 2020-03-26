import React from 'react'

import Image from 'react-bootstrap/Image'

class Icon extends React.Component {
    render() {
        return(
            <Image src={this.props.url} alt={this.props.alt}  className='icon' />
        )
    }
}

export default Icon