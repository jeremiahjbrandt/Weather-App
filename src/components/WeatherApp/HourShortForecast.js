import React from 'react'

class HourShortForecast extends React.Component {
    render() {
        return(
            <div className='hourShortForecast'>
                {this.props.shortForecast}
            </div>
        )
    }
}

export default HourShortForecast