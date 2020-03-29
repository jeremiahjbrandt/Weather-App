import React from 'react'

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.handleInput = this.handleInput.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.state = {
            input: ''
        }
    }

    handleInput(e) {
        this.setState({input:e.target.value})
    }

    handleSearch() {
        this.props.handleSearch(this.state.input)
    }

    render() {
        return(
            // Changed type from form to div because form was causing WeatherApp to re-render
            <div className='search' /* onSubmit={this.handleSearch} */>
                <input 
                    className='searchInput'
                    type='text' 
                    onChange={this.handleInput}
                    placeholder='City or Zip Code'
                />
                <input type='submit' className='searchButton' onClick={this.handleSearch} value='Search' />
            </div>
        )
    }
}

export default Search