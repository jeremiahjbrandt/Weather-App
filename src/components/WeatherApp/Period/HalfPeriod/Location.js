import React from 'react'

class Location extends React.Component {
    render() {
        return(
            <div className='location'>
                {this.props.city ? this.props.city + ', ' : 'Loading...'}
                {this.props.state ? this.props.state : ''}
            </div>
        )
    }
}

export default Location