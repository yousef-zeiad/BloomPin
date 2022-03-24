import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

import { english } from './en';

export const translate = (key: string) => i18n.t(key);

const getLocale = () => {
  //to overcome the difference between ios and android returned locale.
  return Localization.locale.slice(0, 2);
};
export const setI18nConfig = () => {
  i18n.translations = { en: english };
  i18n.fallbacks = true;
  i18n.locale = getLocale();
};
