import React from 'react';
import Header from './Header';

function Layout({ children }) {
  return (
    <>
      <Header />
      <main style={{ padding: '1rem' }}>
        {children}
      </main>
    </>
  );
}

export default Layout;