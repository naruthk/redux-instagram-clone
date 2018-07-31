import { combineReducers } from 'redux';
import { routerReducer} from 'react-router-redux';

import posts from './posts';
import comments from './comments';

// The Reducer does the handle of changing the states!
const rootReducer = combineReducers({ posts, comments, routing: routerReducer });

export default rootReducer;