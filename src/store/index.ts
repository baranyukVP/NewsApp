import { createStore, applyMiddleware, combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import { createEpicMiddleware } from 'redux-observable';

import { fetchTopHeadlines$ } from './effects/news.effects';
import { newsReducers } from './reducers/news.reducers';

export const rootEpic = combineEpics(fetchTopHeadlines$);

export const rootReducer = combineReducers(newsReducers);

const epicMiddleware = createEpicMiddleware();

export default function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

  epicMiddleware.run(rootEpic);

  return store;
}
