/**
 * Created by Charlie on 1/7/2017.
 */

import React from 'react';

import Loading from './Loading';
import MainContainer from './MainContainer';
import PlayerInfo from './PlayerInfo';
import StartOver from './StartOver';


/**
 * Get Players info section
 *
 * @param {Array<number>} scores - players scores
 * @param {number} winnerIndex - winner player index
 * @returns {Function}
 * @private
 */
function _getPlayerInfo(scores, winnerIndex) {
  return function (player, index) {
    const label = winnerIndex === index ? 'Winner' : 'Loser';

    return <PlayerInfo {...player} index={index + 1} score={scores[index]} label={label} key={index} />;
  };
}


function getScoresDistribution(valuesArray, result = {}) {

  return valuesArray.reduce(function (pervious, current, index) {
    result[current] = result[current] || [];
    result[current].push(index);

    return result;
  });
}


/**
 * Get winner player index
 *
 * @param {Array<number>} scores - players scores
 * @returns {number} winner index
 * @private
 */
function _getWinnerIndex(scores){
  let winnerIndex = 0;

  for (let index = 0; index < scores.length; index ++) {
    if (scores[winnerIndex] < scores[index]) {
      winnerIndex = index;
    }
  }

  return winnerIndex;
}


/**
 * Renders a result container component
 */
const Results = function ({isLoading, playersInfo, scores}) {

  if (isLoading) {
    return <Loading />;
  }

  const winnerIndex = _getWinnerIndex(scores) || 0;
  const content = playersInfo.map(_getPlayerInfo(scores, winnerIndex));


  return (
    <MainContainer >
      <h1>Results</h1>
      <div className="col-sm-8 col-sm-offset-2">
        {content}
      </div>
      <StartOver />
    </MainContainer>
  );
};


Results.propTypes = {
  isLoading: React.PropTypes.bool.isRequired,
  playersInfo: React.PropTypes.array.isRequired,
  scores: React.PropTypes.array.isRequired
};

export default Results;
