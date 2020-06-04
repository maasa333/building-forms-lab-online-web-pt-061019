// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux';
import manageBand from '../reducers/manageBand';

class BandInput extends Component {
    state = {
        name: ''
    }

    handleChange = event => {
        this.setState({
            name: event.target.value
        })
    }

    render() {
      return(
        <div>
          <h3>Band Input</h3>
          <form>
            <input onChange={event => this.handleChange(event)} type='text' value={this.state.name} />
            <input type="submit" />
          </form>
        </div>
      )
    }
}

const mapDispatchToProps = dispatch => {
  return {
    manageBand
    // manageBand: () => {
    //   dispatch(manageBand())
    // }
  };
};

export default connect(mapDispatchToProps)(BandInput);