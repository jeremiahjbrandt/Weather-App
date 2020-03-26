import React from 'react'

class Description extends React.Component {
    render() {
        return(
            <div className='description'>
                {this.props.description ? this.props.description : 'DESCRIPTION'}
            </div>
        )
    }
}

export default Description