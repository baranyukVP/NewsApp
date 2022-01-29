import { ISourceDto } from '../../types';
import { INewsDto } from '../../types/News';
import {
  FetchNews,
  FetchSources,
  FetchTopHeadlines,
} from '../actions/news.actions';

export interface INewsStore {
  news: INewsDto[];
  newsLoading: boolean;
  newsError: string;
  sources: ISourceDto[];
  sourcesLoading: boolean;
  sourcesError: string;
}

export const initialState: INewsStore = {
  news: [],
  newsLoading: false,
  newsError: '',
  sources: [],
  sourcesLoading: false,
  sourcesError: '',
};

export const newsReducers = (state: INewsStore = initialState, action: any) => {
  switch (action.type) {
    case FetchNews.Pending:
      return { ...state, newsLoading: true, newsError: '' };
    case FetchNews.Success:
      return {
        ...state,
        newsLoading: false,
        news: action.payload,
        newsError: '',
      };
    case FetchNews.Error:
      return { ...state, newsLoading: false, newsError: action.payload };
    case FetchNews.Clear:
      return { ...state, newsLoading: false, news: [], newsError: '' };
    case FetchTopHeadlines.Pending:
      return { ...state, newsLoading: true, newsError: '' };
    case FetchTopHeadlines.Success:
      return {
        ...state,
        newsLoading: false,
        news: action.payload,
        newsError: '',
      };
    case FetchTopHeadlines.Error:
      return { ...state, newsLoading: false, newsError: action.payload };
    case FetchTopHeadlines.Clear:
      return { ...state, newsLoading: false, news: [], newsError: '' };
    case FetchSources.Pending:
      return { ...state, sourcesLoading: true, sourcesError: '' };
    case FetchSources.Success:
      return {
        ...state,
        sourcesLoading: false,
        sources: action.payload,
        sourcesError: '',
      };
    case FetchSources.Error:
      return { ...state, sourcesLoading: false, sourcesError: action.payload };
    case FetchSources.Clear:
      return { ...state, sourcesLoading: false, sources: [], sourcesError: '' };

    default:
      return state;
  }
};
