import React from 'react'

import Location from './WeatherApp/Period/HalfPeriod/Location'
import IndividualPeriod from './WeatherApp/IndividualPeriod'
import Period from './WeatherApp/Period'
import Search from './WeatherApp/Search'

const dummyHourlyForecast = [
    {
        title: {
            name: 'Sunday',
            date: 'March 1, 2020',
        },
        hourlyForecast: [
            {
                startTime: '0000',
                temperature: 12,
            },
            {
                startTime: '0100',
                temperature: 12,
            },
            {
                startTime: '0200',
                temperature: 12,
            },
            {
                startTime: '0300',
                temperature: 12,
            },
            {
                startTime: '0400',
                temperature: 12,
            },
            {
                startTime: '0500',
                temperature: 12,
            },
            {
                startTime: '0600',
                temperature: 12,
            },
            {
                startTime: '0700',
                temperature: 12,
            },
            {
                startTime: '0000',
                temperature: 12,
            },
            {
                startTime: '0000',
                temperature: 12,
            },
            {
                startTime: '0000',
                temperature: 12,
            },
            {
                startTime: '0000',
                temperature: 12,
            },
            {
                startTime: '0000',
                temperature: 12,
            },
            {
                startTime: '0000',
                temperature: 12,
            },
            {
                startTime: '0000',
                temperature: 12,
            },
            {
                startTime: '0000',
                temperature: 12,
            },
            {
                startTime: '0000',
                temperature: 12,
            },
            {
                startTime: '0000',
                temperature: 12,
            },
            {
                startTime: '0000',
                temperature: 12,
            },
            {
                startTime: '0000',
                temperature: 12,
            },
            {
                startTime: '0000',
                temperature: 12,
            },
            {
                startTime: '0000',
                temperature: 12,
            },
            {
                startTime: '0000',
                temperature: 12,
            },
            {
                startTime: '0000',
                temperature: 12,
            },
        ]
    },
    {
        title: {
            name: 'Monday',
            date: 'March 2, 2020',
        },
        hourlyForecast: [
            {
                startTime: '0000',
                temperature: 12,
            },
            {
                startTime: '0100',
                temperature: 12,
            },
            {
                startTime: '0200',
                temperature: 12,
            },
            {
                startTime: '0300',
                temperature: 12,
            },
            {
                startTime: '0400',
                temperature: 12,
            },
            {
                startTime: '0500',
                temperature: 12,
            },
            {
                startTime: '0600',
                temperature: 12,
            },
            {
                startTime: '0700',
                temperature: 12,
            },
            {
                startTime: '0000',
                temperature: 12,
            },
            {
                startTime: '0000',
                temperature: 12,
            },
            {
                startTime: '0000',
                temperature: 12,
            },
            {
                startTime: '0000',
                temperature: 12,
            },
            {
                startTime: '0000',
                temperature: 12,
            },
            {
                startTime: '0000',
                temperature: 12,
            },
            {
                startTime: '0000',
                temperature: 12,
            },
            {
                startTime: '0000',
                temperature: 12,
            },
            {
                startTime: '0000',
                temperature: 12,
            },
            {
                startTime: '0000',
                temperature: 12,
            },
            {
                startTime: '0000',
                temperature: 12,
            },
            {
                startTime: '0000',
                temperature: 12,
            },
            {
                startTime: '0000',
                temperature: 12,
            },
            {
                startTime: '0000',
                temperature: 12,
            },
            {
                startTime: '0000',
                temperature: 12,
            },
            {
                startTime: '0000',
                temperature: 12,
            },
        ]
    }
]

class WeatherApp extends React.Component {
    constructor(props) {
        super(props)
        this.fetchWeatherData = this.fetchWeatherData.bind(this)
        this.resizePeriods = this.resizePeriods.bind(this)
        this.handleDataLoading = this.handleDataLoading.bind(this)
        this.handleSevenDayForecast = this.handleSevenDayForecast.bind(this)
        this.handleHourlyForecast = this.handleHourlyForecast.bind(this)
        this.state = {
            isLoaded: false,
            location: this.props.defaultLocation,
            showIndividualDay: true,
            hourlyForecastIsLoad: false,
            lat: 39.0914657,
            lng: -93.21044209999999,

        }
    }

    //Fetches default API data after component mounts
    componentDidMount() {
        this.fetchWeatherData()
    }
    
    //Fetches new API data when called
     componentDidUpdate() {
        !this.state.isLoaded 
            ? this.fetchWeatherData() 
            : this.resizePeriods()
    } 

    //Fetches general data from nws.gov
    fetchWeatherData() {
        let coordinates = this.state.lat + ',' + this.state.lng
        console.log('fetchWeatherData(' + coordinates + ')');
        let url = 'https://api.weather.gov/points/' + coordinates
        fetch(url)
            .then(reponse => reponse.json())
            .then(data => this.handleDataLoading(data))
    }

