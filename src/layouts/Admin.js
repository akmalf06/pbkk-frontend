import React from 'react';

import FooterAdmin from '@/components/Footers/FooterAdmin.js';
import HeaderStats from '@/components/Headers/HeaderStats.js';
import AdminNavbar from '@/components/Navbars/AdminNavbar.js';
import Sidebar from '@/components/Sidebar/Sidebar.js';

export default function Admin({ children }) {
  return (
    <>
      <Sidebar />
      <div className='relative bg-blueGray-100 md:ml-64'>
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className='-m-24 mx-auto w-full px-4 md:px-10'>
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
