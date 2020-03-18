
import React from 'react';
import Dashboard from './pages/Dashboard';
import LoggedInSideBar from './layouts/LoggedInSideBar';

export default function App() {
 const title = 'My new application'
  return (
  <LoggedInSideBar title={title}>
    <Dashboard />;
  </LoggedInSideBar>
 );
}