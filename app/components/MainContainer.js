/**
 * Created by Charlie on 1/7/2017.
 */

import React from 'react';

import styles from '../styles';


/**
 * Renders a Main Container Component
 *
 * @param {Object} children - component children
 * @returns {Object} React element
 * @constructor
 */
function MainContainer({children}) {
  return (
    <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
      {children}
    </div>
  );
}

export default MainContainer;
