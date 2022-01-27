import { Action } from 'redux';
import { ofType } from 'redux-observable';
import { map, Observable, switchMap } from 'rxjs';

import { INewsPayload } from '../../types/News';
import { FetchNews, FetchSources } from '../actions/news.actions';
import { fetchNews, fetchSources } from '../services/news.services';

interface INewsAction extends Action {
  payload: INewsPayload;
}

export const fetchNews$ = (actions$: Observable<INewsAction>) =>
  actions$.pipe(
    ofType(FetchNews.Pending),
    switchMap(({ payload }) => {
      return fetchNews(payload).pipe(
        map((data) => ({
          type: FetchNews.Success,
          payload: data?.data?.articles,
        }))
      );
    })
  );

export const fetchSources$ = (actions$: Observable<Action<any>>) =>
  actions$.pipe(
    ofType(FetchSources.Pending),
    switchMap(() => {
      return fetchSources().pipe(
        map((data) => ({
          type: FetchSources.Success,
          payload: data?.data?.sources,
        }))
      );
    })
  );
