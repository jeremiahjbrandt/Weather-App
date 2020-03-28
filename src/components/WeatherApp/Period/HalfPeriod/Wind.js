import React from 'react'
import WindDirection from './Wind/Direction'
import WindSpeed from './Wind/Speed'

class Wind extends React.Component {
    render() {
        return(
            <div className='wind'>
                <WindDirection direction={this.props.direction} />
                <WindSpeed speed={this.props.speed} />
            </div>
        )
    }
}

export default Wind