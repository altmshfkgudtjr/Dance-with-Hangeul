// types
import { Template } from 'src/types/template';
import { Theme } from 'src/types/theme';

/**
 * @type Template State 타입
 * @property {} selectedTemplate 현재 선택된 템플릿
 * @property {} templates 템플릿 리스트
 * @property {} defaultThemes 기본 테마 리스트
 */
export interface TemplateState {
  selectedTemplate: Template;
  templates: {
    [key: string]: Template[];
  };
  defaultThemes: Theme[];
}
