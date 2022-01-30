import { Action } from 'redux';
import { ofType } from 'redux-observable';
import { catchError, map, Observable, of, switchMap } from 'rxjs';

import { INewsPayload, ITopHeadlinesPayload } from '../../types/News';
import {
  FetchNews,
  FetchSources,
  FetchTopHeadlines,
} from '../actions/news.actions';
import {
  fetchNews,
  fetchSources,
  fetchTopHeadlines,
} from '../services/news.services';

export interface INewsAction extends Action {
  payload: INewsPayload;
}

export interface ITopHeadlinesAction extends Action {
  payload: ITopHeadlinesPayload;
}

export const fetchNews$ = (actions$: Observable<INewsAction>) =>
  actions$.pipe(
    ofType(FetchNews.Pending),
    switchMap(({ payload }) => {
      return fetchNews(payload).pipe(
        map((data) => ({
          type: FetchNews.Success,
          payload: data?.data?.articles,
        })),
        catchError((err) => {
          return of({
            type: FetchNews.Error,
            payload: err?.message || 'error',
            error: true,
          });
        })
      );
    })
  );

export const fetchTopHeadlines$ = (actions$: Observable<ITopHeadlinesAction>) =>
  actions$.pipe(
    ofType(FetchTopHeadlines.Pending),
    switchMap(({ payload }) => {
      return fetchTopHeadlines(payload).pipe(
        map((data) => ({
          type: FetchTopHeadlines.Success,
          payload: data?.data?.articles,
        })),
        catchError((err) =>
          of({
            type: FetchTopHeadlines.Error,
            payload: err?.message || 'error',
            error: true,
          })
        )
      );
    })
  );

export const fetchSources$ = (actions$: Observable<Action>) =>
  actions$.pipe(
    ofType(FetchSources.Pending),
    switchMap(() => {
      return fetchSources().pipe(
        map((data) => ({
          type: FetchSources.Success,
          payload: data?.data?.sources,
        })),
        catchError((err) =>
          of({
            type: FetchSources.Error,
            payload: err?.message || 'error',
            error: true,
          })
        )
      );
    })
  );
