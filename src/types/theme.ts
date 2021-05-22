// types
import { Mode } from 'src/types/common';

/** @type Theme 타입 */
export type Theme = {
  id: string;
  bgColor: string;
  fgColor: string[];
  mode: Mode;
};
