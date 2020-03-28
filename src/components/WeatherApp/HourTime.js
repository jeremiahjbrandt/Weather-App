import React from 'react'

class HourTime extends React.Component {
    render() {
        return(
            <div className='hourTime'>
                {this.props.time ? this.props.time : 'HOUR TIME'}
            </div>
        )
    }
}

export default HourTime