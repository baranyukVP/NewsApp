import { ISourceDto } from '../../types';
import { FetchTopHeadlines } from '../actions/news.actions';

export interface INewsStore {
  sources: ISourceDto[];
  sourcesLoading: boolean;
}

export const initialState: INewsStore = {
  sources: [],
  sourcesLoading: false,
};

export const newsReducers = (state: INewsStore = initialState, action: any) => {
  switch (action.type) {
    case FetchTopHeadlines.Pending:
      return { ...state, sourcesLoading: true };
    case FetchTopHeadlines.Success:
      return { ...state, sourcesLoading: false, sources: action.payload };
    case FetchTopHeadlines.Error:
      return { ...state, sourcesLoading: false };
    case FetchTopHeadlines.Clear:
      return { ...state, sourcesLoading: false, sources: [] };

    default:
      return state;
  }
};
