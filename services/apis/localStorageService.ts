import AsyncStorage from '@react-native-async-storage/async-storage';

const LocalStorageService = (function () {
  async function setToken(tokenObj: { token: string; refresh_token: string }) {
    try {
      await AsyncStorage.setItem('token', tokenObj.token);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  async function getAccessToken() {
    try {
      return await AsyncStorage.getItem('token');
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  async function clearToken() {
    try {
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('refresh_token');
    } catch (e) {
      console.log(e);
    }
  }

  return {
    setToken,
    getAccessToken,
    clearToken,
  };
})();
export default LocalStorageService;
