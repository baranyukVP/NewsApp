import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { combineEpics } from 'redux-observable';
import { createEpicMiddleware } from 'redux-observable';
import { catchError } from 'rxjs';

import {
  fetchNews$,
  fetchSources$,
  fetchTopHeadlines$,
} from './effects/news.effects';
import { INewsStore, newsReducers } from './reducers/news.reducers';

export interface IStore {
  news: INewsStore;
}

export const rootReducer = combineReducers({ news: newsReducers });

export const rootEpic = (action$: any, store$: any, dependencies: any) =>
  // @ts-ignore
  combineEpics(fetchSources$, fetchNews$, fetchTopHeadlines$)(
    action$,
    store$,
    dependencies
  ).pipe(
    catchError((error, source) => {
      console.error(error);

      return source;
    })
  );

const epicMiddleware = createEpicMiddleware<any>();

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(epicMiddleware))
  );

  epicMiddleware.run(rootEpic);

  return store;
}
