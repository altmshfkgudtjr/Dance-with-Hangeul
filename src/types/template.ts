// types
import { Theme } from 'src/types/theme';

/**
 * @type Template 타입
 * @property {} id 식별값
 * @property {} name 이름
 * @property {} consonant 초성
 * @property {} pronunciation 발음
 * @property {} info 설명
 * @property {} themes 가지고 있는 테마 식별값 리스트
 */
export type Template = {
  id: string;
  name: string;
  consonant: string;
  pronunciation: string;
  info: {
    ko: string;
    en: string;
  };
  themes: string[];
};
