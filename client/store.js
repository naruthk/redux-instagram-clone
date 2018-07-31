import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// Import route reducer
import rootReducer from './reducers/index';

// Import default data
import comments from './data/comments';
import posts from './data/posts';

// Create an object for the defaut data
const defaultState = {
  // posts: posts,
  // comments: comments
  posts,
  comments
};

// The Chrome Extension does not know anything about our store. So we must configure it to recognize our store by doing the following.
const enhancers = compose(window.devToolsExtension ? window.devToolsExtension() : f => f);

const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

// Remember, the reducer does not support hot reloading (automatic refresh of data changes) right away. So we have to implement it (accept the hot reload).
if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
