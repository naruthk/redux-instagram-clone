// Develop your application here:

import React from 'react';
import { render } from 'react-dom';

// Import CSS
import css from './styles/style.styl';

// Import Components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// Import React Router dev
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

// Integrate automatic bug report for Sentry.io
import Raven from 'raven-js';
import { sentry_url, logException } from './data/config';

Raven.config(sentry_url, {
  tags: {
    git_commit: 'experimenting-new-features',
    userLevel: 'editor'
  }
}).install();

// This is too direct. Usually you'd pass in an error and wrap this in a try-catch statement.
logException(new Error('download failed'), {
  email: 'nkongurai@gmail.com'
});

// An example of how Raven can show report dialog directly in our app
Raven.showReportDialog();

const router = (
  <Provider store={store}>
    <Router history={history}>
      {/* If we are at this route, then show Main component. */}
      <Route path="/" component={App}>
        {/* Inside Main, if the route is at index level "/" show PhotoGrid */}
        <IndexRoute component={PhotoGrid}></IndexRoute>
        {/* Otherwise, show the Single component with our unique path */}
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));