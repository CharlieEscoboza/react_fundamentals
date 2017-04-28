/**
 * Created by Charlie on 10/30/2016.
 */

import React from 'react';

import Prompt from '../components/Prompt';

class PromptContainer extends React.Component {


  /**
   * Get component initial state
   *
   * @returns {Object} initial state component
   */
  constructor(props) {
    super(props);
    this._handleChange = this._handleChange.bind(this);
    this._handleUserSubmit = this._handleUserSubmit.bind(this);
    this.state = {
      username: ''
    };
  }


  /**
   * Handle Input Change
   *
   * @param {Object} evt - evt object
   * @returns {undefined} undefined
   * @private
   */
  _handleChange(evt) {
    const username = evt.target.value;
    this.setState({
      username: username
    });
  }


  /**
   * Handle User Submit
   *
   * @param {Object} evt - click event
   * @private
   */
  _handleUserSubmit(evt) {
    evt.preventDefault();
    this.setState({
      username: ''
    });

    const { playerOne } = this.props.routeParams;

    if (playerOne) {
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: playerOne,
          playerTwo: this.state.username
        }
      });
    } else {
      this.context.router.push(`/playerTwo/${this.state.username}`);
    }
  }


  /**
   * Render PromptContainer component
   *
   * @returns {Object} React element
   */
  render() {

    const promptProps = {
      handleChange: this._handleChange,
      handleUserSubmit: this._handleUserSubmit,
      header: this.props.route.header,
      username: this.state.username
    };

    return <Prompt {...promptProps}/>;
  }
}

PromptContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default PromptContainer;
