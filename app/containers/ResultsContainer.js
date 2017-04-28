/**
 * Created by Charlie on 1/7/2017.
 */

import React from 'react';

import { getBattleResults } from '../utils/githubHelpers';
import Results from '../components/Results';


/**
 * Renders a result container component
 */
class ResultsContainer extends React.Component {


  constructor(props) {
    super(props);
    this._updatePlayersScores = this._updatePlayersScores.bind(this);
    this.state = {
      isLoading: true,
      scores: []
    };
  }


  /**
   * Update players scores
   *
   * @param {Array<number>} scores - players scores
   * @private
   */
  _updatePlayersScores(scores) {
    this.setState({
      scores: scores,
      isLoading: false
    });
  }


  async componentDidMount() {
    const playersData = this.props.location.state.playersInfo;
    try {
      const players = await getBattleResults(playersData);
      this._updatePlayersScores(players);
    } catch (error) {
      console.warn(error);
    }
  }


  render() {
    const { playersInfo } = this.props.location.state;

    return (
      <Results
        isLoading={this.state.isLoading}
        playersInfo={playersInfo}
        scores={this.state.scores} />
    );
  }
}

ResultsContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default ResultsContainer;
