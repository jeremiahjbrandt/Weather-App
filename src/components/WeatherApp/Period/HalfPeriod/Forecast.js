import React from 'react'

class Forecast extends React.Component {
    render() {
        return(
            <div className='forecast'>
                {this.props.forecast ? this.props.forecast : 'FORECAST'}
            </div>
        )
    }
}

export default Forecast