    //Uses loaded API data to create new day object for next 7 days
    handleDataLoading(data) {
        //Creates new location object passed to handleSevenDayForcast, used to setState
        let location = {
            city: data.properties.relativeLocation.properties.city,
            state: data.properties.relativeLocation.properties.state
        }
        //Fetches general seven day forecast from URL in data.properties
         fetch(data.properties.forecast)
            .then(response => response.json())
            .then(data => this.handleSevenDayForecast(data.properties.periods, location))

        //Fetches hourly seven day forecast from URL in data.properties
        fetch(data.properties.forecastHourly)
            .then(response => response.json())
            .then(data => this.handleHourlyForecast(data.properties.periods))
    }

    //Updates Forecast in State using location and periods
    handleSevenDayForecast(periods, location) {
        const sevenDayForecast = []

        //Iterates through afternoon and night half periods to create a single day
        for(let i=0; i<14; i+=2) {
            const currDay = periods[i]
            const currNight = periods[i+1]

            const currDate = currDay.startTime.substring(0, 10)

            const currPeriod = {
                date: currDate,
                halfPeriods: [
                  currDay, currNight
                ]
            }
            sevenDayForecast.push(currPeriod)
        }

        this.setState({
            forecast: {
                location: location,
                sevenDayForecast: sevenDayForecast
            },
            isLoaded: true
        })
    }

    //Handles hourly forcast
    handleHourlyForecast(periods) {
        let days = []
        let hours = []

        //Gets time of each hour
        periods.map(currHour => {
            const timeIndex = currHour.startTime.indexOf("T")
            const hourTime = parseInt(currHour.startTime.substring(timeIndex+1, timeIndex+3))

            if(hourTime < 23) {
                hours.push(currHour)
            } else {
                hours.push(currHour)

                days.push({
                    date: currHour.startTime.substring(0, timeIndex),
                    hours: hours
                })
                hours = []
            }
        })
        
        this.setState({
            hourlyForecast: days,
            hourlyForecastIsLoad: true
        })
    }

    //Updates location after search
    handleSearch(value) {
        let URL = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + value.replace(' ','+') + '&key=AIzaSyDqN67XiDvWTXoXyPNxPHW0VLqdUN2T2GU'
        fetch(URL)
            .then(response => response.json())
            .then(data => this.setState({isLoaded: false, location: value, lat: data.results[0].geometry.location.lat, lng: data.results[0].geometry.location.lng}))
    }

    

    //Gets max heights and updates all other elements of same class
    resizePeriods() {
        //For period titles
        let periodTitles = document.getElementsByClassName('periodTitle')
        let maxPeriodTitlesHeight = 0
        for(let i=0; i<periodTitles.length; i++) {
            let currPeriodTitlesHeight = periodTitles.item(i).clientHeight
            maxPeriodTitlesHeight = currPeriodTitlesHeight > maxPeriodTitlesHeight ? currPeriodTitlesHeight : maxPeriodTitlesHeight
        }
        for(let i=0; i<periodTitles.length; i++) {
            periodTitles.item(i).style.height = maxPeriodTitlesHeight + 'px'
        }

        //For days
        let days = document.getElementsByClassName('day')
        let maxDayHeight = 0
        for(let i=0; i<days.length; i++) {
            let currDayHeight = days.item(i).clientHeight
            maxDayHeight = currDayHeight > maxDayHeight ? currDayHeight : maxDayHeight
        }
        for(let i=0; i<days.length; i++) {
            days.item(i).style.height = maxDayHeight + 'px'
        }
        
        //For nights
        let nights = document.getElementsByClassName('night')
        let maxNightHeight = 0
        for(let i=0; i<nights.length; i++) {
            let currNightHeight = nights.item(i).clientHeight
            maxNightHeight = currNightHeight > maxNightHeight ? currNightHeight : maxNightHeight
        }
        for(let i=0; i<nights.length; i++) {
            nights.item(i).style.height = maxNightHeight + 'px'
        }
    }

    render() {
        //Initializes variables if API loads
        const {city, state} = this.state.isLoaded ? this.state.forecast.location : ''
        const {showIndividualDay, hourlyForecastIsLoad} = this.state
        const {sevenDayForecast} = this.state.isLoaded ? this.state.forecast : ''

        return(
            <div fluid={true} className='weatherApp'>
                {/* Seach */}
                <div className='top'>
                    <Search handleSearch={this.handleSearch.bind(this)} />

                    {/* Location data */}
                    <Location
                        city={city}
                        state={state}
                    />
                </div>

                {/* Individual Day */}
                {showIndividualDay && hourlyForecastIsLoad ? 
                    <IndividualPeriod  
                        forecast={this.state.hourlyForecast[2]}
                    /> 
                : ''}

                {/* Forecast data */}
                <div className='periods'>
                {this.state.isLoaded ? sevenDayForecast.map(currForecast => 
                    <Period 
                        date={currForecast.date} 
                        halfPeriods={currForecast.halfPeriods}
                        key={currForecast.date}
                    />
                ): ''}
                </div>

            </div>
        )
    }
}

export default WeatherApp