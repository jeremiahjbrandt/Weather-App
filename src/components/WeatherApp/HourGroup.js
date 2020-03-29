import React from 'react'

import Hour from './Hour'

class HourGroup extends React.Component {
    render() {
        return(
            <div className='hourGroup'>
                {this.props.hours 
                    ? this.props.hours.map((currHour) => 
                        <Hour 
                            key={currHour.startTime}
                            time={currHour.startTime} 
                            icon={currHour.icon}
                            temperature={currHour.temperature}
                            shortForecast={currHour.shortForecast}
                        />
                    )
                    : ''
                }
            </div>
        )
    }
}

export default HourGroup