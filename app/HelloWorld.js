/**
 * Created by Charlie on 10/27/2016.
 */

import React from 'react';
import ReactDom from 'react-dom';

class HelloWorld extends React.Component {
    render() {
        return <div>Hello World from React</div>;
    }
}

ReactDom.render(<HelloWorld/>, document.getElementById('react-app'));
