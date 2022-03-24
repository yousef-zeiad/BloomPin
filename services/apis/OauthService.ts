import axios from 'axios';
import localStorageService from './localStorageService';

const OauthService = (function () {
  async function login(pin: string) {
    await axios.post(`http://localhost:3000/login`, { pin }).then(async res => {
      if (res && res.data && res.data.token) {
        await localStorageService.setToken(res.data);
        return res.data;
      } else {
        throw new Error('Invalid pin');
      }
    });
  }
  async function logout() {
    const accessToken = await localStorageService.getAccessToken();
    if (accessToken) {
      await axios
        .post(`http://localhost:3000/logout`, {}, { headers: { Authorization: accessToken } })
        .then(async res => {
          if ((res && res.data, res.data.message)) {
            await localStorageService.clearToken();
            return true;
          } else {
            throw new Error('Unable to logout');
          }
        });
    }
  }
  return {
    login,
    logout,
  };
})();
export default OauthService;
