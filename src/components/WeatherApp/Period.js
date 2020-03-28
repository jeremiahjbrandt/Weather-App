import React from 'react'
import HalfPeriod from './Period/HalfPeriod'
import Date from './Date'

class Period extends React.Component {
    render() {
        return(
            <div className='period'>
                {/* Date */}
                <Date 
                    date={this.props.date}
                />
                        
                {/* Half Periods */}
                {this.props.halfPeriods.map(currHalfPeriod =>
                    <HalfPeriod 
                        data={currHalfPeriod}
                        key={currHalfPeriod.number}
                    />
                    )}
            </div>
        )
    }
}

export default Period