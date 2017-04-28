/**
 * Created by Charlie on 10/27/2016.
 */

import Raven from 'raven-js';
import React from 'react';
import ReactDom from 'react-dom';
import routes from './config/routes';

const sentryKey = '61d35dbf342647998a9f6dfa7dde9267';
const sentryApp = '110538';
const sentryUrl = `https://${sentryKey}@sentry.io/${sentryApp}`;

const _APP_INFO = {
  name: 'react_fundamentals',
  branch: '4',
  version: '1.0'
};

Raven.config(sentryUrl, {
  release: _APP_INFO.version,
  tags: {
    branch: _APP_INFO.branch
  }
}).install();

ReactDom.render(routes, document.getElementById('react-app'));
