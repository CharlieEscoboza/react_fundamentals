/**
 * Created by Charlie on 11/19/2016.
 */

import React from 'react';


import ConfirmBattle from '../components/ConfirmBattle';
import { getPlayersInfo } from '../utils/githubHelpers';

class ConfirmBattleContainer extends React.Component {

  constructor(props) {
    super(props);
    this._updatePlayersInfo = this._updatePlayersInfo.bind(this);
    this._handleInitiateBattle = this._handleInitiateBattle.bind(this);
    this.state = {
      isLoading: true,
      playersInfo: []
    };
  }


  _updatePlayersInfo(playersInfo){
    const isLoading = playersInfo.length <= 0;

    this.setState({
      isLoading: isLoading,
      playersInfo: playersInfo
    });
  }


  _handleInitiateBattle() {
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      }
    });
  }


  async componentDidMount() {
    const { query } = this.props.location;
    try {
      const players = await getPlayersInfo([query.playerOne, query.playerTwo]);
      this._updatePlayersInfo(players);
    } catch(error) {
      console.warn(error);
    }
  }


  /**
   * Render Confirmation Battle Container Component
   * @returns {Object} - React element
   */
  render() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        onInitiateBattle={this._handleInitiateBattle}
        players={this.state.playersInfo}/>
    );
  }
}

ConfirmBattleContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default ConfirmBattleContainer;
