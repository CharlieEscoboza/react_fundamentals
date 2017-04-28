/**
 * Created by Charlie on 1/7/2017.
 */

import { Link } from 'react-router';
import React from 'react';

import styles from '../styles';


/**
 * Renders Start Over Component
 *
 * @returns {Object} React element
 * @constructor
 */
function StartOver() {
  return (
    <div className="col-sm-12" style={styles.space}>
      <Link to="/playerOne">
        <button className="btn btn-lg btn-danger">Start Over</button>
      </Link>
    </div>
  );
}

export default StartOver;
