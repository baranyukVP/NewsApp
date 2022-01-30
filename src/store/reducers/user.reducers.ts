import { TLanguage } from '../../types';
import { IIpInfoDto } from '../../types/IpInfo';
import { FetchUserIpInfo } from '../actions/user.actions';

export interface IUserStore {
  ipInfo?: IIpInfoDto;
  ipInfoLoading: boolean;
  ipInfoError: string;
  language: TLanguage;
}

export const initialState: IUserStore = {
  ipInfo: undefined,
  ipInfoLoading: false,
  ipInfoError: '',
  language: window.navigator.language.substring(0, 2) as TLanguage,
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
