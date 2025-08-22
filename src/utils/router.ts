// 路由逻辑工具函数

import { getTemplateById, getRandomTemplate } from '../templates/registry';
import { TemplateConfig } from '../types/template';

// 获取URL查询参数
export const getQueryParams = (): URLSearchParams => {
  return new URLSearchParams(window.location.search);
};

// 获取模板ID参数
export const getTemplateIdFromUrl = (): number | null => {
  const params = getQueryParams();
  const templateId = params.get('m');
  
  if (templateId) {
    const id = parseInt(templateId, 10);
    return isNaN(id) ? null : id;
  }
  
  return null;
};

// 根据URL参数选择模板
export const selectTemplate = (): TemplateConfig => {
  const templateId = getTemplateIdFromUrl();
  
  if (templateId) {
    // 如果URL中指定了模板ID，尝试获取对应模板
    const template = getTemplateById(templateId);
    if (template) {
      return template;
    }
  }
  
  // 如果没有指定模板ID或指定的模板不存在，返回随机模板
  return getRandomTemplate();
};

// 更新URL参数（不刷新页面）
export const updateUrlParams = (templateId: number): void => {
  const url = new URL(window.location.href);
  url.searchParams.set('m', templateId.toString());
  window.history.replaceState({}, '', url.toString());
};

// 清除URL参数
export const clearUrlParams = (): void => {
  const url = new URL(window.location.href);
  url.search = '';
  window.history.replaceState({}, '', url.toString());
};