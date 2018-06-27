import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import aphroditeInterface from 'react-with-styles-interface-aphrodite';
import { css, withStyles, withStylesPropTypes } from 'react-with-styles';

ThemedStyleSheet.registerTheme({
  color: {
    primary: '#FF5A5F',
    secondary: '#00A699',
  },
});

ThemedStyleSheet.registerInterface(aphroditeInterface);

export { css, withStyles, withStylesPropTypes, ThemedStyleSheet };