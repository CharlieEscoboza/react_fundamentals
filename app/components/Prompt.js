/**
 * Created by Charlie on 11/5/2016.
 */

import React, { PropTypes } from 'react';
import styles from '../styles';


/**
 * Render a Prompt component
 * @returns {Object} - React element
 */
function Prompt({handleChange, handleUserSubmit, header, username}) {

  return (
    <div className="jumbotron col-sm-6 col-offset-3 text-container" style={styles.transparentBg}>
      <h1 className="text-center">{header}</h1>
      <div className="col-sm-12">
        <form action="">
          <div className="form-group">
            <input type="text" className="form-control" onChange={handleChange} placeholder="Github Username" value={username}/>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block btn-success" onClick={handleUserSubmit}>
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


Prompt.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleUserSubmit: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
};

export default Prompt;
