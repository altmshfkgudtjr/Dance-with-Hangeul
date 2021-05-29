// types
import { Theme } from 'src/types/theme';

/**
 * @type Theme State 타입
 * @property {} selectedTheme 현재 선택된 테마
 * @property {} themes 테마 Dictionary
 * @property {} defaultThemes 기본 테마 리스트
 */
export interface ThemeState {
  selectedTheme: Theme;
  themes: {
    [key: string]: Theme;
  };
  defaultThemes: Theme[];
}
