import React from 'react'
import HalfPeriod from './Period/HalfPeriod'
import Date from './Date'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Col'

class Period extends React.Component {
    render() {
        return(
            <Col xs={12} sm={6} md={4} lg={3} xl={true} className='period'>
                {/* Date */}
                <Row>
                    <Date 
                        date={this.props.date}
                    />
                </Row>
                
                {/* Half Periods */}
                <Row>
                    {this.props.halfPeriods.map(currHalfPeriod =>
                        <HalfPeriod 
                            data={currHalfPeriod}
                            key={currHalfPeriod.number}
                        />
                    )}
                </Row>

            </Col>
        )
    }
}

export default Period