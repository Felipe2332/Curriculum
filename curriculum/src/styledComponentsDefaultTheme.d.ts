import 'styled-components';
import {CustomThemeType} from './styledComponentsDefaultTheme'


declare module 'styled-components' {
  export interface DefaultTheme extends CustomThemeType {}
}
