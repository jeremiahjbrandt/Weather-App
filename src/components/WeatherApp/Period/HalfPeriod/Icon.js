import React from 'react'

class Icon extends React.Component {
    render() {
        return(
            <img src={this.props.url} alt={this.props.alt}  className='icon' />
        )
    }
}

export default Icon