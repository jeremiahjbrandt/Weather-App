import React from 'react'

class Temperature extends React.Component {
    render() {
        return(
            <div className='temperature'>
                {this.props.temperature ? this.props.temperature + ' F' : "TEMPERATURE"}
            </div>
        )
    }
}

export default Temperature