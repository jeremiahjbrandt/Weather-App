import React from 'react'

class Date extends React.Component {
    render() {
        return(
            <div className='date'>
                {this.props.date ? this.props.date : 'DATE'}
            </div>
        )
    }
}

export default Date