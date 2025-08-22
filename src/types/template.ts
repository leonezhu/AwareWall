// 模板系统类型定义

export interface TemplateProps {
  mottos: string[];
  currentMotto: string;
}

export interface TemplateConfig {
  id: number;
  name: string;
  description: string;
  component: React.ComponentType<TemplateProps>;
}

export type TemplateRegistry = TemplateConfig[];