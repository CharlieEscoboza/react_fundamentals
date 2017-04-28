/**
 * Created by Charlie on 11/19/2016.
 */

import React from 'react';
import { Link } from 'react-router';

import Loading from './Loading';
import MainContainer from './MainContainer';
import PlayerInfo from './PlayerInfo';
import styles from '../styles/index';


/**
 * Get Player Info Component
 *
 * @param {Object} player - player info
 * @param {number} index - player index
 * @returns {Object} React element
 */
function getPlayerInfo(player, index) {
  const playerNumber = index + 1;
  return <PlayerInfo {...player} index={index + 1} key={index} label={'Player ' + playerNumber}/>;
}


/**
 * Get Battle Content Component
 *
 * @param {Function} onInitiateBattle - Handle Initiate Battle action
 * @param {Array<Object>} players - players object array
 * @returns {Object} React element
 */
function getBattleContent({onInitiateBattle, players}){
  const content = players.map(getPlayerInfo) || [];

  return (
    <MainContainer>
      <h1>Confirm Players</h1>
      <div className="col-sm-8 col-sm-offset-2">
        {content}
      </div>
      <div className="col-sm-8 col-sm-offset-2">
        <div className="col-sm-12" style={styles.space}>
          <button type="button" className="btn btn-lg btn-success" onClick={onInitiateBattle}>Initiate Battle!</button>
        </div>
        <div className="col-sm-12" style={styles.space}>
          <Link to="/playerOne">
            <button type="button" className="btn btn-lg btn-danger">Reselect Players</button>
          </Link>
        </div>
      </div>
    </MainContainer>
  );
}

function ConfirmBattle(props) {
  return props.isLoading ? <Loading speed={500} text="Wait a moment" /> : getBattleContent(props);
}

ConfirmBattle.propTypes = {
  isLoading: React.PropTypes.bool.isRequired,
  onInitiateBattle: React.PropTypes.func.isRequired,
  players: React.PropTypes.array.isRequired
};

export default ConfirmBattle;
