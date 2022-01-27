import { ISourceDto } from '../../types';
import { INewsDto } from '../../types/News';
import { FetchNews, FetchSources } from '../actions/news.actions';

export interface INewsStore {
  news: INewsDto[];
  newsLoading: boolean;
  sources: ISourceDto[];
  sourcesLoading: boolean;
}

export const initialState: INewsStore = {
  news: [],
  newsLoading: false,
  sources: [],
  sourcesLoading: false,
};

export const newsReducers = (state: INewsStore = initialState, action: any) => {
  switch (action.type) {
    case FetchNews.Pending:
      return { ...state, newsLoading: true };
    case FetchNews.Success:
      return { ...state, newsLoading: false, news: action.payload };
    case FetchNews.Error:
      return { ...state, newsLoading: false };
    case FetchNews.Clear:
      return { ...state, newsLoading: false, news: [] };
    case FetchSources.Pending:
      return { ...state, sourcesLoading: true };
    case FetchSources.Success:
      return { ...state, sourcesLoading: false, sources: action.payload };
    case FetchSources.Error:
      return { ...state, sourcesLoading: false };
    case FetchSources.Clear:
      return { ...state, sourcesLoading: false, sources: [] };

    default:
      return state;
  }
};
