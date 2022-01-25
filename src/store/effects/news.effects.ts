import { ofType } from 'redux-observable';
import { map, Observable, switchMap } from 'rxjs';

import { FetchTopHeadlines } from '../actions/news.actions';
import { fetchTopHeadlines } from '../services/news.services';

export const fetchTopHeadlines$ = (actions$: Observable<any>) =>
  actions$.pipe(
    ofType(FetchTopHeadlines.Pending),
    switchMap(({ payload }) => {
      return fetchTopHeadlines().pipe(
        map((data) => ({ type: FetchTopHeadlines.Success }))
      );
    })
  );
