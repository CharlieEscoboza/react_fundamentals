/**
 * Created by Charlie on 10/30/2016.
 */

import React from 'react';
import { Link } from 'react-router';

import MainContainer from './MainContainer';


class Home extends React.Component {

  /**
   * Render Home Component
   *
   */
  render() {
    return (
      <MainContainer>
        <h1>Github Battle</h1>
        <p className="lead">
          Some Fancy Motto
        </p>
        <Link to="/playerOne">
          <button type="button" className="btn btn-lg btn-success">
            Get Started
          </button>
        </Link>
      </MainContainer>
    );
  }
}

export default Home;