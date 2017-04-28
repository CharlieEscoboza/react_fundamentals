/**
 * Created by Charlie on 1/8/2017.
 */

import React from 'react';

import styles from '../styles';

class Loading extends React.Component {

  constructor(props){
    super(props);
    this._updateLoadingState = this._updateLoadingState.bind(this);
    this.originalText = props.text;
    this.state = {
      text: this.originalText
    };
  }


  _updateLoadingState() {
    const stopper = `${this.originalText}...`;

    if (this.state.text === stopper) {
      this.setState({
        text: this.originalText
      });
    } else {
      this.setState({
        text: `${this.state.text}.`
      });
    }
  }


  componentDidMount() {
    this.interval = setInterval(this._updateLoadingState, this.props.speed);
  }


  componentWillUnmount() {
    clearInterval(this.interval);
  }


  render() {
    return (
      <div style={styles.loadingContainer}>
        <p>{this.state.text}</p>
      </div>
    );
  }
}

Loading.propTypes = {
  speed: React.PropTypes.number,
  text: React.PropTypes.string
};

Loading.defaultProps = {
  speed: 300,
  text: 'Loading'
};

export default Loading;
