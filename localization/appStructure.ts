/**
 * here we add the translation for all the screens and each screen has its own translation
 * @example
 * HomScreen{
 * mainText: 'homeScreen-main-text',
 * headerText: 'homeScreen-header-text',
 * },
 */
enum HomeScreen {
  logout = 'homeScreen-logout',
}

export const tokens = {
  screens: {
    home: HomeScreen,
  },
};
