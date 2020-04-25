import React from 'react'

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

class Date extends React.Component {
    render() {
        const month = Number(this.props.date.substring(5, 7))
        const day = Number(this.props.date.substring(8, 10))+1
        console.log(day)
        return(
            <div className='date'>
                {`${months[month-1]} ${day}`}
            </div>
        )
    }
}

export default Date