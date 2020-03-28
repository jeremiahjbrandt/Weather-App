import React from 'react'

class HourIcon extends React.Component {
    render() {
        return(
            <div className='hourIcon'>
                <img src={this.props.icon} alt={this.props.alt} />
            </div>
        )
    }
}

export default HourIcon