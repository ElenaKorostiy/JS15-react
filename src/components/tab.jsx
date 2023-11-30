import { useState } from 'react';

export const Tab = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);
    

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div style={{ display: 'flex' }}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            style={{
              padding: '10px',
              cursor: 'pointer',
              borderBottom: index === activeTab ? '2px solid blue' : 'none',
            }}
            onClick={() => handleTabClick(index)}
            >
            {tab.label}
           
          </div>
        ))}
      </div>
      <div style={{ marginTop: '10px' }}>
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

