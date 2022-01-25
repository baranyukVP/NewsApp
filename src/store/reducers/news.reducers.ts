import { FetchTopHeadlines } from '../actions/news.actions';

interface INewsStore {
  topHeadlinesLoading: boolean;
}

export const newsReducers = (state: INewsStore, action: any) => {
  switch (action.type) {
    case FetchTopHeadlines.Pending:
      return { ...state, topHeadlinesLoading: true };
    case FetchTopHeadlines.Success:
      return { ...state, topHeadlinesLoading: false };
    case FetchTopHeadlines.Error:
      return { ...state, topHeadlinesLoading: false };
    case FetchTopHeadlines.Clear:
      return { ...state, topHeadlinesLoading: false };

    default:
      return state;
  }
};
