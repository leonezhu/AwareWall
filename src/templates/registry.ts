// 模板注册系统

import { TemplateRegistry } from '../types/template';
import NotebookTemplate from './NotebookTemplate/NotebookTemplate';

// 模板注册表
export const templateRegistry: TemplateRegistry = [
  {
    id: 1,
    name: '作业本风格',
    description: '简洁实用的作业本风格模板，带有横线背景和纸张纹理',
    component: NotebookTemplate
  }
  // 未来可以在这里添加更多模板
  // {
  //   id: 2,
  //   name: '简约风格',
  //   description: '简洁优雅的极简主义模板',
  //   component: MinimalTemplate
  // }
];

// 根据ID获取模板
export const getTemplateById = (id: number) => {
  return templateRegistry.find(template => template.id === id);
};

// 获取随机模板
export const getRandomTemplate = () => {
  const randomIndex = Math.floor(Math.random() * templateRegistry.length);
  return templateRegistry[randomIndex];
};

// 获取所有可用模板
export const getAllTemplates = () => {
  return [...templateRegistry];
};