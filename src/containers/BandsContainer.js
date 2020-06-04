import React, { Component } from 'react';
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';
import manageBand from '../reducers/manageBand';

class BandsContainer extends Component {
  render() {
    return(
      <div>
        {/* <h3>BandsContainer</h3> */}
        <BandInput addBand={this.props.addBand}/>
        <ul>
          {this.props.bands.map((band, index) => <li key={index}>{band.name}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: (band) => {
      dispatch({type: 'ADD_BAND', band})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)