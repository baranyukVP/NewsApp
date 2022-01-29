import { FetchUserIpInfo } from '../actions/user.actions';

export interface IUserStore {
  ipInfo: any;
  ipInfoLoading: boolean;
  ipInfoError: string;
}

export const initialState: IUserStore = {
  ipInfo: {},
  ipInfoLoading: false,
  ipInfoError: '',
};

export const userReducers = (state: IUserStore = initialState, action: any) => {
  switch (action.type) {
    case FetchUserIpInfo.Pending:
      return { ...state, ipInfoLoading: true, ipInfoError: '' };
    case FetchUserIpInfo.Success:
      return {
        ...state,
        ipInfoLoading: false,
        ipInfo: action.payload,
        ipInfoError: '',
      };
    case FetchUserIpInfo.Error:
      return { ...state, ipInfoLoading: false, ipInfoError: action.payload };
    case FetchUserIpInfo.Clear:
      return { ...state, ipInfoLoading: false, ipInfo: [], ipInfoError: '' };

    default:
      return state;
  }
};
