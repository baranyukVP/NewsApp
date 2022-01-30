import axios from 'axios-observable';

export const fetchUserIpInfo = () =>
  axios.get('https://ipinfo.io?token=279bf42b77eeb3');
