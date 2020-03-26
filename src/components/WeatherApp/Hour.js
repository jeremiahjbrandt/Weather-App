import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import HourTime from './HourTime'
import HourlyTemperature from './HourlyTemperature'
import HourIcon from './HourIcon'
import HourShortForecast from './HourShortForecast'

class Hour extends React.Component {
    render() {
        const style={width:'120px'}
        const {icon, temperature, shortForecast} = this.props
        const timeIndex = this.props.time.indexOf("T")
        const time = this.props.time.substring(timeIndex+1, timeIndex+3) + '00'
        return(
            <div className='col hour' style={style}>
                <HourTime time={time} />
{/*                 <HourIcon icon={icon} />
 */}                <HourlyTemperature temperature={temperature} alt={shortForecast} />
{/*                 <HourShortForecast shortForecast={shortForecast} />
 */}            </div>
        )
    }
}

export default Hour