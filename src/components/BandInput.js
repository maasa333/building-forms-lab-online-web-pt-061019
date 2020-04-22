// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

    state = {
        name: ''
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
    }

    render() {
      return(
        <div>
          <form onSubmit={this.handleSubmit}>
            <input onChange={e => this.handleChange(e)} type='text' value={this.state.name}>Band Input</input>
            <input type="submit">Submit</input>
          </form>
        </div>
      )
    }
}

export default BandInput