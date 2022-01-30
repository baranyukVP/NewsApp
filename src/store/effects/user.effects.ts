import { Action } from 'redux';
import { ofType } from 'redux-observable';
import { catchError, map, Observable, of, switchMap } from 'rxjs';

import { FetchUserIpInfo } from '../actions/user.actions';
import { fetchUserIpInfo } from '../services/user.services';

export const fetchUserIpInfo$ = (actions$: Observable<Action<any>>) =>
  actions$.pipe(
    ofType(FetchUserIpInfo.Pending),
    switchMap(() => {
      return fetchUserIpInfo().pipe(
        map((data: any) => ({
          type: FetchUserIpInfo.Success,
          payload: data?.data,
        })),
        catchError((err) =>
          of({
            type: FetchUserIpInfo.Error,
            payload: err?.message || 'error',
            error: true,
          })
        )
      );
    })
  );
