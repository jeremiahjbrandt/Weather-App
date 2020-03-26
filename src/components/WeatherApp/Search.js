import React from 'react'

import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

import Button from 'react-bootstrap/Button'

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
            <InputGroup className='search'>
                <FormControl onChange={this.handleInput}
                    placeholder='address, city, or zip code'
                />
                <Button onClick={this.handleSearch} className='searchButton'>
                    Search
                </Button>
            </InputGroup>
        )
    }
}

export default Search