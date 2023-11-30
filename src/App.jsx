import React from 'react';
import { Table } from "./components/table";
import { Tab } from './components/tab';

import "./App.css"

export const App = () => {
   const tabs = [
    { label: 'Tab 1', content: 'Content for Tab 1'},
    { label: 'Tab 2', content: 'Content for Tab 2'},
    { label: 'Tab 3', content: 'Content for Tab 3'},
  ];
    return (
      <div>
      <h1>Reusable Tab Component</h1>
      <Tab tabs={tabs} />
      <Table/>
    </div>
  );
};
