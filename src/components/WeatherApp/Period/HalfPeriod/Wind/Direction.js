import React from 'react'

class WindDirection extends React.Component {
    render() {
        return(
            <div className='windDirection'>
                {this.props.direction ? this.props.direction : 'WIND DIRECTION'}
            </div>
        )
    }
}

export default WindDirection