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
            <form className='search'>
                <input 
                    className='searchInput'
                    type='text' 
                    onChange={this.handleInput}
                    placeholder='City or Zip Code'
                />
                <inpit type='submit' onClick={this.handleSearch} className='searchButton'>
                    Search
                </inpit>
            </form>
        )
    }
}

export default Search