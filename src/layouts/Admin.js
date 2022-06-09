import React from 'react';

import Sidebar from '@/components/Sidebar/Sidebar.js';

export default function Admin({ children }) {
  return (
    <>
      <Sidebar />
      <div className='relative bg-blueGray-100 md:ml-64'>
        {/* <AdminNavbar /> */}
        {/* Header */}
        <div className='relative mx-auto w-full px-4 md:px-10'>
          {children}
          {/* <FooterAdmin /> */}
        </div>
      </div>
    </>
  );
}
