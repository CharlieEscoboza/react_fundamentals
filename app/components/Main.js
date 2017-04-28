/**
 * Created by Charlie on 10/30/2016.
 */

import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
require('../main.css');

class Main extends React.Component {

  /**
   * Render Main Component
   *
   */
  render() {
    return (
      <div>
        <ReactCSSTransitionGroup
          transitionName='appear'
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default Main;