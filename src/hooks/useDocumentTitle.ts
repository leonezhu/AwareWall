import { useEffect } from 'react';

// 动态设置网页标题的Hook
export const useDocumentTitle = (title: string) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;
    
    // 清理函数：组件卸载时恢复原标题
    return () => {
      document.title = previousTitle;
    };
  }, [title]);
};

// 生成动态标题的工具函数
export const generateDynamicTitle = (motto: string): string => {
  return `${motto} - 觉察之墙`;
};