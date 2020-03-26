import React from 'react'

class WindSpeed extends React.Component {
    render() {
        return(
            <div className='windSpeed'>
                {this.props.speed ? this.props.speed : 'SPEED'}
            </div>
        )
    }
}

export default WindSpeed