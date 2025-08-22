import React, { useState, useEffect } from 'react';
import { getRandomMotto } from './data/content';
import { selectTemplate } from './utils/router';
import { useDocumentTitle, generateDynamicTitle } from './hooks/useDocumentTitle';
import { TemplateConfig } from './types/template';
import './App.css';

function App() {
  const [currentMotto, setCurrentMotto] = useState<string>('');
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateConfig | null>(null);

  // 初始化应用状态
  useEffect(() => {
    // 选择模板
    const template = selectTemplate();
    setSelectedTemplate(template);
    
    // 获取随机座右铭
    const motto = getRandomMotto();
    setCurrentMotto(motto);
  }, []);

  // 动态设置网页标题
  useDocumentTitle(currentMotto ? generateDynamicTitle(currentMotto) : '觉察之墙');

  // 如果还没有加载完成，显示加载状态
  if (!selectedTemplate || !currentMotto) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '1.5rem',
        color: '#666'
      }}>
        正在加载觉察之墙...
      </div>
    );
  }

  // 渲染选中的模板
  const TemplateComponent = selectedTemplate.component;
  
  return (
    <TemplateComponent 
      mottos={[]} // 暂时传空数组，模板主要使用currentMotto
      currentMotto={currentMotto}
    />
  );
}

export default App;
