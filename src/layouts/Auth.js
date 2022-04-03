import FooterSmall from 'components/Footers/FooterSmall.js';
// components
import Navbar from 'components/Navbars/AuthNavbar.js';
import React from 'react';

export default function Auth({ children }) {
  return (
    <>
      <Navbar transparent />
      <main>
        <section className='relative h-full min-h-screen w-full py-40'>
          <div
            className='absolute top-0 h-full w-full bg-blueGray-800 bg-full bg-no-repeat'
            style={{
              backgroundImage: "url('/img/register_bg_2.png')",
            }}
          ></div>
          {children}
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
