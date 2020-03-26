import React from 'react'
import Title from './Period/HalfPeriod/Title'
import HourGroup from './HourGroup'

class IndividualPeriod extends React.Component {
    render() {
        const {date, hours} = this.props.forecast

        return(
            <div className='individualPeriod'>
                <Title title={date} />
                <HourGroup hours={hours} />
            </div>
        )
    }
}

export default IndividualPeriod