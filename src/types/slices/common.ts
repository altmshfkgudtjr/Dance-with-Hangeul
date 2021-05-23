/**
 * @type Common State 타입
 * @property {} controlOption Option 선택 타입
 * @property {} quotes 인용구 리스트
 * @property {} isFullscreen UI 가리기 여부
 */
export interface CommonState {
  controlOption: ControlOption;
  quotes: Quote[];
  isFullscreen: boolean;
}

/** @type 인용구 타입 */
export type Quote = {
  ko: string;
  en: string;
};

/** @type ControlBar 옵션 타입 */
export type ControlOption = null | 'Palette' | 'Save';
