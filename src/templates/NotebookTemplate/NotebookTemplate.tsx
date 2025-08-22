import React from 'react';
import { TemplateProps } from '../../types/template';
import { getAllMottos } from '../../data/content';
import './NotebookTemplate.css';

const NotebookTemplate: React.FC<TemplateProps> = ({ currentMotto }) => {
  const allMottos = getAllMottos();
  const currentIndex = allMottos.indexOf(currentMotto);

  return (
    <div className="notebook-template">
      <div className="notebook-paper">
        <div className="notebook-header">
          <h1 className="notebook-title"></h1>
          <div className="notebook-date">{new Date().toLocaleDateString('zh-CN')}</div>
        </div>
        
        <div className="notebook-content">
          <div className="motto-list">
            {allMottos.map((motto, index) => (
              <div 
                key={index} 
                className={`motto-line ${
                  index === currentIndex ? 'current-motto' : ''
                }`}
              >
                <span className="line-number">{index + 1}.</span>
                <span className="motto-text">{motto}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="notebook-footer">
          <div className="page-info">
            第 1 页 / 共 1 页
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotebookTemplate;